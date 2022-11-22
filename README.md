# GitHub API App

This application redirects users to authenticate on GitHub using OAuth, and when successful, users are granted further permissions to use the app.
Authenticated users see the following:

## Basic User Profile
- Avatar
- Name
- Location
- Email
- Total Public Repos
- Total Private Repos

<hr />
Users also can click each repo displayed to view more details such as:
- Repo name
- Repo language
- Followers
- Repo URL, and
- Repo description

## Installation
To run the app locally:
- Clone this repository on your local machine and <code> CD </code> into it with your terminal.
- Make sure you have NodeJS and NPM installed or follow this [link](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/) to complete this step.
- In the project root directory of your terminal, move into the server directory (<code> CD server </code> ) and run <code> npm install. </code> 
- In the same server directory, create an empty <code> .env </code> file. You may use <code> touch .env </code> or manually create one.
- Navigate to the Client directory with your terminal and run <code> npm install </code> to install all dependencies.
- Login to your GitHub account and create an OAuth App. You may follow this [guide](https://docs.github.com/en/developers/apps/building-oauth-apps)
- In your empty <code> .env </code> file, create a <code>GITHUB_CLIENT_ID </code> and <code> GITHUB_CLIENT_SECRETS </code> variables and assign them with the secret codes generated in the step above.
- Add a <code> SESSION_SECRETS </code> variable in the <code> .env </code> file and assign it an array of any set of characters/secrets.
- Add a <code> CLIENT URL </code> variable to the <code> .env </code> file and assign it the value <code> http://localhost:3000/</code>
- Navigate to the Server directory of the project with your terminal and run <code> npm start<code/>.
- Create a new terminal and navigate to the Client directory of the project.
- Run <code> npm start <code/> to start using the app on your browser
