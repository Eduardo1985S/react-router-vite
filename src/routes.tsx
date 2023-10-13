import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home/index"
import About from "./pages/About/index";
import Contact from "./pages/Contact";

function MainRoutes(){
    return(

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
        </Routes>
    )
}

export default MainRoutes;