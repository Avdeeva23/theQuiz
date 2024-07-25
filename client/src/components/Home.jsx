
import React, { useEffect, useState } from 'react'
import axios from 'axios'
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
   
    {categories.map((el)=> (<div key={el.id}>{el.title}</div>))}
    </>
    
  )
}

export default Home