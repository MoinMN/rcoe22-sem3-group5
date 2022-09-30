import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import News from '../components/News'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Carousel />
      <News />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
