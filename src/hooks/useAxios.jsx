import { useState } from "react";
import axios from "axios";

export const REQ_TYPES = Object.freeze({
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
});

const useAxios = (initialState) => {
  const [data, setData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const axiosInstance = axios.create({
    baseURL: "https://workintech-fe-ecommerce.onrender.com",
    timeout: 5000,
  });

  const doRequest = ({ reqType, endpoint, payload, config }) => {
    setLoading(true);
    setError(null);

    return axiosInstance[reqType](endpoint, payload, config)
      .then((response) => {
        setData(response.data);
        return response.data;
      })
      .catch((err) => {
        let errorMessage = "An unexpected error occurred.";

        if (err.response && err.response.data && err.response.data.err) {
          errorMessage = JSON.stringify(err.response.data.err);
          alert(errorMessage);
        } else {
          errorMessage = err.message;
          alert(errorMessage);
        }

        setError(errorMessage);
        throw new Error(errorMessage);
      })
      .finally(() => setLoading(false));
  };

  return { doRequest, data, loading, error };
};

export default useAxios;
