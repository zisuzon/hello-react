import React from 'react'
import { useParams } from 'react-router-dom'
import PlaceList from '../components/PlaceList'

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire Easte Building',
    description: 'One of the most famous sky scrapers in the world!',
    title: 'Empire Easte Building',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/599px-Empire_State_Building_%28aerial_view%29.jpg',
    address: '20 W 34th St, New York, NY 10001, United States',
    location: {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Eiffel tower',
    description: 'One of the most famous herritage in the world!',
    title: 'Eiffel tower',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Paris_hotel_%28Las_Vegas%291.JPG/330px-Paris_hotel_%28Las_Vegas%291.JPG',
    address: 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France',
    location: {
      lat: 48.8583701,
      lng: 2.2922926,
    },
    creator: 'u2'
  },
  {
    id: 'p3',
    title: 'Empire Easte Building',
    description: 'One of the most famous sky scrapers in the world!',
    title: 'Empire Easte Building',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/599px-Empire_State_Building_%28aerial_view%29.jpg',
    address: '20 W 34th St, New York, NY 10001, United States',
    location: {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    creator: 'u3'
  },
  {
    id: 'p4',
    title: 'Eiffel tower',
    description: 'One of the most famous herritage in the world!',
    title: 'Eiffel tower',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Paris_hotel_%28Las_Vegas%291.JPG/330px-Paris_hotel_%28Las_Vegas%291.JPG',
    address: 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France',
    location: {
      lat: 48.8583701,
      lng: 2.2922926,
    },
    creator: 'u3'
  }
]

const UserPlaces = () => {
  const userId = useParams().userId
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
  return <PlaceList items={loadedPlaces} />
}

export default UserPlaces