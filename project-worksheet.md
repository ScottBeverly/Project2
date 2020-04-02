# Project Overview

## Project Links

- [API Data Link](https://api.nasa.gov/planetary/apod?date=2014-01-16&api_key=DEMO_KEY)
- [Netlify](https://app.netlify.com/user/settings#profile)

## Project Description

My project will be about different events that happened in the world of outer space. Each photo that will render will have a date of happening and a quick description. when clicked upon it will re direct you to another page with more information on the specific event. 
## API Snippet
```
"date": "2014-01-16",
"explanation": "Despina is a tiny moon of Neptune. A mere 148 kilometers across, diminutive Despina was discovered in 1989, in images from the Voyager 2 spacecraft taken during its encounter with the solar system's most distant gas giant planet. But looking through the Voyager 2 data 20 years later, amateur image processor and philosophy professor Ted Stryk discovered something no one had recognized before -- images that show the shadow of Despina in transit across Neptune's blue cloud tops. His composite view of Despina and its shadow is composed of four archival frames taken on August 24, 1989, separated by nine minutes. Despina itself has been artificially brightened to make it easier to see. In ancient Greek mythology, Despina is a daughter of Poseidon, the Roman god Neptune.",
"hdurl": "https://apod.nasa.gov/apod/image/1401/neptune_despina_transit_combo_despinabrightened.jpg",
"media_type": "image",
"service_version": "v1",
"title": "Despina, Moon of Neptune",
"url": "https://apod.nasa.gov/apod/image/1401/neptune_despina_transit_combo_despinabrightened.jpg"
}

```


## Wireframes
- [WireFrame ](https://wireframepro.mockflow.com/view/Md79f547ea783b74ad05e9851f7fa78361585331512907#/page/9777a32b55a94b628e3a98fe7e6013a7)

## FlowChart
- [Architecture](https://drive.google.com/file/d/1OMAvSHK0jj5iBXw6mSDprPrF9eAK4gTt/view?usp=sharing)


#### MVP 
- sucessful API data pull and rendered to page
- Provide a Mobile first responsive design 
- creating My best possible work!

#### PostMVP 
- To Take the new knowlege i gain through out the course and implement them into my project to make it better!
- Possibly branch out more in depth with more components and aditional components.  
- Create Events page with even more Routes to make my App more Dynamic 

## Components

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav and include links to render different pages |
| main | This will render the Api information to the child components in this app |
| Dash| This component will provide data from the Api including different events of the month |
| Home | this Component will be same level as main and provide information from Nasa a very basic description of the company with route links to (Dash& Home) |
| Footer | This will render general css| 



### TimeFrames

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Project Criteria Overview | H | 2hrs| 2hrs | 2hrs |
| API Research| H | 3hrs| 3.5hrs | 3.5hrs |
| wireFrames | H | 1hr | 2hr | 2hr |
| App Architecture | H | 1.5hr | 2.5hr | 2.5hr |
| MVP overview | H | 1hr | 1.5hr | 1.5hr |
| Time Matrix | H | 3hr | 3hr | 3hr |
| Editor Component Set-up | H | 4hr | 3hrs | 3hrs |
| Api Data console logged | H | 4 hr | 5hrs | 5hrs |
| Data Passed with Props | H | 5hr | 4hrs | 4hrs |
| Basic Html set-up (Components) | M | 3hr | 3hrs | 3hrs |
| Data rendered onto Page | M | 4hr | 3hrs | 3hrs |
| Handle Submit toggles | M | 2 hrs | 5hrs | 5hrs |
| Style with CSS | L | 6hr | 7hrs | 7hrs |
| Re-Orginize files | L | 2hr | 1hr| 1hr |
| Total | H | 40hrs| 40.5hrs | 42.5hrs |

## Additional Libraries Used/Will be Used
 - [Imgur](https://imgur.com/)

## Code Snippet
 Most proud of this snippet because i struggled for a long while with the habdle-submits and when i finally got it to work it was extremly rewarding to see my app's functionality at work. 
```
useEffect(()=>{
  const makeApiCall = async () => {
    const res = await fetch(nasaUrl);
    const json = await res.json();
    console.log(json)
    setData(json)      
};
makeApiCall();
}, [day]);
  
  const handleSubmit = e => {
    e.preventDefault();
    setDay(input)
    }
    

  const handleChange = e => {
     setInput(e.target.value)
    }
```

