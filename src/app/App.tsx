import { Router } from "pages";
import {Suspense, useContext} from "react";
import {ThemeContext} from "./lib/theme/ThemeContext";
import { Header } from "widgets";

export const App = () => {
    const {theme} = useContext(ThemeContext)

    return(
        <div className={`app ${theme}`}>
            <Header/>
            <div className="main">
                <Suspense fallback={<h2>Loading...</h2>}>
                    <Router/>
                </Suspense>
            </div>
        </div>
    )
}
