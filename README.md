# Team A Cohort project 

### Install instructions

Backend - 
1. Clone the repo and run `cd backend` and do an `npm install` 
2. Create a .env file in the root of the backend file and create a PORT variable for the port to run on, and MONGO_URI with the mongoDB connection string
3. The run command is `npm run dev` which will run nodemon to listen for any backend changes
4. If the server runs successfully, there will be a "connected to DB & server ready at http://localhost:PORT


Frontend - 
1. The project is built with Vite and React v18 is installed 
2. React Router is installed and imported in the App.js file 
3. `cd frontend` and run `npm install`
4. `npm run dev` to run the frontend
5. Frontend has a proxy defined to bypass CORS errors during development

 
### Some rules for Pull Requests
1. Include the Jira Issue Number (DSD100-##), your name or initials, and the subject of the issue in the Pull Request Title
  Exmple - DSD1000-1_ba_InitialRepositoryCommit
2. In the Pull Request description, include comments about your changes, how to test them (if applicable) or any relevant screenshots
  I'll make a template for this!


### Branching
1. Include the Jira Issue Number for the task you're currently working on followed by your initials and a brief description of the task, just like with the PR requests
  IE: DSD100-1_ba_ThisIsTheIssue
2. Make sure you are committing your changes to your own branch and not to the development branch
