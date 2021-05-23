import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (url, initialValue) => {
	const [data, setData] = useState(initialValue);
	const [success, setSuccess] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		// Fetch Data From Api
		axios.get(url).then(
			({ data }) => {
				setData(data);
				setSuccess(true);
				setIsPending(false);
				setError(null);
			},
			(error) => {
				setSuccess(false);
				setIsPending(false);
				setError(error);
			}
		);
	}, [url]);

	return { data, success, isPending, error };
};

export default useAxios;
