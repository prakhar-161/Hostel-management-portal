import { Link } from 'react-router-dom';
import room from '../images/room.jpg';
import student from '../images/student.jpg';
import staff from '../images/worker.jpg';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h2>Welcome Admin Name!</h2>
            <div className="cards">
                <div className="card">
                    <div className="card-image">
                        <img src={room} alt="Room" />
                    </div>
                    <div className="card-title">
                        <h3>Room Repair / Cleaning Status</h3>
                    </div>
                    <div className="card-links">
                        <Link to="/room" className="card-link">Add Room Repair/Cleaning or Check Info</Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <img src={student} alt="Room" />
                    </div>
                    <div className="card-title">
                        <h3>Students Info</h3>
                    </div>
                    <div className="card-links">
                        <Link to="/student" className="card-link">Add new Student and allot Room or Check Info</Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <img src={staff} alt="Room" />
                    </div>
                    <div className="card-title">
                        <h3>Staff Info</h3>
                    </div>
                    <div className="card-links">
                        <Link to="/room" className="card-link">Add more Staff or Check their info</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;