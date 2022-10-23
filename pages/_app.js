import '../styles/globals.css'
import NewsState from '../context/NewsState'
import { useContext, useEffect } from 'react'
import NewsContext from '../context/NewsContext'
import Searchpage from './searchpage'

function MyApp({ Component, pageProps }) {
  
  return (
    <NewsState >
      <Component {...pageProps} />
    </NewsState >
  )
}

export default MyApp
