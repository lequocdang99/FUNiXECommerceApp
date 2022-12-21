import React from 'react';
import { useState } from 'react';

const UseFetch = (url) => {
  const [api, setApi] = useState([]);

  const fetchApi = async (url) => {
    const api = await fetch(url);
    const data = await api.json();
    setApi(data);
  };

  return (
    <div>
      <p>{api.map((el) => el.name)}</p>
    </div>
  );
};

export default UseFetch;
