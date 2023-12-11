import React ,{useState, useEffect} from 'react'
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';
const url = import.meta.env.VITE_API_URL
export default function Product() {
    console.log(useParams())
    const {id} = useParams()
    const location = useLocation()
    console.log(location);
    const [data, setData] = useState({})
    console.log(data);
    useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await axios.get(url + `/shoes/${id}`);
              setData(response.data);
            } catch (error) {
              console.error('Error fetching data:', error.message);
            }
        }
        fetchData()
    },[])

    console.log(import.meta.env.VITE_API_URL);
  return (
    <div>
        <div>
        Product id is {location.state.product.id}
    </div>
    <div>
      <div>{data.name} </div>  
      <div> {data.price}</div> 
       <div>{data.size}</div> 
        <img src={data.img} alt={data.name} />
        </div>
        </div>
  )
}
