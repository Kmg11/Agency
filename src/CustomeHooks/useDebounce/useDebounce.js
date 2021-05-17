import { useCallback } from "react";

const useDebounce = () => {
	const debounce = useCallback((fn, delay) => {
		let timer;

		return (...args) => {
			if (timer) clearTimeout(timer);

			timer = setTimeout(() => {
				fn(...args);
			}, delay);
		};
	}, []);

	return { debounce };
};

export default useDebounce;
