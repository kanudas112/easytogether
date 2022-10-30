import React from 'react'
import Banner from '../common/banner/Banner'
import Footer from '../common/footer/Footer'
import Header from '../common/header/Header'
import Price from '../price/Price'
import AboutArea from './AboutArea'
import "./home.css"
import Offer from './Offer'
import ServicesArea from './ServicesArea'

const Home = () => {
  return (
    <>
    <Header/>
    <Banner/>
    <Offer/>
    <AboutArea/>
    <ServicesArea/>
    <Price/>
    <Footer/>
    </>
  )
}

export default Home