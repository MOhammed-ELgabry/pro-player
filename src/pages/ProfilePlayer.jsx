import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


export default function ProfilePlayer() {
    const navigate = useNavigate()
 useEffect(()=>{
let token = localStorage.getItem('token') || sessionStorage.getItem('token');
if(!token){
    navigate('/Register')
}
 },[navigate])
  return (
    <div className='h-dvh bg-green-500 w-full'>
      
    </div>
  )
}
