# Stage 1: Install dependencies
FROM node:16-alpine AS deps

# Install OS dependencies needed and libraries for image optimization
RUN apk add --no-cache libc6-compat \
    build-base \
    g++ \
    cairo-dev \
    jpeg-dev \
    pango-dev \
    giflib-dev \
    librsvg-dev \
    imagemagick-dev \
    optipng \
    pngquant \
    gifsicle \
    webp-tools

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Stage 2: Build the app
FROM node:16-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy dependencies
COPY --from=deps /app/node_modules ./node_modules

# Copy the rest of the app's files
COPY . .

# Build the app
RUN npm run build

# Stage 3: Create the production image
FROM node:16-alpine AS runner

# Set the working directory
WORKDIR /app

# Set environment variables
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Add non-root user to run the app
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

# Copy necessary files from the build image
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Copy the built app
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next

# Install tailwindcss
RUN npm install tailwindcss@latest postcss@latest autoprefixer@latest

# Install TypeScript
RUN npm install -D typescript @types/react @types/node

# Set the non-root user as the app's owner
RUN chown -R nextjs:nodejs /app

# Set the user to run the app
USER nextjs

# Expose the app's port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]