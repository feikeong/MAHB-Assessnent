import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const UserDetail = () => {
    const { uid } = useParams();

    const [userData, userDatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/users/" + uid).then((res) => {
            return res.json();
        }).then((resp) => {
            userDatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div>
            {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

               <div className="container">
                
            <div className="card row" style={{ "textAlign": "left" }}>
                <div className="card-title">
                    <h2>User Create</h2>
                </div>
                <div className="card-body"></div>

                {userData &&
                    <div>
                        <h2>The User name is : <b>{userData.name}</b>  ({userData.username})</h2>
                        <h3>Details</h3>
                        <h5>Skillsets is : {userData.skill ?? ''}</h5>
                        <h5>Hobby is : {userData.hobby ?? ''}</h5>
                        <h3>Contact Details</h3>
                        <h5>Email is : {userData.email}</h5>
                        <h5>Phone is : {userData.phone}</h5>
                        <Link className="btn btn-danger" to="/">Back to Listing</Link>
                    </div>
                }
            </div>
            </div>
            {/* </div>
            </div> */}
        </div >
    );
}

export default UserDetail;