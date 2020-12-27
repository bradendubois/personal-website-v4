import NavBar from "./NavBar/Navbar";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {

    return (
        <div>
            <NavBar />
            {children}
            <Footer />
        </div>

    )
}

export default Layout