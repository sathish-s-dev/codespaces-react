import React,{ useState,createContext,useRef } from 'react';
import './App.css';
import Button from './Button';

export const AppContext = React.createContext(null);

function App() {
  const nameRef = useRef()
  const [count,setCount] = useState(0);
  return (
    <AppContext.Provider value={[count, setCount]}>
      <div className="App">
          {count}
          <Button />
          <form onSubmit={(e)=>{
            e.preventDefault()
             console.log(nameRef.current.value)
             nameRef.current.value=''
          }}>
            <input type='text' ref={nameRef}/>
  
            <input type="submit"  value='submit'/>
          </form>
      </div>
    </AppContext.Provider>

  );
}

export default App;
