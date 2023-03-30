import React from 'react';
import HomeImg from '../components/HomeImg';
import Trending from '../components/Trending';
import placeholder from '../img/placeholder.jpg';

function Home() {
  return (
    <main>
      <HomeImg img={placeholder}></HomeImg>
      <Trending
      ></Trending>

    </main>
  )
}

export default Home
