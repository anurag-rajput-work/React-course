import { createContext, useContext} from 'react'

export const ThemeContext = createContext({
    theme: 'light',
    darktheme: () => {},
    lighttheme: () => {},
})

export const Themeprovider =  ThemeContext.Provider

export function useTheme() {
    return useContext(ThemeContext)
}