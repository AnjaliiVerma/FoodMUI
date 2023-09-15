import React from 'react'
import Layout from '../components/layout/Layout'
import { Link } from 'react-router-dom';
import Banner from '../image/banner.jpeg'

const Home = () => {
  return (
    <Layout>
      <div className='Home' style={{backgroundImage:`url(${Banner})`}}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>best food in India</p>
          <p>India's best food restaurent</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home;
