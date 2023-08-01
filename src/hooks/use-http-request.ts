import { useState, useCallback } from "react";

type RequestObj = {
  url: string;
  method?: string;
  headers?: { [key: string]: string };
  body?: any;
};

const useHttpRequest = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const sendRequest = useCallback(
    async (requestConfig: RequestObj, manageData: (data: any) => void) => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(requestConfig.url, {
          method: requestConfig.method ? requestConfig.method : "GET",
          headers: requestConfig.headers ? requestConfig.headers : {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        });

        if (!response.ok) {
          throw new Error("Request failed!");
        }

        const data = await response.json();

        manageData(data);
      } catch (error: any) {
        setError(error.message || "Oops... Something went wrong!");
      }

      setIsLoading(false);
    },
    []
  );

  return { isLoading, error, sendRequest };
};

export default useHttpRequest;
