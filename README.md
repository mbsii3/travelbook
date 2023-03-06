# TravelBook

TravelBook is a web application that allows avid travelers to organize their upcoming travel destinations, travel plans, and log the memories that they make along the way all in one place.

## About The Project

![App home page](/images/travelbook-hp.jpg)

![App destinations index](/images/travelbook-idx.jpg)

![App add destination view](/images/travelbook-add.jpg)

![App travel log view](/images/travelbook-tl.jpg)

![App new empty travel log view](/images/travelbook-ntl.jpg)

I wanted to develop TravelBook as a foundation for an application that not only allows users to log their personal experiences and memories about their travels, but I wanted it to also be a productive app that helps take some of the stress of organizing and making their travel plans.  TravelBook looks to help travelers by acting as a quick and easy to use travel plans to-do list, while also being a travel diary where the user can create and upload new memories and experiences, while also giving them the functionality to update and delete any memories or destinations that they no longer want in their personal TravelBook.  This project really allowed me to utilize all the new skills I have learned with technologies such as NodeJS, Express, MongoDB, and EJS.  Overall, this project was extremely fun to develop and it really allowed me to put my creative mind and my new technical skills to the test.

* The application is user-centric, so all users have their own personal TravelBook where they can log all their travel information and it is not interfered with other users.
* The application provides full CRUD functionality, allowing users to create, edit, and delete new destinations, travel plans, and travel memories.
* The UI was developed with simplicity and a user-first mindset to make for the most intuitive navigation experience possible.
* Google OAuth was utilized to created an authorized user-centric experience and protect all routes only users should be able to access.
* EnsureLoggedIn middleware was utilized to ensure no rogue users are able to access user information if the server timesout.
* MomentJS was utilized to ensure accurate dates are translated for the user when creating new destinations and new memories.
* Application utilizes Heroku for easy access and deployment.

## Built With:

* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
* ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
* ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
* ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
* ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
* ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
* ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

## Getting Started

The web application is currently deployed on Heroku and can be accessed here: https://travelbook.herokuapp.com/

Link to Trello board for project organization and task management: https://trello.com/b/jQ6TQlV2/p2-travelbook

## Future Features

* Optimize the application with a responsive design for mobile, tablet, and smaller screen devices.
* Allow users to upload photos within their travel memory logs.
* Create some social medias aspects where users can share their favorite photos on a public timeline, follow other users, and like their posts.