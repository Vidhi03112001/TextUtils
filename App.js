import "./App.css";
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  //whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert =(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);


  }
  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#263238';
      showAlert("dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled","success");
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode}  toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <TextForm  showAlert={showAlert}heading="Enter the text to analyze " mode={mode} />
          </Route>
        </Switch>
        {<TextForm  showAlert={showAlert}heading="Enter the text to analyze " mode={mode} />}
     {/* <About*>*/}
     </div>
     </Router>
      
      </>
    
  );
}

export default App;
