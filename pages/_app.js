import '../styles/globals.css'
import NavBar from "../components/NavBar/Navbar";

const MyApp = ({ Component, pageProps }) => {

  return <>
    <NavBar />
    <Component {...pageProps} />
  </>
}

export default MyApp
