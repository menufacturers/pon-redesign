import "../assets/styles/Home.css";
import { Link } from "react-router-dom";
import bananas from "../assets/img/vendors/bananas-grill-vendor.png";
import passport from "../assets/img/passport-2023.png";
import post from "../assets/img/pon-poster.png";

export default function Home() {
    return (
        <div >
            <div class="hero-banner">
                <div class="container hero-container">
                    <h1 class="intro-text">Bring the World to Your Plate!</h1>
                    <p class="lead">Experience global flavors at Plate of Nations! Join our annual celebration of diversity and indulge in mouthwatering delights from immigrant-owned businesses in Rainier Valley.</p>
                    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <Link role="button" class="btn btn-primary btn-lg px-4 gap-3" to="../about">Learn More</Link>
                        <Link role="button" class="btn btn-outline-secondary btn-lg px-4" to="../restaurants">Find Restaurants</Link>
                    </div>
                </div>
            </div>
            <section id="passport">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <img src={passport} alt="Plate of Nations Passport" class="img-fluid" />
                        </div>
                        <div class="col-lg-6">
                            <h2>Mark Your Foodie Adventure</h2>
                            <p>Transform your culinary adventure into an interactive and exciting journey, and get a chance to win amazing prizes. Get your digital passport today and embark on an experience like no other!</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="spotlight">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <h2>Vendor Spotlight</h2>
                            <p>Meet the stars behind the dishes you love! Our Vendor Spotlight shines a light on the amazing owners of the restaurants participating in Plate of Nations. Get to know their stories, their passions, and their secret recipes in this exciting and exclusive feature!</p>
                        </div>
                        <div class="col-lg-6">
                            <img src={bananas} alt="Plate of Nations vendors" class="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="socials">
                <div class="container">
                    <div class="row align-items-center">
                        <h2>Get the Latest From Us</h2>
                        <p>#PON</p>
                        <div class="col-lg-4">
                            <img src={post} alt="Instagram post" class="img-fluid" />
                        </div>
                        <div class="col-lg-4">
                            <img src={post} alt="Instagram post" class="img-fluid" />
                        </div>
                        <div class="col-lg-4">
                            <img src={post} alt="Instagram post" class="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}