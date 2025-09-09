import { GuestRoute,Routes,Route,Link } from "react-router-dom";



function Home(){
    return <h1>Home</h1>
}

function About(){
    return <h1>About    </h1>
}

function Contact(){
    return <h1>Contact</h1>
}




function ReactRouter() {

    return(
        <GuestRoute>
            <nav>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
            </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        </GuestRoute>

        
    );
}

export default ReactRouter

