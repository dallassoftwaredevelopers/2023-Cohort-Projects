# Event Managment Server

## Getting started

- Download Intellij Community Edition
- Open the server directory (the folder this README lives in) in Intellij.
- Start Docker on your computer if its not already started then run docker-compose up --build in your terminal in this directory to 
start your database. (The Spring Boot app will error if its unable to connect to the database).
- Double tap SHIFT to search files and find the Team6Application file. Click the green arrow on line 7 to attempt to start the app.
This will fail, but don't worry. Now that we've clicked, it we can add environment variables to our start configuration
- To add environment variables, click Team6Application next to the green start arrow in the upper right hand part of your editor then
click edit configuration. Click the icon at the end of the input for environment variables and add POSTGRES_DB, POSTGRES_USER, and POSTGRES_PASSWORD
all with the value postgres

For help with dependences, open the HELP.md file which has links to documentation about different dependencies in this project.
