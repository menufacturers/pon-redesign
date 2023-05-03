import logo from "../assets/img/logo.svg";
// import { Container, Nav, Navbar, Button } from "react-bootstrap";

function NavbarMenu() {
    return (
        <nav class="navbar bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src={logo} alt="Plate of Nations logo" width="30" height="24" class="d-inline-block align-text-top" />
                    Plate of Nations
                </a>
            </div>
        </nav>
    );
}

export default NavbarMenu;