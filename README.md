## Table of Contents
- [What is the app built with](#Application-Background)
- [Getting started](#Getting-Started)
- [How to run the application](#How-To-Run-App)
- [Features on the app](#Features)
- [Screenshots](#Screenshots)
- [What is next?](#Future-Plans)

## Application-Background
Built with: JavaScript, ReactJS, NextJS, TailwindCSS, Amazon Amplify


## Getting-Started

# Prerequisites:
Install Node.js through the nodejs.org website, making sure to install version 14 or above.

Open a Windows Powershell window and type:
```shell 
npm install -g npm
```

Finally, type: 
```shell
npm install -g @aws-amplify/cli
``` 
to install the Amplify Command Line Interface.

## How-To-Run-App

# Initial setup:

In a Powershell window, type:
```shell
npm i --force
```

Following this, type:
```shell
amplify pull --appId d3uf1mcqkova8 --envName staging
```
- If an error occurs, delete the folder titled "amplify" or "amplify-back" in the same directory as package.json and run the command again.
  
Amplify will request selections from you
- simply choose the default selections every time and yes when it asks if you want backend access.
  
Choose to log in through an AWS account (root user), 
  enter the user information:
  ```shell
  Email: forrestindustry@gmail.com
  Password: Cmpt370!
  ```

# Running the library management system:
Simply type:
```shell
npm run dev
```
- Using any web browser, navigate to ```localhost:3000``` to access the web application

## Features

📝 Signup / Create an account

📚 Add books to the library system
   - Connected to AWS database

❌ Remove books from the library system
   - Connected to AWS database
📅 View book reservations made

📌 Reserve/Un-Reserve books

👨 Filter books by age group
   - 18+ users can view books taged with "18+"

🔍 Search for books

⏰ Late penalty fee

👑 Admin Account - Admin features/Full access 

## Screenshots 
1.
<img src="https://github.com/AbdurraoufE/Library-Management-System/assets/80374873/f9111fa4-33de-41d0-bde0-672d856ab9fb" alt="Image1" width="200" height="400">
2.
<img src="https://github.com/AbdurraoufE/Library-Management-System/assets/80374873/9e246373-f570-4db7-948e-086acaacb3b4" alt="Image2" width="500" height="250">
3.
<img src="https://github.com/AbdurraoufE/Library-Management-System/assets/80374873/33c3b117-ddfa-4ddf-a068-f8d5b5d8d3c0" alt="Image3" width="250" height="250">
4.
<img src="https://github.com/AbdurraoufE/Library-Management-System/assets/80374873/fa5d7e53-33ce-4c68-8c57-34fd4b383de6" alt="Image4" width="250" height="250">
5.
<img src="https://github.com/AbdurraoufE/Library-Management-System/assets/80374873/d1b4412f-c0b6-4a82-b8b5-55d77a6b664b" alt="Image5" width="250" height="250">
6.
<img src="https://github.com/AbdurraoufE/Library-Management-System/assets/80374873/06348d5a-33f9-468c-a122-15e5f202f2d1" alt="Image6" width="250" height="250">
7.
<img src="https://github.com/AbdurraoufE/Library-Management-System/assets/80374873/21bd32cb-68e8-431b-a354-1ebb2c86eb1d" alt="Image7" width="250" height="250">
8.
<img src="https://github.com/AbdurraoufE/Library-Management-System/assets/80374873/617fb0e0-7cb3-407d-a8d3-ce61ad42584f" alt="Image8" width="250" height="250">





















