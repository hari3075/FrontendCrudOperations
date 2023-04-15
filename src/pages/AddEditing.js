import {toast} from 'react-toastify'
import React,{useState,useEffect} from 'react'
import {Link,useParams} from 'react-router-dom'
import axios from 'axios'
//useHistory,useParams
import './AddEdit.css';

const intialState={
    name:'',
    street:'',
    postalcode:'',
    city:''
    }
const AddEditing = () => {
    const [state,setState]=useState(intialState)
    const {name,street,postalcode,city}=state;
//   const history=useHistory()
  const {id}=useParams()
  useEffect(()=>{
axios.get(`http://localhost:5000/api/users/${id}`).then((resp)=>setState({...resp.data[0]}))
  },[id]);
    const submitHandler=(e)=>{
  e.preventDefault();
  if(!id||!name || !street || !postalcode ||!city){
toast.error('Please provide the values in every input values');
  }
  else{
    if(!id){
        axios.post('http://localhost:5000/api/post',{
            id,
            name,
            street,
            postalcode,
            city
        }).then(()=>{
           setState({id:'', name:'', street:'', postalcode:'', city:''})
        }).catch((err)=>toast.error(err.response.data))
        toast.success('User data added succesfully')
    }else{
        axios.put(`http://localhost:5000/api/put/${id}`,{
            id,
            name,
            street,
            postalcode,
            city
        }).then(()=>{
           setState( {id:'',name:'', street:'', postalcode:'', city:''})
        }).catch((err)=>toast.error(err.response.data))
        toast.success('User data update succesfully')
    }
   
  }
  }
  const inputHandler=(e)=>{
      const {name,value}=e.target
      setState({...state,[name]:value})
  }
  
    return (
      <div style={{marginTop:"100px"}}>
        <form  style={{
          margin:"auto",
          padding:'15px',
          maxWidth:"400px",
          alignContent:'center'
        }} onSubmit={submitHandler}>

  <label htmlfor='name'>Id</label>
  <input 
  type='number'
  id="id"
  name="id"
  placeholder='your id'
  value={id}
  onChange={inputHandler}
  />
  <label htmlfor='name'>Name</label>
  <input 
  type='text'
  id="name"
  name="name"
  placeholder='your name'
  value={name}
  onChange={inputHandler}
  />
  <label htmlfor='name'>Street</label>
  <input 
  type='text'
  id="street"
  name="street"
  placeholder='your street'
  value={street}
  onChange={inputHandler}
  />
  <label htmlfor='name'>PostalCode</label>
  <input 
  type='number'
  id="postalcode"
  name="postalcode"
  placeholder='your postalcode'
  value={postalcode}
  onChange={inputHandler}
  />
  
  <label htmlfor='name'>City</label>
  <input 
  type='text'
  id="city"
  name="city"
  placeholder='your city'
  value={city}
  onChange={inputHandler}
  />
  <input type='submit' value={id?'update':'Save'}/>
  <Link to='/'>
  <input type='button' value='Go Back'/>
  </Link>
  
        </form>
      </div>
    )
}

export default AddEditing
