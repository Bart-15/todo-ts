import {useContext} from 'react';
import Router from '../src/Router';
import DarkModeContext from '../src/context/DarkMode';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../src/theme';

function App() {
	const darkMode = useContext(DarkModeContext);
	const {isDark} = darkMode;

	return (
		<ThemeProvider theme={isDark ? darkTheme : lightTheme }>
			<GlobalStyles />
			<div className="App">
				<Router />
			</div>
		</ThemeProvider>
	);
}

export default App;
