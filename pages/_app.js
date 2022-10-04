import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import News from '../components/News'
import NewsState from '../context/NewsState'
import { useContext, useEffect } from 'react'
import NewsContext from '../context/NewsContext'

function MyApp({ Component, pageProps }) {
  
  return (
    <NewsState >
      <Navbar />
      <Carousel />
      <News />
      <Component {...pageProps} />
    </NewsState >
  )
}

export default MyApp
