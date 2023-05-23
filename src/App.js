import React,{ useState,createContext  } from 'react';
import './App.css';
import Button from './Button';

export const AppContext = React.createContext(null);

function App() {
  const [count,setCount] = useState(0);
  return (
    <AppContext.Provider value={[count, setCount]}>
      <div className="App">
          {count}
          <Button />
      </div>
    </AppContext.Provider>

  );
}

export default App;
