import React, { useEffect } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'

const RefreshHandler = ({setIsAuthenticated}) => {
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(
        ()=>{ 
            const data = localStorage.getItem('user-info');
            const token = JSON.parse(data)?.token;
            console.log("Inside refresh handler : token",token)
            if(token){
                setIsAuthenticated(true);
                if(location.pathname==='/'||location.pathname==='/login'){
                    navigate('/dashboard',{replace:true});
                }
            }
        },[])
     return null
    }
export default RefreshHandler;
