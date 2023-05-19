import "../assets/styles/RestaurantInfo.css";
import { Link } from "react-router-dom";
import waves from "../assets/img/decorative-elements/white-yellow-waves.png";

export default function RestaurantInfo(props) {
    // const cuisines = props.cuisine.split(", ");

    return (
    <div class="restaurant-info">
    <div class="page-banner restaurant-info-banner">
        <div><h1>{props.restaurantName}</h1></div>
        <div>
            <p class="page-description"></p>
        </div>
    </div>
    <div class="menu">
        <div class="box">
        <h2>Special Menus to Share </h2>
        <p>Come sample shareable plates that are exclusively offered during this event!</p>
            <div class="box-img-container">
                <img src={waves} alt="Decorative waves"></img>
            </div>
            <div class="menu-one">
                <img src={props.menuOneImg} class="img-fluid" alt={props.menuOneAlt} />
                <h4>Special Set One: ${props.menuOnePrice}</h4>
                <ul>
                    <li>{props.menuOneDesc}</li>
                </ul>
            </div>
            <div class="menu-two">
                <img src={props.menuTwoImg} class="img-fluid" alt={props.menuTwoAlt} />
                <h4>Special Set Two: ${props.menuTwoPrice}</h4>
                <ul>
                    <li>{props.menuTwoDesc}</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="container-fluid vendor-info-container">
        <div class="row">
        <h3>About {props.restaurantName}</h3>
            <div class="col-lg-6 vendor-description">
                <img src={props.logoImg} class="img-fluid logo-img" alt={props.logoAlt} />
                <p>{props.desc}</p>
                <h4>Proud Participant Since</h4>
                <p>{props.yearJoined}</p>
            </div>
            <div class="col-lg-6 vendor-logistics">
                <h4>Address</h4>
                <p>{props.streetAddress}</p>
                <p>{props.city}, WA {props.zipcode}, United States</p>
                <a href={props.mapsUrl} role="button" class="btn btn-outline-secondary btn-lg px-4"> Open in Google Maps</a>
                <h4>Hours</h4>
                <p>Mon - Fri: {props.weekdayHours}</p>
                <p>Sat: {props.satHours}</p>
                <p>Sun: {props.sunHours}</p>
                <h4>Contact</h4>
                <p>Phone: <a class="contact-link" href={props.phoneHtml} alt="restaurant's phone number"></a>{props.phone}</p>
                <p>Email: <a class="contact-link" href={props.emailHtml} alt="restaurant's email"></a>{props.email}</p>
                <p><a class="contact-link" href={props.website}>Website</a></p>
            </div>
        </div>
    </div>
    <div class="container-fluid owner-container">
        <div class="row">
            <h2>Meet the Owner</h2>
            <div class="col-lg-6 owner-img">
                <img class="container-fluid"src={props.ownerImg} alt={props.ownerAlt} />
            </div>
            <div class="col-lg-6 owner-details">
                <h5>{props.restaurantName}</h5>
                <h3>{props.ownerName}</h3>
                <p>{props.story}</p>
                <p>{props.story2}</p>
                <p>{props.story3}</p>
            </div>
        </div>
    </div>
    </div>
    );
}