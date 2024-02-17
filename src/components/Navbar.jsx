import React from "react";
import { useState } from "react";
import bm from "../assets/blackmm.png"



export default function Navbar(props) {
  const { sm, changeHandler, query ,trendings ,latest} = props;
  // if (trendings){
  //   document.getElementById('active').classList.add="active"
  // }
  // const [query, setQuery]=useState('');
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary bg-primary fixed-top border-body px-5 "
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={bm} alt="logo" />
            MOVIE MIX
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a id="active" className="nav-link  " onClick={() => trendings()}>
                Trendings
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => latest()}>
                  Latest
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                value={query}
                onChange={changeHandler}
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={sm}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
