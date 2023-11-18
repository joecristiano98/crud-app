import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchUser } from "../features/userDetailSlice";
import { Col, Row } from "react-bootstrap";

const Navbar = () => {
  const allusers = useSelector((state) => state.app.users);
  const dispatch = useDispatch();

  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    dispatch(searchUser(searchData));
  }, [searchData]);

  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid ">
          <h4 className="navbar-brand"> <img height="50"
            src="https://freepngimg.com/save/66113-play-football-gymnasiade-player-sport-kick/1200x1073"
            alt="" />
            Football-Related</h4>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Create Post
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/read" className="nav-link">
                  All Post ({allusers.length})
                </Link>
              </li>
            </ul>


            <input
              className="form-control mx-auto w-25"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
            />

          </div>
        </div>
      </nav>

    </div>
  );
};

export default Navbar;