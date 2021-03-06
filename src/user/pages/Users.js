import React from 'react'
import UserList from '../components/UserList'

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Suzon',
      image: 'https://via.placeholder.com/150',
      places: 1
    },
    {
      id: 'u2',
      name: 'Sumon',
      image: 'https://via.placeholder.com/150',
      places: 1
    },
    {
      id: 'u3',
      name: 'Titon',
      image: 'https://via.placeholder.com/150',
      places: 2
    },
    {
      id: 'u4',
      name: 'Ifaz',
      image: 'https://via.placeholder.com/150',
      places: 0
    }
  ]
  return <UserList items={USERS} />
}

export default Users