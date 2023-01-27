import React, {useState} from 'react';
import Button from './Button';
import classes from './App.module.css';

function App() {
  const [counter, setCounter] = useState(0);
  /* [button, setButton] = useState([1,2,3,4,5]) */
  
  return (
    <div className={classes.app}>
      <div className={classes.circle}>{counter}</div>
      <div className={classes.button}>
        <div>
        <Button name={'Decrease 5'} click={() => setCounter(counter - 5)}/>
        <Button name={'Decrease 1'} click={() => setCounter(counter - 1)}/>
        <Button name={'Reset'} click={() => setCounter(0)}/>
        </div>
        <div>
        <Button name={'Increase 5'} click={() => setCounter(counter + 5)}/>
        <Button name={'Increase 1'} click={() => setCounter(counter + 1)}/>
        </div>
        </div>
    </div>
  );
}

export default App;
