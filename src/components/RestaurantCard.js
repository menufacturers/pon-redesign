import "../assets/styles/RestaurantCard.css";
import { Link } from "react-router-dom";

export default function RestaurantCard(props) {
    // const cuisines = props.cuisine.split(", ");

    return (
        //     <div class="card mb-3 restaurant-card" style={{ maxWidth: "840px" }}>
        <div class="card mb-3 restaurant-card" >
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={props.imgLink} class="img-fluid card-img" alt={props.imgAlt} />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <div class="d-flex align-items-center restaurant-name">
                            <img src={props.logoImg} class="img-fluid logo-img me-2" alt={props.logoAlt} />
                            <h4 class="card-title m-0">{props.title}</h4>
                        </div>
                        {/* {cuisines.map((cuisine) => (
                                <span class="badge rounded-pill badge-outline text-bg-light me-2">{cuisine}</span>
                            ))} */}
                        <p class="card-text"><i class="fa-solid fa-utensils"></i><b> Cuisine: </b>{props.cuisine}</p>
                        <p class="card-text"><i class="fa-solid fa-location-dot"></i><b> Location: </b> {props.location}</p>
                        <p class="card-text"><i class="fa-solid fa-clock"></i><b> Open today: </b>{props.hours}</p>
                        <Link role="button" class="btn btn-primary btn-lg px-4 gap-3 card-btn" to={props.visitLink}>Visit Restaurant</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}