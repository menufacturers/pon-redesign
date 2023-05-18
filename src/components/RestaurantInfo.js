import "../assets/styles/RestaurantInfo.css";
import { Link } from "react-router-dom";
import waves from "../assets/img/decorative-elements/white-yellow-waves.png";

export default function RestaurantInfo(props) {
    // const cuisines = props.cuisine.split(", ");

    return (
    <div class="restaurant-info">
    {/* <div class="restaurant-detail-banner">
    </div> */}
    <div class="page-banner restaurant-info-banner">
        <div><h1>{props.restaurantName}</h1></div>
        <div>
            <p class="page-description"></p>
        </div>
    </div>
    <img src={props.logoImg} class="img-fluid card-img" alt={props.logoAlt} />
    <div class="menu">
        <div class="box">
        <h2>Special Menus to Share </h2>
        <p>Come sample shareable plates that are exclusively offered during this event!</p>
            <div class="box-img-container">
                <img src={waves} alt="Decorative waves"></img>
            </div>
            <div class="menu-one">
                <img src={props.menuOneImg} alt={props.menuOneAlt} />
                <h4>Special Set One: ${props.menuOnePrice}</h4>
                <ul>
                    <li>{props.menuOneDesc}</li>
                </ul>
            </div>
            <div class="menu-two">
                <img src={props.menuTwoImg} alt={props.menuTwoAlt} />
                <h4>Special Set Two: ${props.menuTwoPrice}</h4>
                <ul>
                    <li>{props.menuTwoDesc}</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="container vendor-info-container">
        <div class="row">
            <h3>{props.restaurantName}</h3>
            <div class="col-md-4 vendor-description">
                <h4>About</h4>
                <p>{props.desc}</p>
                <h4>Proud Participant Since</h4>
                <p>{props.yearJoined}</p>
            </div>
            <div class="col-md-8 vendor-logistics">
                <h4>Address</h4>
                <p>{props.streetAddress}</p>
                <p>{props.city}, WA {props.zipcode}, United States</p>
                <Link role="button" class="btn btn-outline-secondary btn-lg px-4" to={props.mapsUrl}> Open in Google Maps</Link>
                <h4>Hours</h4>
                <p>Monday-Friday: {props.weekdayHours}</p>
                <p>Saturday: {props.satHours}</p>
                <p>Sunday: {props.sunHours}</p>
                <h4>Contact</h4>
                <p>Phone: <a href="tel:{props.phone}"></a>{props.phone}</p>
                <p>Email: <a href="{props.email}"></a>{props.email}</p>
            </div>
        </div>
    </div>
    <div class="container owner-container">
        <div class="row">
            <h2>Meet the Owner</h2>
            <div class="col-md-4 owner-img">
                <img class="container-fluid"src={props.ownerImg} alt={props.ownerAlt} />
            </div>
            <div class="col-md-8 owner-details">
                <h4>{props.restaurantName}</h4>
                <h3>{props.ownerName}</h3>
                <p>{props.story}</p>
            </div>
        </div>
    </div>
    </div>
    );
}