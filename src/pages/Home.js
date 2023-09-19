import React from 'react'
import Layout from '../components/layout/Layout'
import { Link } from 'react-router-dom';
import Banner from '../image/banner.jpeg'
import "../styles/HomeStyles.css"

const Home = () => {
  return (
    <Layout>
      <div className='Home' style={{backgroundImage:`url(${Banner})`}}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food in Bharat</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home;
