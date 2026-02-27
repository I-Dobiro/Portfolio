// import { createContext, useEffect, useState } from 'react'
// import PropTypes from 'prop-types'

// const ThemeContext = createContext()

// const ThemeProvider = ({ children }) => {
//     const [themeName, setThemeName] = useState('light')

//     useEffect(() => {
//         const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
//         setThemeName(darkMediaQuery.matches ? 'dark' : 'light')
//         darkMediaQuery.addEventListener('change', (e) => {
//             setThemeName(e.matches ? 'dark' : 'light')
//         });
//     }, [])

//     const toggleTheme = () => {
//         const name = themeName === 'dark' ? 'light' : 'dark'
//         localStorage.setItem('themeName', name)
//         setThemeName(name)
//     }

//     return (
//         <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
//             {children}
//         </ThemeContext.Provider>
//     )
// }

// ThemeProvider.propTypes = {
//     children: PropTypes.node.isRequired,
// }

// export { ThemeProvider, ThemeContext }

import { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
    // ✅ CHANGE #1:
    // Lazy initialize state from localStorage
    // Default to 'dark' if nothing is saved
    const [themeName, setThemeName] = useState(() => {
        return localStorage.getItem('themeName') || 'dark'
    })

    // ✅ CHANGE #2:
    // Sync theme to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('themeName', themeName)
    }, [themeName])

    const toggleTheme = () => {
        setThemeName(prev =>
            prev === 'dark' ? 'light' : 'dark'
        )
    }

    return (
        // ✅ CHANGE #3:
        // Removed unnecessary array wrapper
        // Now providing a clean object instead
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export { ThemeProvider, ThemeContext }