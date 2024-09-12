import logo from './logo.svg';
import './App.css';
import Form from './Form'
import axios from 'axios'
import * as yup from 'yup'
import react, {useState, useEffect} from 'react'
import schema from './formSchema' 
const startingFormValues ={
  ////text inputs////
  name:'',
  email:'',
  password:'',
  ///checkbox///
  TOS: false,
}
 const startingErrors ={
   name:'',
   email:'',
   password:'',
   TOS:'',
 }

 const initialDisabled = true
function App() {
const [users, setUsers] = useState([])
const [formValues, setFormValues] = useState(startingFormValues)
const [formErrors, setFormErrors] = useState(startingErrors)
const [disabled, setDisabled] = useState(initialDisabled)
const validate = (name, value) => {
  yup.reach(schema, name)
  .validate(value)
  .then(()=> setFormErrors({ ...formErrors, [name]: ''}))
  .catch(err =>{
    setFormErrors( {...formErrors,[name]: err.message})
  })
}
  const ChangeInput =(name, value) =>{
    validate(name,value)
    setFormValues({
      ...formValues,[name]: value
    })
}
useEffect(() => {
  schema.isValid(formValues).then(valid=> {
   setDisabled(!(valid && formValues.TOS))
  })
 }, [formValues])
  
 const postUser = () => {
   const newUser = {...formValues}
  axios.post('https://reqres.in/api/users', newUser)
  .then(res =>{
    console.log(res.data)
    setUsers([res.data, ...users])
  })
  
 
}

return (
   <div>
     {users.map(user =>(<pre>{JSON.stringify(user)}</pre>) )}
     <Form
     disabled={disabled}
     values={formValues}
     change ={ChangeInput}
     errors= {formErrors}
     submit= {postUser}
     />   
   </div>
  );
}

export default App;
