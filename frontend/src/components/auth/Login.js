import { StyledForm } from "./StyledForm";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <StyledForm>
      <h2>Login</h2>
      <input 
        type="email"
        placeholder="Email address"
      />
      <input 
        type="password" 
        placeholder="Password"
      />
      <button>Login</button>
      <h3>If not registered, &nbsp; 
        <Link to="/register" className="form-link">
           Register here!
        </Link>
      </h3>
    </StyledForm>
  )
}

export default Login