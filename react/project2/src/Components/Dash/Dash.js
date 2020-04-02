import React,{useState, useEffect} from 'react';
import './Dash.css';

function Dash(props) {

  const [day,setDay] = useState()
  const nasaUrl = `https://api.nasa.gov/planetary/apod?&date=${day}&api_key=5922S8UNUwz5xhymJjtNTL4fBJwyhnqeeUEZYotx`
  const [input, setInput] = useState('')
  const [data,setData] = useState([])
  
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
  
  
  return (
  
    <div className='Dash'>
      <section>
            <img className='img2'src='https://i.imgur.com/XnZT8xc.jpg'></img>
            <h2>Want to know more about outer-space ? <br></br>
            Enter a Date to learn more. 
            </h2> 
         <form onSubmit={handleSubmit}>
            Enter a date (YYYY-MM-DD)
          <input  
            onChange={handleChange}
            type='text'
            value={input}/>
          <input 
            type="submit" 
            value="submit"/>
        </form> 
        <div className='render'>
            <h1>{data.title}</h1>
            <h2>{data.date}</h2>
            <p>{data.explanation}</p>
            <img src={data.url}/>
        </div>
      </section>
    </div>
  );
}



export default Dash;