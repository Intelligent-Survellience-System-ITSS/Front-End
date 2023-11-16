import { useState } from 'react';

export const useLogged = () => {
  const [logged, setLogged] = useState(false);

  const updateLogged = (value) => {
    setLogged(value);
    console.log("val of logged in updateLogged(): " + logged);
  };

  return { logged, updateLogged };
};