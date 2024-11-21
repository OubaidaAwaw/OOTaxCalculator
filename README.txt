
# Node.js MVC Application with Docker Practice

This repository showcases my practice project, where I explore building and running applications using Docker. It is part of my learning journey to understand containerization, Dockerfiles, and running applications in containers.

## Project Overview

This project is a Node.js application built with the MVC (Model-View-Controller) architecture. The primary goal is to containerize the application and learn the foundational steps required to manage and deploy containerized applications.

Although the project emphasizes containerization and running applications on the cloud, I do not have an IBM Cloud account. As a result, my work is focused on the first four points of the objectives outlined in the provided materials.

---

## Key Features

- **Node.js and Express Framework**: A simple application using Express.js as the backend framework.
- **Testing with Jasmine**: Although Jest is more modern, I used Jasmine per the task requirements.
- **Learning Docker Basics**: Practiced creating Dockerfiles and understanding containerization.
- **MVC Architecture**: Followed an organized code structure for scalability and maintainability.

---

## Dependencies

### From `package.json`
- **Production Dependencies**:
  - `express`: ^4.21.1
- **Development Dependencies**:
  - `jasmine`: ^5.4.0

---

## Project Objectives

The project follows tasks from a provided guide and focuses on:

1. **Containerizing the Application**: Writing a Dockerfile and setting up the Node.js application in a container.
2. **Running Unit Tests**: Verifying that the application functions correctly before deployment.
3. **Understanding Pipelines** (Not implemented due to lack of IBM Cloud): Exploring the theory of Tekton pipelines for automating build and deployment processes.

---

## How to Run the Project

### Prerequisites
- Install [Node.js](https://nodejs.org/)
- Install Docker ([Get Docker](https://www.docker.com/get-started))

### Steps
1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Run the application locally**:
   ```bash
   npm start
   ```
3. **Run the tests**:
   ```bash
   npm test
   ```
4. **Build and Run with Docker**:
   - Build the Docker image:
     ```bash
     docker build -t my-node-app .
     ```
   - Run the container:
     ```bash
     docker run -p 3000:3000 my-node-app
     ```
   - Open the application in your browser at `http://localhost:3000`.

---

## Testing

I wrote unit tests for the endpoints using Jasmine. All tests passed successfully, ensuring the core functionality of the application.

---

## Acknowledgments

This project is based on a task from the Coursera course by IBM. Special thanks to the course instructor for providing clear guidance and practical exercises.

--- 

## About Me

I am a beginner in backend development and containerization. This repository reflects my learning journey as I explore new technologies like Docker, pipelines, and MVC architectures.

Feel free to provide feedback or suggestions on how I can improve!
