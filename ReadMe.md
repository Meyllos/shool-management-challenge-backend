## School management system


 This  is a full functioning Api endpoints for schools platform that allows you to perform all basic features of an a school management platform.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See Installation, Running and deployment for more details.
This Application is built in nodeJS/Typescript.


IF you just want to get it up and running without diving into code here is a Docker image to get started easy and quick

``` 
```


### Prerequisites

SMS is built in node js with ES6 format. to get up the application running you need to 
install the following
```
download the latest version of node js 
```

### Installing

A step by step series of examples that tell you how to get a development env running

You have to follow the follow this procedure to get started


You need POSTURES for data persistance
```
```
got to the Version control and clone down the application
```
run git clone https://github.com/Meyllos/shool-management-challenge-backend.git
```
run:  npm install

```
the server will automatically install all the needed packages in the application
```


You need a an API development platform  like POSTMAN or Insomnia

```
For getting data from the app you will have to access every single API endpoint
like  localhost:8000/api/
```
```Then you'll be able to get a bunch of JSON data:

See the example below: 

 {
    "status": 200,
    "data": {
        "id": "3d6e1c5e-08f8-4e90-99c6-d80887e65f80",
        "day": "2019-10-24T16:10:47.470Z",
        "student": "ccfadb3e-6444-48e3-9548-8c84a46bb45f",
        "teacher": "ccfadb3e-6444-48e3-9548-8c84a46bb45f",
        "course": "math",
        "description": "The student did not show up in class room",
        "updatedAt": "2019-10-24T16:10:48.784Z",
        "createdAt": "2019-10-24T16:10:48.784Z"
    }
}
```

## Running the tests

run : npm test

## Deployment

You'll need to have a hosting account on you hosting provider
i would recommend HEROKU which is the hosting i used on this app, depending on you hosting provider you'll have go under certain processes to get the application up and running 

Demo:

heroku: 


You can read more on how to host a node js application on heroku https://devcenter.heroku.com/articles


## Built With

* [Node js] [Typescript] [Sequelize]
