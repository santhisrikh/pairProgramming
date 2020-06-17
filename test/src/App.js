import React from  'react';
// import axios from "axios" ;
import Router from "./Routes/Routes"
import {Link}  from "react-router-dom"
class App extends React.Component{
 render(){

  return (
    <>
    <Router/>
    <Link to = "/" >Random</Link>
    </>
    
  )
 }
  }
  
export default App;
