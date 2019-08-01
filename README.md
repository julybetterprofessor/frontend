Better Professor Front End

Description
This app allows the user to make an account, sign in, and track students. Users can create an account based on their role (Professor, Student)

Getting Started
For an example of how to implement this code on the client side see the link below: https://github.com/julybetterprofessor/frontend

Prerequisites
All of the below dependencies can be installed using:
yarn add < name_of_dependency >
for dev dependencies simply add --dev after the < name_of_dependency >

Installation
This project was created using yarn and designed for react client side. Other dependencies include:

  "dependencies": {
    "@babel/code-frame": {
      "version": "7.5.5",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.5.5.tgz",
      "integrity": "sha512-27d4lZoomVyo51VegxI20xZPuSHusqbQag/ztrBC7wegWoQ1nLREPVSKSW8byhTlzTKyNE4ifaTA6lCp7JjpFw==",
      "requires": {
        "@babel/highlight": "^7.0.0"
      }
    },


Examples of Tables
User table {

id <-- Required
fullName
email
username <-- Required
password <-- Required }
Usage
EndPoints
User

Register a user - POST

https://log-in-better-professor.netlify.com/register

Login - POST

https://log-in-better-professor.netlify.com/signin


Dashboard -POST

https://log-in-better-professor.netlify.com/dashboard

Edit Student -POST

https://log-in-better-professor.netlify.com/edit/:id

Support
GITHUB: https://github.com/LambdaSchool 
email: jyoojs@gmail.com

Authors and acknowledgment
Shout out to Louie Williford and Teddy Ngo!!

Project status
This project may have updates from time to time to keep it up to date so if you have an issue see the support section.