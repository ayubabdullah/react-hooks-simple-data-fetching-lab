// create your App component here
import React, { useEffect, useState } from "react";

const App = () => {
  const url = "https://dog.ceo/api/breeds/image/random";
  const [dog, setDog] = useState(null);
  const [loading, setLoading] = useState(false);

    const fetchDog = async () => {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setDog(data.message);
        setLoading(false);
    }
  useEffect(
    () => fetchDog(),
    []
  );
  return (
    <>
      {loading && <p>Loading...</p>}
      {dog && <img src={dog} alt="A Random Dog" />}
    </>
  );
};

export default App;
