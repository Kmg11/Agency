import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (url, initialValue) => {
	const [data, setData] = useState(initialValue);

	useEffect(() => {
		// Fetch Data From Api
		axios.get(url).then(({ data }) => {
			setData(data);
		});
	}, [url]);

	return { data };
};

export default useAxios;
