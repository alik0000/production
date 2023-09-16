import { Router } from "pages";
import {Suspense, useContext} from "react";
import {ThemeContext} from "./providers/theme/lib/ThemeContext";
import { Header } from "widgets";
import {cn} from "shared/lib/class-name";
import { Sidebar } from "widgets/sidebar/ui";

export const App = () => {
    const {theme} = useContext(ThemeContext)

    return(
        <div className={cn('app', {[theme]: theme})}>
            <Header/>
            <div className="app-content">
                <Sidebar/>
                <div className="main">
                    <Suspense fallback={<h2>Loading...</h2>}>
                        <Router/>
                    </Suspense>
                </div>
            </div>
        </div>
    )
}
