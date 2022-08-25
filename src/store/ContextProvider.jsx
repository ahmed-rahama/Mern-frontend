import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
const Context= React.createContext()
export function ContextProvider(props) {
    const [message, setMessage] = useState("")
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [products, setProducts] = useState([])
    const [userId, setUserId] = useState()

    useEffect(()=> {
        console.log("any thing")
    
    let test= ()=>{ // get all products added_by the user that is logged in
      axios.get("/product/all/"+userId).then(response=>setProducts(response.data))
    }
    if (message !== "") {
      test()
    }
    },[message, userId])
    const sendToBackend = ()=>{
        console.log(username, email, password)
        const data = {username, email, password} 
        axios
        .post('/user/create', data) // .post(URL, dataToSend)
        .then(response=> {
          console.log(response.data)
          setMessage(response.data)
        }) 
      }
      const addProduct = ()=>{
        setMessage("") // in order to have a state update
        axios.get('/product/add/'+userId)
        .then(response=>{
          console.log(response)
          // After we add a new product we update the message  state
          setMessage(response.data) // a new product is added
          // setProducts(response.data.products)
    
        })
      }
      const loginCheck = ()=>{
        axios.post('/user/login', {email, password})
        .then(response => {
          console.log(response) 
          setMessage(response.data.message)
          setProducts(response.data.products)
          setUserId(response.data.user._id)
        })
      }

  return (
    <Context.Provider value={{message, setMessage, products,setProducts, username, setUsername, userId, setUserId, email, setEmail, password, setPassword, sendToBackend, addProduct, loginCheck


    }}>{props.children}</Context.Provider>
  )
}

export default Context