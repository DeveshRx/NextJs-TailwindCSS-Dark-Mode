'use client'

import { useRef, useState } from "react"

//import { ThemeProvider, useTheme } from 'next-themes'


export default function HomeUI() {
    //  const { theme, setTheme } = useTheme()
    var isDm = false;
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
        //setDarkMode(true);
        isDm = true;
    } else {
        document.documentElement.classList.remove('dark')
        //setDarkMode(false);
        isDm = false;
    }
    const [Darkmode, setDarkMode] = useState(isDm)

    // Whenever the user explicitly chooses light mode
    localStorage.theme = 'light'

    // Whenever the user explicitly chooses dark mode
    localStorage.theme = 'dark'

    // Whenever the user explicitly chooses to respect the OS preference
    localStorage.removeItem('theme')


    function toggleMode() {

        if (Darkmode) {
            document.documentElement.classList.remove('dark')
            setDarkMode(false);
        } else {
            document.documentElement.classList.add('dark')
            setDarkMode(true);
        }


    }

    return (<div>

        <h1>Hello Worlds</h1>
        <br />

        <div class="bg-white dark:bg-black">
            <p>
                Current Theme
            </p>

            <button onClick={() => {
                this.toggleMode();
            }}>Toggle Mode</button>
        </div>


    </div>
    )
}

