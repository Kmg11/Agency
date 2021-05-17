import { useState } from "react";

const useThrottle = () => {
	const [clicked, setClicked] = useState(false);

	const throttle = (fn, delay) => {
		return (...args) => {
			if (!clicked) {
				setClicked(true);
				fn(...args);
			} else {
				return;
			}

			setTimeout(() => {
				setClicked(false);
			}, delay);
		};
	};

	return { throttle };
};

export default useThrottle;
