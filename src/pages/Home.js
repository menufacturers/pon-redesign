import "../assets/styles/Home.css";
import { Link } from "react-router-dom";
import alem from "../assets/img/restaurants/alem.png";
import bananasgrill from "../assets/img/restaurants/bananasgrill.png";
import bangkitchen from "../assets/img/restaurants/bangkitchen.png";
import banhmi from "../assets/img/restaurants/banhmi.png";
import buathai from "../assets/img/restaurants/buathai.png";
import buddhabrud from "../assets/img/restaurants/buddhabrud.png";
import cafetal from "../assets/img/restaurants/cafetal.jpg";

import bananas from "../assets/img/vendors/vendors-deco.png";
import passport from "../assets/img/passport-2023.png";
import post1 from "../assets/img/social-posts/post-1.jpg";
import post2 from "../assets/img/social-posts/post-2.jpeg";
import post3 from "../assets/img/social-posts/post-3.jpg";
import waves from "../assets/img/waves.png";

export default function Home() {
    return (
        <div >
            <div class="hero-banner">
                <div class="container hero-container">
                    <h1 class="intro-text">Bring the World to Your Plate!</h1>
                    <p class="lead">Experience global flavors at Plate of Nations! Join our annual celebration of diversity and indulge in mouthwatering delights from immigrant-owned businesses in Rainier Valley.</p>
                    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <Link role="button" class="btn btn-primary btn-lg px-4 gap-3" to="../restaurants">Find Restaurants</Link>
                        <Link role="button" class="btn btn-outline-secondary btn-lg px-4" to="../about">Learn More</Link>
                    </div>
                </div>
            </div>
            <section id="food-gallery">
                <div class="container-fluid p-0">
                    <div class="row no-gutters">
                        <div class="col-lg-4">
                            <img src={alem} class="img-fluid" alt="Alem food" />
                        </div>
                        <div class="col-lg-4">
                            <img src={bananasgrill} class="img-fluid " alt="Bananas Grill food" />
                        </div>
                        <div class="col-lg-4">
                            <img src={bangkitchen} class="img-fluid" alt="Bang Kitchen food" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="spotlight">
                <div class="container spotlight-container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 spotlight-text">
                            <h2>Vendor Spotlight</h2>
                            <p>Meet the stars behind the dishes you love! Our Vendor Spotlight shines a light on the amazing owners of the restaurants participating in Plate of Nations. Get to know their stories, their passions, and their secret recipes in this exciting and exclusive feature!</p>
                            <button type="button" class="btn btn-link white-btn-link">Read Their Stories <i class="fa-solid fa-arrow-right-long" ></i></button>
                        </div>
                        <div class="col-lg-6 spotlight-img-container">
                            <img src={bananas} alt="Plate of Nations vendors" class="img-fluid spotlight-img" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="passport">
                <div class="container passport-container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 passport-img-container">
                            <img src={passport} alt="Plate of Nations Passport" class="img-fluid passport-img" />
                        </div>
                        <div class="col-lg-6 passport-text">
                            <h2>Mark Your Foodie Adventure</h2>
                            <p>Transform your culinary adventure into an interactive and exciting journey, and get a chance to win amazing prizes. Get your digital passport today and embark on an experience like no other!</p>
                            <Link to="../passport">
                                <button type="button" class="btn btn-link red-btn-link">Digitize My Passport <i class="fa-solid fa-arrow-right-long" ></i></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section id="socials">
                <div class="container socials-container">
                    <div class="row align-items-center">
                        <div class="socials-text">
                            <h2>Get the Latest From Us</h2>
                            <p>Follow along on Instagram <a class="hyperlink" href="https://www.instagram.com/plateofnations/" target="_blank" rel="noreferrer">@plateofnations</a> and share your delicious bites with <a class="hyperlink" href="https://www.instagram.com/explore/tags/plateofnations/" target="_blank" rel="noreferrer">#PlateOfNations</a>!</p>
                            <img class="waves-deco" src={waves} alt="Decorative waves"></img>
                        </div>
                        <div class="col-lg-4">
                            <a href="https://www.instagram.com/p/CrlfRJOOcA-/" target="_blank" rel="noreferrer">
                                <img src={post1} alt="Instagram post" class="img-fluid insta-post" />
                            </a>
                        </div>
                        <div class="col-lg-4 mid-post">
                            <a href="https://www.instagram.com/p/Cq8hgx8J_oa/" target="_blank" rel="noreferrer">
                                <img src={post2} alt="Instagram post" class="img-fluid insta-post" />
                            </a>
                        </div>
                        <div class="col-lg-4">
                            <a href="https://www.instagram.com/p/Cq3OAZ5p12Z/" target="_blank" rel="noreferrer">
                                <img src={post3} alt="Instagram post" class="img-fluid insta-post" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}