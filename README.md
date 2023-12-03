# Table of Contents
- [What is the app built with](#Application-Background)
- [Getting started](#Getting-Started)
- [How to run the application](#How-To-Run-App)
- [Features on the app](#Features)
- [Screenshots](#Screenshots)
- [What is next?](#Future-Plans)

# Application-Background
Built with: JavaScript, ReactJS, NextJS, TailwindCSS, Amazon Amplify


# Getting-Started

## Prerequisites:
Install Node.js through the official [Node.js website](https://nodejs.org/), making sure to <b>install version 14</b> or above.

Open a Windows Powershell window and type:
```shell 
npm install -g npm
```

Finally, type to install the Amplify Command Line Interface:
```shell
npm install -g @aws-amplify/cli
``` 

# How-To-Run-App

## Initial setup:

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

## Running the library management system:
Simply type:
```shell
npm run dev
```
- Using any web browser, navigate to ```localhost:3000``` to access the web application

# Features

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

# Screenshots 

## Add a book
<img src="https://github.com/AbdurraoufE/Library-Management-System/assets/80374873/f9111fa4-33de-41d0-bde0-672d856ab9fb">

---

## View books
<img src="https://github.com/AbdurraoufE/Library-Management-System/assets/80374873/9e246373-f570-4db7-948e-086acaacb3b4">

---

## Reserve/Un-Reserve books
<img src="https://github.com/AbdurraoufE/Library-Management-System/assets/80374873/33c3b117-ddfa-4ddf-a068-f8d5b5d8d3c0">

---

## Reserve/Un-Reserve books
<img src="https://github.com/AbdurraoufE/Library-Management-System/assets/80374873/fa5d7e53-33ce-4c68-8c57-34fd4b383de6">

---

## Add fines to user accounts
<img src="https://github.com/AbdurraoufE/Library-Management-System/assets/80374873/d1b4412f-c0b6-4a82-b8b5-55d77a6b664b">

---

## Create an account
<img src="https://github.com/AbdurraoufE/Library-Management-System/assets/80374873/06348d5a-33f9-468c-a122-15e5f202f2d1">

---

## View books for users who are younger than 18 years old
<img src="https://github.com/AbdurraoufE/Library-Management-System/assets/80374873/21bd32cb-68e8-431b-a354-1ebb2c86eb1d">

---

## View books for users who are older than 18 years old
<img src="https://github.com/AbdurraoufE/Library-Management-System/assets/80374873/617fb0e0-7cb3-407d-a8d3-ce61ad42584f">

# Future-Plans

## Rework UI
- Enhance the user interface to provide a more intuitive and visually appealing experience. Employ improved color schemes to create a user-friendly environment
  
## Notifications
- Implement a notification system to alert users about upcoming due dates, overdue books, and available book pickups
  
## Statistics and Reports
- Develop visualizations that showcase the popularity and readership of specific books, offering insightful statistics for better decision-making

## Feedback System
- Enable users to rate books using a 5-star system, fostering community engagement and providing valuable feedback

## Report System
- Introduce a reporting mechanism, allowing users to notify administrators of any issues with books, such as damage or missing pages

## Hosting
- Host the website to the web, with a custom domain so anybody can access it and start using it!




