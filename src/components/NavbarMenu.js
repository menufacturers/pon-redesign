import logo from "../assets/img/logo.svg";
// import { Container, Nav, Navbar, Button } from "react-bootstrap";

function NavbarMenu() {
    return (
        <nav class="navbar fixed-top bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src={logo} alt="Plate of Nations logo" width="30" height="24" class="d-inline-block align-text-top" />
                    Plate of Nations
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="restaurants">Restaurants</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="passport">Passport</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="press">Press</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="about">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavbarMenu;