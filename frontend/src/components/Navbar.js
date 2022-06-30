import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav-bar">
      <Link to="/">
        <h2>Hostel Management Portal</h2>
      </Link>
    </div>  
  )
}

export default Navbar