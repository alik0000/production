import {Route, Routes} from 'react-router-dom'
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {Suspense, useContext} from "react";
import Header from "./components/Header/Header";
import {ThemeContext} from "./theme/ThemeContext";

export const App = () => {
    const {theme} = useContext(ThemeContext)

    return(
        <div className={`app ${theme}`}>
            <Header/>
            <div className="main">
                <Suspense fallback={<h2>Loading...</h2>}>
                    <Routes>
                        <Route path={'/'} element={<MainPageAsync/>}/>
                        <Route path={'/about'} element={<AboutPageAsync/>}/>
                    </Routes>
                </Suspense>
            </div>
        </div>
    )
}
