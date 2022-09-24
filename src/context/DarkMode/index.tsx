import {createContext, useState} from 'react';

export const DarkModeContext = createContext({
    isDark: false,
    setDark: (isDark: boolean) => {}
});

interface Props {
    children: JSX.Element
}

export const DarkModeProvider = ({children}: Props) => {
    const [isDark, setDark] = useState<boolean>(false);
    

    return (
        <DarkModeContext.Provider
            value={{
                isDark,
                setDark
            }}
        >
            {children}
        </DarkModeContext.Provider>
    )

}

export default DarkModeContext;