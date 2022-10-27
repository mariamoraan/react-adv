import { Navigate, NavLink, Route, Routes } from "react-router-dom"
import { Lazy1 } from "../pages/Lazy1"
import { Lazy2 } from "../pages/Lazy2"
import { Lazy3 } from "../pages/Lazy3"

type JSXComponent = () => JSX.Element
interface Route {
    to: string;
    path: string;
    Component: JSXComponent;
    name: string;
}

const LazyLayout = () => {

    const routes:  Route[] = [
        {to: 'lazy1', path: 'lazy1', Component: Lazy1, name: "Lazy 1"},
        {to: 'lazy2', path: 'lazy2', Component: Lazy2, name: "Lazy 2"},
        {to: 'lazy3', path: 'lazy3', Component: Lazy3, name: "Lazy 3"},
    ]
    return (
        <div>
            <h1>Lazy Layout Page</h1>
            <p>Inside route routes</p>
            <ul>
                {
                    routes.map(({to, name}) => (
                        <li>
                            <NavLink to={to} className={({isActive}) => isActive ? 'nav-active' : ''}>{name}</NavLink>
                        </li>
                    ))
                }
            </ul>
            <Routes>
                {
                    routes.map(({path, Component}) => (
                        <Route key={path} path={path} element={<Component />} />
                    ))
                }
                <Route path="*" element={<Navigate to={"lazy1"} replace />} />
            </Routes>
        </div>
    )
}

export  default LazyLayout