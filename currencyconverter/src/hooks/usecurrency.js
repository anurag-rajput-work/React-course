import { useState, useEffect } from "react";


function useCurrency(Currency) {
  const [data, setData] = useState({});

  useEffect(()=>{
    fetch(`https://api.exchangerate-api.com/v4/latest/${Currency}`)
    .then((res) => res.json())
    .then((res) => setData(res.rates));
  },[Currency])

    return data;
}

export default useCurrency;