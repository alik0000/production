import {NavLink, Route, Routes} from 'react-router-dom'
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {Suspense} from "react";

export const App = () => {
    return(
        <div className={'app'}>
            <nav>
                <NavLink to="/">
                    Main
                </NavLink>
                <NavLink to="/about">
                    About
                </NavLink>
            </nav>
            <Suspense fallback={<h2>Loading...</h2>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}
