import { createGlobalStyle } from 'styled-components';

interface Theme {
    body:string,
    text:string,
    btnBody:string
}

export const GlobalStyles = createGlobalStyle`
    * {
        font-family: 'Saira', sans-serif;
    }

    body {
        background: ${({ theme } : { theme: Theme }) => theme.body};
        color: ${({ theme } : { theme: Theme }) => theme.text};
        transition: background 0.2s ease-in, color 0.2s ease-in;
        font-size:16px;
    }

    a {
        color: ${({ theme } : { theme: Theme }) => theme.text};
        text-decoration:none;
    }

    button {
        background: ${({ theme } : { theme: Theme }) => theme.btnBody};
        color: ${({ theme } : { theme: Theme }) => theme.text};
        transition: background 0.2s ease-in, color 0.2s ease-in;
    }

    .errors {
        color:#f23a6b;
    }
`;

export const lightTheme = {
    body: '#FBF6F5',
    text: '#161b22',
    btnBody:'#fff'
};
export const darkTheme = {
    btnBody:'#21262d',
    body: '#161b22',
    text: '#FBF6F5'
};  