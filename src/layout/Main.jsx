import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import { Outlet, useLocation } from 'react-router-dom';

const Main = () => {
    const location = useLocation();

    const noHeaderFooter = location.pathname.includes('signin') || location.pathname.includes('signup')
    return (
        <div>
            {
                noHeaderFooter || <NavBar></NavBar>
            }

            <Outlet></Outlet>
            {
                noHeaderFooter || <Footer></Footer>
            }
        </div>
    );
};

export default Main;