import React from 'react'
import HOC from '../../HOC/HOC'
import AskedQuestion from '../AskedQuestion/AskedQuestion'

import MainCard from './Card';
import "./Home.css";


const Home = () => {
    return (
        <>
       <div className="home_top">
     
       <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" >
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block crowsel_image "   src="https://cdn.pixabay.com/photo/2015/11/05/08/21/geometry-1023846_960_720.jpg" alt="First slide"  />
    </div>
    <div class="carousel-item">
      <img class="d-block crowsel_image" src="https://cdn.pixabay.com/photo/2015/11/15/07/47/geometry-1044090_960_720.jpg" alt="Second slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block crowsel_image" src="https://cdn.pixabay.com/photo/2015/07/19/10/00/school-work-851328_960_720.jpg" alt="Third slide" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

       </div>


            <MainCard />

            <AskedQuestion />

        </>
    )
}

export default HOC(Home)
