# Project Exam 2
## Description
An existing Social Media company has approached you to create a brand new front end for their application. While they have a list of required features, the design and user experience has not been specified. Working with the official API documentation, plan, design and build a modern front end social media application.

All admin functionality is managed by an existing application. This project only covers the front-end application for the API. The API you are using for this project can be found under Social EndPoints in the [Noroff API documentation](https://noroff-api-docs.netlify.app/).

[API Guide](https://noroff-api-docs.netlify.app/social-endpoints/authentication)
[API Documentation](https://nf-api.onrender.com/docs)

To enter the website you first need to register and log in.

### Built With
01.JavaScript Frameworks
Vite + React.jsx

02.CSS Frameworks
Styled Components 


#### Getting Started
01. Clone the repo
git clone git@github.com:Silje32/Final_Project_Exam_2.git

02. Install the dependencies
In the terminal in Visual Studio Code write; "npm i" or "npm install".

02. You also need to install React Router:
To install React Router you simply just write the command; "npm install react-router-dom" in the terminal of VSC.

03. For styling you need to install styled components:
In the terminal in VSC write; "npm i styled-components". 

04. For the LoginForm you will need to install react hook form + Zustand + yup:
In the terminal in VSC write; "npm install react-hook-form". Then for yup validation you need to install "npm install @hookform/resolvers yup". Lastly install Zustand "npm i zustand".

05. For managing secrets you need to install a dotenv package and make a .gitignore file and a .env file:
Before you install a dotenv package make sure that you have Node installed first (https://nodejs.org/en/download/). You can check that the installation was successfull by running: "node -v" in the terminal.
Then you can install the package by typing "npm i -D dotenv" in the terminal. Check your package.json file that you actually got the package. 

In the src folder make a .gitignore file and a .env file. Inside the .gitignore file write 
/node_modules and .env. This will now  exclude these folders. It is important to include .env in the 
.gitignore file BEFORE you write any sensitive information in the .env file. 

In your .env file write the API URL. You also need to create an .env.example file. Here you write the same information in the same format but you exclude the details so the developer can use their own details to access the information. 

##### Usage Instructions for the .env file
1. Register an account here `https://app.api/register`
2. Get your key from `https://app.api/account/keys`
3. Visit `https://app.api/docs` for endpoints
4. Enter username, key and target endpoint in `.env`


###### Running
To run the app, run the following command: "npm run dev". This process will start the development server. To access the development server copy the link from the terminal in VSC and paste the link in a browser window. 


###### Icons
01. For the Icons go to the webpage https://getemoji.com/
You can copy paste the icons directly to your code.


###### Contact 
My LinkedIn page : www.linkedin.com/in/silje-heldal-monsen-866229171


###### Acknowledgments
My React teacher at Noroff Connor O´Brien helped me with this project.   







