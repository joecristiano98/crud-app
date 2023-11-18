import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../features/userDetailSlice";
import { Col, Row } from "react-bootstrap";


const Create = () => {
  const [users, setUsers] = useState({});

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("users...", users);
    dispatch(createUser(users));
    navigate("/read");
  };

  return (
    <div style={{backgroundColor:'#f7df40',height:'700px',width:'100%',position:'absolute'}}>
    
        
       <Row>
         
            <Col lg={7} >
              <div>
                <h2 className="my-2">Fill the data</h2>
                <form  className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
                  <div class="mb-3">
                    <label class="form-label">Name</label>
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      onChange={getUserData}
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Country</label>
                    <input
                      type="country"
                      name="country"
                      class="form-control"
                      onChange={getUserData}
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Age</label>
                    <input
                      type="text"
                      name="age"
                      class="form-control"
                      onChange={getUserData}
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      class="form-check-input"
                      name="gender"
                      value="Male"
                      type="radio"
                      onChange={getUserData}
                      required
                    />
                    <label class="form-check-label">Male</label>
                  </div>
                  <div class="mb-3">
                    <input
                      class="form-check-input"
                      name="gender"
                      value="Female"
                      type="radio"
                      onChange={getUserData}
                    />
                    <label class="form-check-label">Female</label>
                  </div>
          
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </form>
                </div>
            </Col>
             <Col lg={5} sm={3}> <img style={{position:'relative'}} className="bg-image " src="https://i.postimg.cc/4x2M5TFQ/football-world-cup-characters-player-poster-icon-tshirt008-585877-159-1.jpg" alt="" /></Col>
            
       </Row>
       
    
      {/* <div>
        {users &&
          users
            .filter((ele) => {
              if (searchData.length === 0) {
                return ele;
              } else {
                return ele.name
                  .toLowerCase()
                  .includes(searchData.toLowerCase());
              }
            })
            .filter((ele) => {
              if (radioData === "Male") {
                return ele.gender === radioData;
              } else if (radioData === "Female") {
                return ele.gender === radioData;
              } else return ele;
            })

            .map((ele) => (
              <div key={ele.id} className="card w-50 mx-auto my-2 bg-warning">
                <div className="card-body">
                  <h5 className="card-title">{ele.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
                  <p className="card-text">{ele.gender}</p>
                  <button
                    className="card-link"
                    onClick={() => [setId(ele.id), setShowPopup(true)]}
                  >
                    View
                  </button>
                  <Link to={`/edit/${ele.id}`} className="card-link">
                  <i class="fa-solid fa-user-pen"></i>
                  </Link>
                  <Link
                    onClick={() => dispatch(deleteUser(ele.id))}
                    className="card-link"
                  >
                    <i class="fa-solid fa-trash" style={{color: '#ed2a07'}}></i>
                  </Link>
                </div>
              </div>
            ))}
      </div>
     */}
    </div>
  );
};

export default Create;