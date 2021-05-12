import { useCallback } from "react";

// Import Custome Hooks
import useLocalStorage from "../useLocalStorage/useLocalStorage";

const useDarkMode = () => {
	const [localStorage, setLocalStorage] = useLocalStorage("dark-mode", false);

	const enableDarkMode = useCallback(() => {
		document.body.classList.add("dark-mode");
		setLocalStorage(true);
	}, [setLocalStorage]);

	const disableDarkMode = useCallback(() => {
		document.body.classList.remove("dark-mode");
		setLocalStorage(false);
	}, [setLocalStorage]);

	return { enableDarkMode, disableDarkMode, localStorage };
};

export default useDarkMode;
