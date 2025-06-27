import React from 'react'
import Layout from '../components/Layout/Layout'
import Banner from '../components/Section/Banner'
import Cards from '../components/Section/Cards'
import Product from '../Share/Product'
import WeakDeal from '../Share/WeakDeal'
import Sales_Banner from '../components/Section/Sales_Banner'
import Clients from '../components/Section/Clients'
import Service_Cards from '../components/Section/Service_Cards'
import Brands from '../components/Section/Brands'

function Home() {
  return (
    <>
      <Banner />
      <Service_Cards/>
      <Product />
      <Cards />
      <WeakDeal />
      <Sales_Banner />
      <Clients />
      <Brands/>
    </>
  )
}

export default Home