import axios from "axios";
import React ,{useState , useEffect} from "react"
import AppNavBar from "./components/AppNavBar";
import ProfileList from "./components/ProfileList";
import "./styles.css";

export default function App() {
  const [users, setUsers]= useState([])
  useEffect (()=> {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      setUsers(response.data)
      
    })
  
  },[])
  return (
    <div>
      <AppNavBar />
      <ProfileList users ={users} />
   
    </div>

  );
}
