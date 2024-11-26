import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
       <div>
          <header id="site-header" class="fixed-top">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light">
                <Link class="navbar-brand" to="/home">
                    <i class="fas fa-bold"></i>.
                </Link>
                <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon fa icon-expand fa-bars"></span>
                    <span class="navbar-toggler-icon fa icon-close fa-times"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarScroll">
                    <ul class="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li class="nav-item">
                            <Link class="nav-link " aria-current="page" to="/home">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/about">My Intro</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/services">Services</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/contactme">Contact</Link>
                        </li>
                    </ul>
                    <form action="#search" method="GET" class="d-flex search-header">
                        {/* <input class="form-control" type="search" placeholder="Enter Keyword..." aria-label="Search"
                            required/> */}
                        {/* <button class="btn btn-style" type="submit">Hire Me</button> */}
                    </form>
                </div>
                {/* <!-- toggle switch for light and dark theme --> */}
             
                {/* <!-- //toggle switch for light and dark theme --> */}
            </nav>
        </div>
    </header>
    </div>
    </>
  )
}

export default Navbar
