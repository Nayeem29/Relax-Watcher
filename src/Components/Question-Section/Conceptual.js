import React from 'react';
import './Conceptual.css';

const Conceptual = () => {
  return (
    <div className='conceptual'>
      <div className='question'>
        <h3>How React Works?</h3>
        <p>React Works in declarative way of code. We use components in react to declare our code which makes our code easy to understand and get better user experiences. React uses virtual dom which compares with browser dom and fix exactly what needs to be updated rather than executing each line of code.</p>
      </div>
      <div className='question'>
        <h3>Difference between Props and State?</h3>
        <p>Props are used to pass data from parent component to child components where as state is the representation of the UI. States are responsible to show the changes that user do in. the UI. But props are responsible for data flowing and it can only pass data to child components</p>
      </div>
      <div className='question'>
        <h3>How useState does Work?</h3>
        <p>We need to change certain values when a user interact with the UI. Since we can't control these values that's why useState comes to the scenerio. We can declare any value inside useState hook and when user updating the value, simply call setValue for updating and the value for showing it in the UI. Since functions are stateless and can't use setState in it so, useState hook does the part of setState in functional component.</p>
      </div>

    </div>
  );
};

export default Conceptual;