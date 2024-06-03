<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Overview
The Chat Application is a real-time messaging platform that allows users to register, log in, and communicate with each other in real time using WebSockets. It provides REST API endpoints for user authentication and WebSocket endpoints for real-time messaging.

## Features
- User Registration: Allows users to register with a unique username, email, and password.
- User Login: Allows registered users to log in and obtain JWT tokens for authentication.
- WebSocket Chat: Enables real-time communication between logged-in users through WebSocket connections.

## Technologies Used
- NestJS: A progressive Node.js framework for building efficient, reliable, scalable server-side applications.
- MongoDB: A NoSQL database used for storing user data.
- Passport.js: A middleware for user authentication in Node.js applications.
- JWT (JSON Web Tokens): A standard for securely transmitting information between parties as a JSON object.

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation
1) Clone the repository from GitHub:
2) cd chat-application
3) npm install
4) Set up environment variables:
        Create a .env file in the root directory and add the following variables:
          MONGODB_URI=<your_mongodb_uri>
          JWT_SECRET=<your_jwt_secret_key>


## Running the app

1) Start the server:
    npm run start

2) Access the application:
   Use Postman to access the application:
       REST API endpoints: http://localhost:3000
       WebSocket endpoint: ws://localhost:3000

## Test
1) User Registration
    URL: /user/register
    Method: POST
    Provide username, password, and email in the body.

2) User Login
    URL: /auth/login
    Method: POST
   Provide username and password in the body.
   You will get the Access Token.

3) Create two socket.io requests on Postman.
   URL: ws://localhost:3000
   Provide access token in the Header part.
   Provide a Message in the 'Message' body.


## Usage
Register a new user using the /user/register endpoint.
Log in with the registered user using the /auth/login endpoint to obtain a JWT token.
Establish a socket.io connection to the server at ws://localhost:3000.
Send and receive real-time messages through the socket.io connection in the terminal.


## Support

Nest is an MIT-licensed open-source project. It can grow thanks to the sponsors and support of the amazing backers. If you want to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
