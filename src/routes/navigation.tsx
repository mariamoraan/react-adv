import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom"
import logo from '../logo.svg'
import { Lazy1 } from "../pages/Lazy1"
import { Lazy2 } from "../pages/Lazy2"
import { Lazy3 } from "../pages/Lazy3"

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="" />
                    <ul>      
                        <li> 
                            <NavLink to="/home" className={({isActive}) => isActive ? 'nav-active' : ''} >Lazy1</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({isActive}) => isActive ? 'nav-active' : ''}>Lazy2</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" className={({isActive}) => isActive ? 'nav-active' : ''}>Lazy3</NavLink>
                        </li>      
                    </ul>
                </nav>
                <Routes>
                    <Route path="/home" element={<Lazy1 />} />
                    <Route path="/about" element={<Lazy2 />} />
                    <Route path="/users" element={<Lazy3 />} />

                    <Route path="*" element={<Navigate to='/home' replace/>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}