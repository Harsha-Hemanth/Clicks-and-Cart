import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

      <HorizontalCardProduct category={"airpods"} heading={"Top's Airpodes"}/>
      <HorizontalCardProduct category={"watch"} heading={"Popular Watches"}/>

      <VerticalCardProduct category={"mobile"} heading={"Best Mobiles"}/>
      <VerticalCardProduct category={"telivision"} heading={"Brand New TV's"}/>
      <VerticalCardProduct category={"earphones"} heading={"Best Earphones"}/>
      <VerticalCardProduct category={"camera"} heading={"Cameras and Photography"}/>
      <VerticalCardProduct category={"refrigerator"} heading={"Cooling Refrigerators"}/>
      <VerticalCardProduct category={"printer"} heading={"High Quality Printers"}/>
      <VerticalCardProduct category={"trimmer"} heading={"Best Trimmers"}/>
      <VerticalCardProduct category={"mouse"} heading={"Top's Mouse"}/>
      <VerticalCardProduct category={"speaker"} heading={"High Quality Speakers"}/>
      <VerticalCardProduct category={"processor"} heading={"High Quality Processors"}/>
    </div>
  )
}

export default Home