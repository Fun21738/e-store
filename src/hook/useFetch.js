import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    (
        async function(){
            fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
              
            }).catch(err => {
                console.log({ error: err.message });
            });
        }
    )()
  }, [url]);

  return [data];
}

export default useFetch;
