import React from "react";

function Nav(){
   return (
    <>
        <div className="nav w-100 fixed-top top-0 start-0 bg-light shadow-sm">
            <nav className="navbar navbar-expand-lg w-100">
                <div className="logo navbar-brand">
                    <a to="/" className="text-decoration-none">Leaf<span>Craft</span></a>
                </div>

                <div className="nav-icons d-flex d-lg-none justify-content-center align-items-center gap-3">
                    <a href="#"> <i className="bi bi-search"></i></a>
                    <a href="#"> <i className="bi bi-persone"></i></a>

                    <a href="#" className="position-relative">
                        <i className="bi bi-heart"></i>
                        <span className="wishlist-count position-absolute top-0 start-100 translate-middle badge rounded-pill">
                            0
                        </span>
                    </a> 

                    <a href="#" className="position-relative">
                        <i className="bi bi-bag"></i>
                        <span className="cart-count position-absolute top-0 start-100 translate-middle badge rounded-pill p-2">
                            0
                        </span>
                    </a>
                </div>

                <button className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target = "#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>

                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="menu navbar-nav d-flex justify-content-center align-items-center gap-3">
                        <li className="nav-item"><a href="#">Home</a></li>
                        <li className="nav-item"><a href="#">About</a></li>
                        <li className="nav-item"><a href="#">Shop</a></li>
                        <li className="nav-item"><a href="#">Blog</a></li>
                        <li className="nav-item"><a href="#">Contact</a></li>

                        <li className="nav-item ms-4 menu-nav-icon">
                            <div className="nav-icons d-flex justify-content-center align-items-center gap-3">
                                <a href="#" data-bs-toggle="model" data-bs-target="#searchModel">

                                </a>
                            </div>
                        </li>
                    </ul>
                </div>

            </nav>
        </div>
    </>

   )
}

export default Nav