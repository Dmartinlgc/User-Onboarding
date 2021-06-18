
import react from 'react' 

function Form(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors
    } = props
    
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }
      const onChange = event =>{
          const {name, value, type, checked} =event.target
          const useThis = type === 'checkbox' ? checked:value
          change(name, useThis)
          console.log(values)

      }

    return (
        <div>
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.TOS}</div>
           
            <label>Name
                <input
                value={values.name}
                type = 'text'
                name = 'name'
                onChange={onChange}
                />
            </label>
            <label>Email
                <input
                value = {values.email}
                type = 'email'
                name = 'email'
                onChange ={onChange}
                />
            </label>
            
            <label>Password
                <input
                value ={values.password}
                type = 'password'
                name = 'password'
                onChange={onChange}
                />
            </label>

            <label> TOS
                 <input
                 checked = {values.TOS}
                 type = 'checkbox'
                 name = 'TOS'
                 onChange={onChange}
                />
            </label>
            <button onClick = {onSubmit} disabled = {disabled}>submit</button>
        </div>
    )
}
export default Form;