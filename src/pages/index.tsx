import { FC } from "react";
import {Route, Routes} from "react-router-dom";
import { ROUTE_CONSTANTS } from "shared/config";
import { MainPage } from "./main";
import { AboutPage } from "./about";

export const Router: FC = () => {
    return(
        <Routes>
            <Route path={ROUTE_CONSTANTS.MAIN} element={<MainPage/>}/>
            <Route path={ROUTE_CONSTANTS.ABOUT} element={<AboutPage/>}/>
        </Routes>
    )
}
