import * as yup from 'yup'

const  formSchema = yup.object().shape({
 name:yup
 .string()
 .trim()
 .required('Name is required'),
 email: yup
 .string()
 .email('Enter a valid email')
 .required('Email is required'),
 password: yup
 .string()
 .min(6,'Enter a password')
 .required('Password required'),
 TOS: yup.boolean()
 .required( 'you must check the TOS') ,
 


})
export default formSchema