import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { NewRouter } from 'Routes'
import 'antd/dist/antd.min.css'
import { ThemeProvider } from 'Helpers/Theme/ThemeProvider'
import { CookiesProvider } from 'react-cookie'
import Exports from 'Exports'

const App = () => {
    //========================= MENGHAPUS CONSOLE.LOG=====================================
    const flame = String.fromCodePoint(0x1f525)
    console.log(
        `%c ${flame}AGUNG MAYUDHA MAJID${flame}`,
        'color: darkseagreen; text-shadow: 2px 2px purple; background: red;font-size: 3em; border: 1px solid purple; padding: 20px;font-family: fantasy;',
    )
    // console.log = function () {}
    // ====================================================================================

    return (
        <Router basename={Exports().BASENAME}>
            <ThemeProvider>
                <CookiesProvider>
                    <NewRouter />
                </CookiesProvider>
            </ThemeProvider>
        </Router>
    )
}

export default App