import {
	useState,
	useCallback,
	useContext,
	createContext,
	useEffect,
} from "react";

// Import Custome Hooks
import useLocalStorage from "../useLocalStorage/useLocalStorage";

// Context
const DarkThemeContext = createContext();
const toggleDarkThemeContext = createContext();
const EnableDarkThemeContext = createContext();
const DisableDarkThemeContext = createContext();

// Custome Hooks
export const useDarkTheme = () => useContext(DarkThemeContext);
export const useToggleDarkTheme = () => useContext(toggleDarkThemeContext);
export const useEnableDarkTheme = () => useContext(EnableDarkThemeContext);
export const useDisableDarkTheme = () => useContext(DisableDarkThemeContext);

// Theme Provider
export const DarkThemeProvider = ({ children }) => {
	const [localStorage, setLocalStorage] = useLocalStorage("dark-theme", null);
	const [darkTheme, setDarkTheme] = useState(false);

	const toggleDarkTheme = () => {
		document.body.classList.toggle("dark-theme");
		setDarkTheme((prevDarkTheme) => !prevDarkTheme);
		setLocalStorage((prevLocalStorage) => !prevLocalStorage);
	};

	// Enable Dark theme Function
	const enableDarkTheme = useCallback(() => {
		document.body.classList.add("dark-theme");
		setLocalStorage(true);
		setDarkTheme(true);
	}, [setLocalStorage]);

	// Disable Dark theme Function
	const disableDarkTheme = useCallback(() => {
		document.body.classList.remove("dark-theme");
		setLocalStorage(false);
		setDarkTheme(false);
	}, [setLocalStorage]);

	// Check Dark theme Status
	useEffect(() => {
		// Trigger Dark theme Depend On Local Storage
		if (localStorage !== null) {
			if (localStorage) {
				enableDarkTheme();
			} else {
				disableDarkTheme();
			}
		}

		// Trigger Dark theme Depend On User Prefers
		if (localStorage === null) {
			const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
			prefers ? enableDarkTheme() : disableDarkTheme();
		}
	}, [enableDarkTheme, disableDarkTheme, localStorage]);

	return (
		<DarkThemeContext.Provider value={darkTheme}>
			<toggleDarkThemeContext.Provider value={toggleDarkTheme}>
				<EnableDarkThemeContext.Provider value={enableDarkTheme}>
					<DisableDarkThemeContext.Provider value={disableDarkTheme}>
						{children}
					</DisableDarkThemeContext.Provider>
				</EnableDarkThemeContext.Provider>
			</toggleDarkThemeContext.Provider>
		</DarkThemeContext.Provider>
	);
};
