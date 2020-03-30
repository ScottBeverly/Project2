import React from 'react';
import './Dash.css';

function Dash() {
  return (
    <div className='Dash'>
      <section>
      <h2>Want to know more about outer-space ? <br></br>
      Enter a Date to learn more. 
      </h2>
      <form onSubmit={''}>
      Enter a date (YYYY-MM-DD)
      <input />
      <input type="submit" />
    </form>
    </section>

      
      
    </div>
  );
}

export default Dash;