import React, { createContext, useState } from 'react'

type GeneralContextObject = {
    theme: 'dark' | 'light',
    handleTheme: () => void,
    lang: 'en'| 'es',
    handleLang: () => void
}

export const GeneralContext = createContext<GeneralContextObject>({
    theme: 'dark',
    handleTheme: () => {},
    lang: 'en',
    handleLang: () => {}
})

export const GeneralProvider:React.FC = ({children}) => {

    const [theme, setTheme] = useState<'dark' | 'light'>('dark')
    const [lang, setLang] = useState<'en' | 'es'>('en')

    // Handle the change of the theme
    const handleTheme = ():void => {
        if(theme === 'dark') {
            setTheme('light')
            document.documentElement.style.setProperty('--color-primary', '#E5DFF6')
            document.documentElement.style.setProperty('--color-secondary', '#101217')
        } else {
            setTheme('dark')
            document.documentElement.style.setProperty('--color-primary', '#101217')
            document.documentElement.style.setProperty('--color-secondary', '#E5DFF6')

        }
    }

    // Handle the change of the language
    const handleLang = ():void => lang === 'en' ? setLang('es') : setLang('en')
    

    const globalState:GeneralContextObject = {
        theme,
        handleTheme,
        handleLang,
        lang,
    }

    return (
        <GeneralContext.Provider value={globalState}>
            {
                children
            }
        </GeneralContext.Provider>
    )
}
