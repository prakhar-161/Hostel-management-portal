import Unlock from '../images/unlock.svg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-parent">
      <div className="home-col">
        <h1>XYZ COLLEGE</h1>
        <div className="home-btn">
          <Link to="/register">
            <button className="btns">Register</button>
          </Link>
          <Link to="/login">
            <button className="btns">Login</button>
          </Link>
        </div>
      </div>
      <div className="home-col">
        <img src={Unlock} alt="Unlock" className="unlock-svg" />
      </div>
    </div>
  )
}

export default Home