import { Link } from "react-router-dom"


const HostelList = () => {
  return (
    <div className="hostels">
        <div className="hostel">
          <h2>Hostel K</h2>
          <Link to="/room/K" className="hostel-link">Add or Check info</Link>
        </div>
        <div className="hostel">
          <h2>Hostel L</h2>
          <Link to="/room/L" className="hostel-link">Add or Check info</Link>
        </div>
        <div className="hostel">
          <h2>Hostel M</h2>
          <Link to="/room/M" className="hostel-link">Add or Check info</Link>
        </div>
        <div className="hostel">
          <h2>Hostel N</h2>
          <Link to="/room/N" className="hostel-link">Add or Check info</Link>
        </div>
        <div className="hostel">
          <h2>Hostel O</h2>
          <Link to="/room/O" className="hostel-link">Add or Check info</Link>
        </div>
    </div>
  )
}

export default HostelList