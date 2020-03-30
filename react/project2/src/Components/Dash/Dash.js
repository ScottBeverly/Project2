import React,{useState} from 'react';
import './Dash.css';

function Dash(props) {
  
  const [Input, setInput] = useState('')

   const changeDate = e => {
    e.preventDefault();
    let dateFromInput = e.target.value;
    this.setInput({ date: dateFromInput 
    });
  
  }

  
  
  return (
    <div className='Dash'>
      <section>
      <h2>Want to know more about outer-space ? <br></br>
      Enter a Date to learn more. 
      </h2>
      <form onSubmit={changeDate}>
      Enter a date (YYYY-MM-DD)
      <input />
      <input type="submit" />
    </form>
    </section>

      
      
    </div>
  );
}



export default Dash;