import React from 'react'
import { useParams } from 'react-router-dom'

const CategoryProducts = () => {
    const params = useParams()
  return (
    <div>{params?.category}</div>
  )
}

export default CategoryProducts