import { BrowserRouter,Routes,Route,Link } from "react-router-dom";



function Home(){
    return <h1>Home</h1>
}

function About(){
    return <h1>About    </h1>
}

function Contact(){
    return <h1>Contact</h1>
}
function Dashboard(){
    return <h1>Dashboard</h1>
}




function ReactRouter() {

    return(
        <BrowserRouter>
            <nav>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Dashboard">Dashboard</Link>
            </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        </BrowserRouter>

        
    );
}

export default ReactRouter

