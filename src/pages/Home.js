import React,{useState,useEffect} from 'react'
import {Link } from 'react-router-dom'
// import toast from 'react-toastify'
import axios from 'axios'
import './Home.css'
import{toast} from 'react-toastify'
const Home = () => {
   const [data,setData] =useState([]);
   const loadData=async()=>{
    const response=await axios.get("http://localhost:5000/api/users");
  setData(response.data)
}
useEffect(()=>{
    loadData();
},[])
const deletUser=(id)=>{
    if(window.confirm('Are you sure you deleate user information')){
        axios.delete(`http://localhost:5000/api/delete/${id}`);
        toast.success('delete user information succesfully');
    }
}
  return (
    <div style={{margin:"150px"}}>
        <Link to="/addContact">
    <button className='btn btn-contact'>Add Contact</button>
    </Link>
        <table className='styled-table'>
            <thead>
            <tr>
                {/* <th style={{textAlign:"center"}}>id</th> */}
                <th style={{textAlign:"center"}}>SNo</th>
                <th style={{textAlign:"center"}}>name</th>
                <th style={{textAlign:"center"}}>street</th>
                <th style={{textAlign:"center"}}>postalcode</th>
                <th style={{textAlign:"center"}}>city</th>
                <th style={{textAlign:"center"}}>Actions</th>
                
            </tr>
            </thead>
            <tbody>
                {data.map((item,index)=>{
                    return(
                        <tr>
                        <th scope='row'>{item.id}</th>
                        <td>{item.name}</td>
                        <td>{item.street}</td>
                        <td>{item.postalcode}</td>
                        <td>{item.city}</td>
                        <td>
                            <Link to={`/put/${item.id}`}>
                            <button className='btn btn-edit'>Edit</button>
                            </Link>
                            <button className='btn btn-delete' onClick={()=>deletUser(item.id)}>Delete</button>
                            <Link to={`/view/${item.id}`}>
                            <button className='btn btn-view'>view</button>
                            </Link>
                        </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Home
