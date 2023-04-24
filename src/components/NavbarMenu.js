import logo from "../assets/img/logo.svg";
// import { Container, Nav, Navbar, Button } from "react-bootstrap";

function NavbarMenu() {
    return (
        <nav class="navbar fixed-top navbar-light bg-light">
            <a class="navbar-brand" href="#">
                <img src={logo} width="30" height="30" class="d-inline-block align-top" alt=""/>
                    Plate of Nations Redesign
            </a>
        </nav>
    );
}
export default NavbarMenu;