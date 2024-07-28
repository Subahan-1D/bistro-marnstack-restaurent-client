import { Outlet } from "react-router-dom";
import Footer from "../Routes/Shared/Footer";
import Navbar from "../Routes/Shared/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;