
import './App.css';

import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App(prop){
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert=(message, type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);

  }
  const toggleMode =()=>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor='grey';
      showAlert("light mode has been enable!", "success");
      document.title='TextUtils light-mode';
     
      setInterval(() => {
        document.title='TextUtils is Amazing Mode';
      }, 1800);
      setInterval(() => {
        document.title='Install TextUtils now';
      }, 1500);
    }
    
    else{
      setMode('dark');
       document.body.style.backgroundColor='aqua';
       showAlert("dark mode has been enable!", "success");
       document.title='TextUtils dark-mode';
    }
  }

  const router = createBrowserRouter([

      
     
  {
    path: "/",
    element:(<>
    <Navbar title="Textconverter" mode={mode} id="root" toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className='container my-3'>
       <TextForm showAlert={showAlert} heading = "Enter the text analyze" mode={mode} />
    </div>
    </>
    )
  },
  {
    path: "/home",
    element:(
      <>
   <Navbar title="textconverter" mode={mode} id="root" toggleMode={toggleMode} />
   <Alert alert={alert}/>
  <div className="container my-3">
  <TextForm showAlert={showAlert} heading = "Enter the text analyze" mode={mode} />      
    <About />  
   </div>
   </> 
    
  )
   
  },
  
  {
    path: "/about",
    element:(<> 
    <Navbar title="Textconverter" mode={mode} id="root" toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className='container my-3'>
      <About/>
      </div>
      </> 
      )
  },

  ]);

  return <RouterProvider router={router} />;

 {/*return (

    <>
   <Navbar title="textUtils" mode={mode} id="root" toggleMode={toggleMode} />
   <Alert alert={alert}/>
  <div className="container my-3">
  <TextForm showAlert={showAlert} heading = "Enter the text analyze" mode={mode} />      
    <About />  
   </div>
   </> 
   
   
  
    );
<RouterProvider router={router} /> */
}
  
}


export default App;

