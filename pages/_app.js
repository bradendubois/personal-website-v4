import '../styles/globals.css'
import NavBar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";

const MyApp = ({ Component, pageProps }) => {

  return <>
    <Component {...pageProps} />
  </>
}

export default MyApp
