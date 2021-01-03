import NavBar from "./NavBar/Navbar";
import Footer from "./Footer/Footer";

const Layout = ({ children, footer }) => {

    return (
        <div>
            <NavBar />
            {children}
            {footer && <Footer />}
        </div>

    )
}

export default Layout