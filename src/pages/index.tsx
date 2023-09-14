import { FC } from "react";
import {Route, Routes} from "react-router-dom";
import { routConfig } from "shared/config";

export const Router: FC = () => {
    return(
        <Routes>
            {Object.values(routConfig).map(({path, element}) =>
                <Route key={path} path={path} element={element}/>
            )}
        </Routes>
    )
}
