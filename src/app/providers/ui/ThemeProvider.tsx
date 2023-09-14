import {ReactNode, useState, FC, useMemo} from "react";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "app/providers/theme/lib/ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT
export const ThemeProvider:FC = ({children}: {children: ReactNode}) => {

    const [theme, setTheme] = useState<Theme>(defaultTheme)

    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}
