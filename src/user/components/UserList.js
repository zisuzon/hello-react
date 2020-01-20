import React from 'react'
import Card from '../../shared/UIElements/Card'
import UserItem from './UserItem'
import './UserList.css'

const UserList = props => {
  if (props.items.length === 0) {
    return (
    <div className="center">
      <Card>
        <h2>No user found</h2>
      </Card>
    </div>
    )
  }

  return <ul>
    {props.items.map(user => (
      <UserItem 
        key={user.id} 
        id={user.id} 
        image={user.image} 
        name={user.name} 
        placeCount={user.places}
      ></UserItem>
    ))}
  </ul>
}

export default UserList