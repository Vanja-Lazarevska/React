import { Link } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
    const navLinks = [
    {
        id:"1",
        name: "Home",
        path: '/'
    },
    {
        id:"2",
        name:"People",
        path: '/people'
    }, 
    {
        id:"3",
        name: "Plantes",
        path: "/planets"
    }
    ]

    return (
        <div>
            <h1>Star Wars page</h1>
            <ul className="navbar">
            <img src="https://w7.pngwing.com/pngs/241/456/png-transparent-droid-r2d2-robot-starwars-famous-character-colored-icon.png" width={50}/>
                {navLinks.map((link) => (
                    <Link key={link.id} to={link.path} style={{textDecoration: "none"}}>
                    <li className="link">{link.name}</li>
                    </Link>
                ))}

                
            </ul>
        </div>
    )
}

export default Navbar