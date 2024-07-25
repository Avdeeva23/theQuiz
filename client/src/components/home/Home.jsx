
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CategoryCard from './CategoryCard'
function Home() {
    const [categories, setCategories] = useState([])

    const getCategories = async()=>{
     const categories = await axios.get('/api/')
     setCategories(categories.data)
    }
    useEffect(()=>{
      getCategories()
    }, [])

  return (
    <>
   
    {categories.map((category)=> (<div key={category.id}><CategoryCard category={category}/></div>))}
    </>
    
  )
}

export default Home