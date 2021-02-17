import React from 'react'
import {Card} from "react-bootstrap"


const avatar = {
    background: "green",
    borderRadius: "90%",
    color: "white",
    padding: "1.2rem",
    margin: "30px",
    textAlign: "center",
  };
  function toInitials(str) {
    return str
      .trim()
      .split(" ")
      .map((word) => word[0].toUpperCase())
      .join("");
  }



const UserCard = ({user}) => {
    return (
    
<React.Fragment>
<Card border="success" style={{width: '100%', margin: "15px" }}>
    <div className="text-center m-4">
        <span style={avatar}> {toInitials(user.name)} </span>
    </div>
    <Card.Body>
      <Card.Title>{user.name}</Card.Title>
      <Card.Text>{user.email}</Card.Text>
      <Card.Text>{user.phone}</Card.Text>
      <Card.Text>{user.address.city}</Card.Text>
      <Card.Text className="text-muted">{"@" + user.username}</Card.Text>
    </Card.Body>
  </Card> 
</React.Fragment>
)
}

export default UserCard
