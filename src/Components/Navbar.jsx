import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
     <header className="header">
        <NavLink  to="/" className="w-16 h=10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md" > 
           <p className="blue-gradient_text">HOME</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/About" className={({isActive})=> isActive? 'text-blue-500': 'text-black-500'}>
             About Me
            </NavLink>
            <NavLink to="/Projects" className={({isActive})=> isActive? 'text-blue-500': 'text-black-500'}>
             Projects
            </NavLink>
            <NavLink to="/Contacts" className={({isActive})=> isActive? 'text-blue-500': 'text-black-500'}>
             Contact Me 
            </NavLink>

        </nav>

     </header>
  )
}

export default Navbar