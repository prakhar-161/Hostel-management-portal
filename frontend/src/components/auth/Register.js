import { Link } from "react-router-dom"
import { StyledForm } from "./StyledForm"

const Register = () => {
  return (
    <StyledForm>
      <h2>Register</h2>
      <input 
        type="text" 
        placeholder="Full name"
      />
      <input 
        type="number"
        placeholder="Age"
      />
      <input 
        type="number" 
        placeholder="Phone number"
      />
      <input 
        type="email"
        placeholder="Email address"
      />
      <input 
        type="password" 
        placeholder="Password"
      />
      <button>Register</button>
      <h3>Already registered? &nbsp;
        <Link to="/login" className="form-link">
          Login here!
        </Link>
      </h3>
    </StyledForm>
  )
}

export default Register