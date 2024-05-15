import { useNavigate } from 'react-router-dom';
import React from 'react'
const Home = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    setTimeout(() => {
      navigate("/products")
    }, 3000);
  }
  return (
    <>
        <h1>I'm home page</h1>
        <div>
            <button onClick={navigateHandler}>Go to products</button>
        </div>
    </>
  )
}

export default Home