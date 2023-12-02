## Table of Contents
- [What is the app built with](#Application-Background)
- [Getting started](#Getting-Started)
- [How to run the application](#How-To-Run-App)
- [Features on the app](#Features)
- [Screenshots](#screenshots)
- [What is next?](#Future-Plans)

## Application-Background
Built with: JavaScript, ReactJS, NextJS, TailwindCSS, Amazon Amplify


## Getting-Started / Installation

# Prerequisites:
Install Node.js through the nodejs.org website, making sure to install version 14 or above.

Open a Windows Powershell window and type ```"npm install -g npm".```

Finally, type 
```shell
"npm install -g @aws-amplify/cli"
``` 
to install the Amplify Command Line Interface.

## How-To-Run-App
# Initial setup:

In a Powershell window, type "npm i --force".

Following this, type "amplify pull --appId d3uf1mcqkova8 --envName staging". 
  If an error occurs, delete the folder titled "amplify" or "amplify-back" in the same directory as package.json and run the command again.
  
Amplify will request selections from you
  simply choose the default selections every time and yes when it asks if you want backend access.
  
Choose to log in through an AWS account (root user), 
  enter the user information 
  Email: forrestindustry@gmail.com
  Password: Cmpt370!
  
# Running the library management system:
Simply type "npm run dev". 
  Using any web browser, navigate to localhost:3000 to access the webapp.
