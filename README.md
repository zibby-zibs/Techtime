This is TechTime. It's an e-learning platform for people to start their tech careers.

## Getting Started

First, Docker is a containerization platform that allows you to package up your application and all its dependencies into a single container.This container can be easily deployed to any environment that supports Docker, ensuring that your application runs consistently and reliably across different environments.

To run the dockerfile I have created in this project, you firstly need to build the image before you run it and this is the command
```
To build
#docker build -t techtime .

To run
#docker run -p 3000:3000 techtime
```

This will start a container with the Docker image and map port 3000 of the container to port 3000 of your local machine. You can then access the Next.js app by navigating to http://localhost:3000 in your web browser. 

The images built can be made publicly accessible by uploading to a public repository like Docker Hub.


