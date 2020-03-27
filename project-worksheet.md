# Project Overview

## Project Links

- [add your github repo link]()
- [add your deployment link]()

## Project Description

A breif description of what i would like to do is to create a real time sports stats app. The Nhl is  my favorite sport so i figured why not create an app with the stats of the players we watch on tv. i plan on fetching an api of stats for this and maping over the object of data to pin point what the people want to see! 

## API

Use this section to include info about the API you have chosen and a code snippet of the data that it returns and is required for your project. 


```
"roster" : [ {
    "person" : {
      "id" : 8477474,
      "fullName" : "Madison Bowey",
      "link" : "/api/v1/people/8477474"
    },
    "jerseyNumber" : "22",
    "position" : {
      "code" : "D",
      "name" : "Defenseman",
      "type" : "Defenseman",
      "abbreviation" : "D"
    }
  },

```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [https://wireframepro.mockflow.com/editor.jsp?editor=off&publicid=Mb412ef49afbe636a5e5b9b88498c1a8a1585261284360&projectid=Mb12db26e74be6fcd7eab0df29db37e791585261284360&perm=Owner#/page/a370432b2d3d49b797219835b400fbcd]()
- [imgur]()..


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 
- sucessful API data pull and rendered to page
- Provide a Mobile first responsive design 
- Ensuring all project criteria was met. 

#### PostMVP 

- Create a similar component design for my portfolio project. 

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav and include links to render different pages |
| main | This will render the Api information to the child components in this app |
| Teams | This component will provide data from the Api including the number of teams in the league |
| Players | This component will provide specific information about players and will be a direct link from the team's page |
| Home | this Component will be same level as main and provide information from api (hardcoded) information about the teams Top 10 teams |
| Footer | This will render the header include the nav | 



Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| wireFrames | H | 1hr | 1hr | 1hr |
| App Architecture | H | 1hr | 1hr | 1hr |
| MVP overview | H | 1hr | 1hr | 1hr |

| Total | H | 9hrs| 8hrs | 8hrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
