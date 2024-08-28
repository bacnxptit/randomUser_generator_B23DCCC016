import './App.css';
import axios from "axios";
import {useEffect, useState } from "react";

function App() {
  const [data,setData] = useState();
  const getData = async ()=>{
    const res = await axios.get('https://randomuser.me/api/');
    console.log("res",res);
    setData(res?.data?.results?.[0]);
  
  };
 
  useEffect (()=>{
    getData();
    
  },[]
);
  return (
    <div style={{height:"1000px"}}>
      <div 
      style = {{
        height: "500px",
        textAlign :"center",
        backgroundColor:"black",
        color :" white",
        textTransform:"uppercase",
        zIndex:5,
      }}> 
      
      <div style={
        {fontSize:65,paddingTop:100}}>randomuser generartor</div>
        <div style={{textAlign:"center",fontSize:"20px",color:"white",textTransform:"none"}}><p>A free ,<a href='https://github.com/RandomAPI/Randomuser.me-Node'>open-source</a>, API for generating random user data. Like Lorem Ipsum, but for people. </p></div>
        
        
        </div>
        <div class="card">
          <div class="cardin">
            <div>
              <div class="user_photo" >
                <img class="center_photo" src={data?.picture?.large} />
                <p>My name is </p>
                <div class= "1"><h1>{data?.name?.first} {data?.name?.last}</h1></div>
              </div> 
            </div>    
          </div>
        </div>
       
      
      
      </div>   
  );
}

export default App;
{/*<div
        onClick = {()=>{
          alert("address");

        }}
        style = {{width:50,height:30,backgroundColor:"green"}}>
          address
      </div>
      <div
        onClick = {()=>{
          alert("new");

        }}
        style = {{width:50,height:30,backgroundColor:"red"}}>
          new
      </div>*/
      /* 
      <div
      style={{
        position: "relative",
  background: "#fff",
  padding: "2px",
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  marginBottom: "30px",
  border: "1px solid rgba(0, 0, 0, .25)",
  left:"50%",
  transform:"translateX(-50%)"
      }}>
        
    {data ?(<div><img style={{width:"150px",borderRadius:"50%"}} src={data?.picture?.large}/></div>):(<p>chua co anh</p>)}
    <p>My name is</p>
    {data ? (
      <div>
        
        
        <h1>{data?.name?.first} {data?.name?.last}</h1>
        
      </div>
    ) : (<p>.........</p>)}
  
        
      </div>*/




      /*
      <div style={{
        width : "700px",
        height :"400px",
        backgroundColor : "white",
        boxShadow : " 0 0 10px rgba(0,0,0,.5)",
        borderRadius:"10px",
        position:"absolute",
        top:"72%",
        left:"50%",
        transform:"translate(-50%,-50%)",
      }}>
       
        <div
        style={{
          content: "",
          display: "block",
          position: "absolute",
          width: "100%",
          height: "130px",
          top: "0",
          background: "#f9f9f9",
          borderBottom:" 1px solid rgba(0, 0, 0, .15)",
          zIndex: "-1",
        }}
        
        >
          
        </div>
       <div 
       style={{
    position: "relative",
    padding: "20px 0",
    width: "100%",
    background: "#fff",
    borderRadius: "3px",
    boxShadow:"0 0 1px rgba(0, 0, 0, .5)",
    overflow: "hidden",
    textAlign: "center",
    zIndex: "5"
      }}>
          <div
      style={{
        position: "relative",
  background: "#fff",
  padding: "2px",
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  marginBottom: "30px",
  border: "1px solid rgba(0, 0, 0, .25)",
  left:"50%",
  transform:"translateX(-50%)"
      }}>
        
    {data ?(<div><img style={{width:"150px",borderRadius:"50%"}} src={data?.picture?.large}/></div>):(<p>chua co anh</p>)}
    <p>My name is</p>
    {data ? (
      <div>
        
        
        <h1>{data?.name?.first} {data?.name?.last}</h1>
        
      </div>
    ) : (<p>.........</p>)}
  
        
      </div>
       

       </div>
        
      </div>
      */}