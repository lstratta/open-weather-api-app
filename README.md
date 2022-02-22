# OpenWeather App Spec Project

### Goals of the project
----
* Work with test-driven development
* Work with an API
* Work with responsive data
* Create a secure login system
* Create a frontend that works with data and is responsive
* To create a CI/CD pipeline, deploy the application on AWS and to use Jenkins
* Work with Git

### Purpose of each element

Frontend - ReactJS
* To present data in an intuitive way and allow the user to navigate the page and find information easily
* To learn and develop my web design skills

Backend - NodeJS and ExpressJS
* To manage server-side computation and user information
* To interact with the API while having a platform to build off of and add more features in the future
* To learn and develop my backend skills

OpenWeather API
* The source of all weather information

Database - MongoDB
* To expand the functionality of the website and work with telemetry for websites


N.B. I chose each of these because that's what I was taught during my time learning with Digital Futures. I thought it would be better to dive deeper into learning the features and functionality of these languages, rather than going back and forth with new tech. 

This will allow me to understand what each of these languages can do, and make me a better developer overall. When I eventually do work with different languages, I will know what is able to be achieved so I will just have to learn how to do that in a different language.


### The Tech Stack

* ReactJS with Bootstrap
* NodeJS
* ExpressJS
* Mongoose and MongoDB

## To Download, install and run the project
---
To test this project locally, you'll need to generate your own free API key at https://openweathermap.org (you can't have mine, soz).

1. Open a terminal and `git clone` the repo
2. `cd` into the root folder, then into `ENV_VARIABLES`
3. Create a file called `.env.prod` and input the folllowing code (without the curly braces):
```
API_KEY={Your API Key}
```
### Starting the backend server
4. `cd` into the root folder, then into `backend`
* On MacOS/Linux
5. Run the command: `npm start`
* On Windows
6. Run the command: `npm startwin`

### Starting the frontend server
7. Open a new terminal
8. `cd` into the root folder, then into `frontend`
9. Run the command: `npm start`

From there, you should be able to use the project.

## User Stories
---
```
As a user,
I want to be able to view the current weather,
So that I can leave the house with the correct clothing.

As a user,
I want to be able to view the forecast for the next hour, 
So that I can leave the house prepared.

As a user,
I want to be able to view the forecast for the next 48 hours,
So that I can plan my weekend.

As a user,
I want to be able to view the forecast for the next 7 days,
So that I won’t be caught out.

As a user,
I want to be able to create an account,
So that I can easily find weather information on my preferred places

As a user, 
I want the site to automatically find my location,
So that I don’t have to manually enter my current location every time

As a user,
I want to see government warnings for my local area,
So that I remain safe in the current weather conditions.
```
