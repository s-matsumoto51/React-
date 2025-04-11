import { useEffect, useState } from "react"

export const usePracice =(url)=>{

    const [data, setData] = useState([]);
    const [loading,setLoading] = useState();
    const [error,setError] = useState(); 

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        fetch(url)
        .then((res)=>{return res.json()})
        .then((dataRes)=>{return setData(dataRes)})
      }, []); // URLが変更されるたびに再フェッチ
  
    return [data, loading, error];
}