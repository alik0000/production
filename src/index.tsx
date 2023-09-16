import {render} from "react-dom";
import 'styles/app.scss'
import {App} from "app/App";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "app/providers/ui/ThemeProvider";
import 'shared/config/i18n/i18n'
import {Suspense} from "react";

render(
    <BrowserRouter>
        <Suspense fallback={'...changing language'}>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </Suspense>
    </BrowserRouter>,
    document.getElementById('root')
)
