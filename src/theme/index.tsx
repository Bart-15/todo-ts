import { createGlobalStyle } from 'styled-components';

interface Theme {
    body:string,
    text:string
}

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme } : { theme: Theme }) => theme.body};
        color: ${({ theme } : { theme: Theme }) => theme.text};
        transition: background 0.2s ease-in, color 0.2s ease-in;
        font-family: 'Saira', sans-serif;
        font-size:16px;
    }
`;

export const lightTheme = {
    body: '#FBF6F5',
    text: '#161b22'
};
export const darkTheme = {
    body: '#161b22',
    text: '#FBF6F5'
};  