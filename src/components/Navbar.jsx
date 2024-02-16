import React from "react";

export default function Navbar(props) {
  const [sm]=props
  const [query, setQuery]=useState('');
  const changeHandler=(e)=>{
    setQuery(e.target.value);
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark fixed-top border-body px-5 py-3" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
              value={query} onChange={changeHandler}
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit" onClick={sm}>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
