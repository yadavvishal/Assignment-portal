# Assignment Submission Portal

This project is a backend implementation for an assignment submission portal using **Node.js**, **Express**, and **MongoDB Atlas**. The portal allows users to register, log in, and upload assignments, while admins can log in, view, accept, and reject assignments. The system uses JWT-based authentication to secure user and admin routes.

## Table of Contents

- [Technologies](#technologies)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
  - [User Endpoints](#user-endpoints)
  - [Admin Endpoints](#admin-endpoints)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Technologies

- **Node.js** - JavaScript runtime for building scalable backend services.
- **Express.js** - Web framework for Node.js.
- **MongoDB Atlas** - NoSQL database used for storing user, admin, and assignment data.
- **Mongoose** - Object Data Modeling (ODM) library for MongoDB and Node.js.
- **JWT (JSON Web Token)** - Used for securing routes with token-based authentication.
- **bcryptjs** - Used for hashing passwords.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/assignment-submission-portal.git
   cd assignment-submission-portal
