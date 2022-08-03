Welcome to the HackerNews clone progect.
This project is an example of React-tech-stack app.

## Requrements to the future app:

Create a webpage that displays 10 random Hacker News stories using the Hacker News API.
The stories must be listed in ascending order based on the stories score.
The UI must include:
• Story title
• Story URL
• Story timestamp
• Story score
• Author id
• Author karma score
• A dummy image (not from API – just a static asset)

API documentation: https://github.com/HackerNews/API

Requirements:
• UI must be responsive
• CSS must be compiled with a preprocessor
• Do not use a UI library or CSS framework
Bonus Points:
• Visual eye-candy and user experience
• Use a modern Javascript framework
• Use Typescript

## Getting Started

1. Open the app in terminal and run "yarn buld"
2. Then, run "yarn dev" and open the [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## App Description

1. App has been built with NextJS framework, Typescript and SASS preprocessor for the styles.
2. App has one page HomePage => in /pages/homePage.tsx
3. App has small components in the /src/components folder;
4. App types.tsx can be found in /src/utils folder
5. All API requests handles with axios and can be found in src/services/requests
6. App state management handels with React Queryes and React Hooks.