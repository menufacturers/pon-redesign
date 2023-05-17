import "../assets/styles/About.css";
import { Link } from "react-router-dom";
import decoposter from "../assets/img/posters/poster-2023.png"
import waves from "../assets/img/decorative-elements/white-yellow-waves.png";
import asari from "../assets/img/vendors/asari.png"
import emeraldvendor from "../assets/img/vendors/emerald-city-vendors.jpg";
import huongvendor from "../assets/img/vendors/huong-duong-vendors.jpg";
import outsidervendor from "../assets/img/vendors/outsider-pizza-vendors.jpg";

import SED from "../assets/img/sponsors/SED.png";
import amazon from "../assets/img/sponsors/amazon.png"
import mlkba from "../assets/img/sponsors/mlkba.png"
import eses from "../assets/img/sponsors/eses.png"
import homesight from "../assets/img/sponsors/homesight.png"

export default function About() {
    return (
        <div class="about">
            <div class="page-banner about-banner">
                <h1>About</h1>
                <div>
                    <p class="page-description">Discover the story behind Plate of Nations.</p>
                </div>
            </div>

            <section id="event-overview">
                <div class="container overview-container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 overview-text">
                            <h2>A Feast for the Senses</h2>
                            <p>Whether you’re looking for Mexico City-style street food like guaraches and tortas, Ethiopian classics served over fresh injera, or smoky Vietnamese claypot, Southeast Seattle has it all. For two weeks every spring, Plate of Nations invites food lovers and curiosity seekers to sample $20 and $35 shareable plates offered by restaurants in the city’s most diverse neighborhoods.</p>
                        </div>
                        <div class="col-lg-6 overview-img-container">
                            <img src={decoposter} alt="Plate of Nations 2023 promotional poster" class="img-fluid overview-img" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="faq">
                <div class="box">
                    <h3>How To Participate</h3>
                    <div class="box-img-container">
                        <img src={waves} alt="Decorative waves"></img>
                    </div>
                    <ul>
                        <li><i class="fa-solid fa-passport"></i> <b>Get a Passport:</b> Grab a physical copy at a participating restaurant or track it digitally on <Link to="../passport" class="faq-hyperlink"><i>plateofnations.com</i></Link></li>
                        <li><i class="fa-solid fa-compass"></i> <b>Discover Restaurants:</b> Explore and visit our participating restaurants</li>
                        <li><i class="fa-solid fa-utensils"></i> <b>Try Sample Plates:</b> Order a "Plate of Nations Sample Plate"</li>
                        <li><i class="fa-solid fa-stamp"></i> <b>Stamp Your Passport:</b> Physically stamp your paper passport or scan the QR code at the restaurant to stamp your digital passport</li>
                        <li><i class="fa-solid fa-share-nodes"></i> <b>Share & Win:</b> Share your journey on social media with <a class="faq-hyperlink" href="https://www.instagram.com/explore/tags/plateofnations2023/" target="_blank" rel="noreferrer"><i>#PlateOfNations2023</i></a> for a chance to win exciting prizes</li>
                    </ul>
                </div>
            </section>
            <section id="passport">
                <div class="container passport-container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 passport-img-container">
                            <img src={asari} alt="Plate of Nations Passport" class="img-fluid passport-img" />
                        </div>
                        <div class="col-lg-6 passport-text">
                            <h2>Our History</h2>
                            <p>In 2010, Asari Mohamath, a Cham Muslim refugee from Vietnam and former owner of Salima restaurant, had a vision to develop a unified marketing event to highlight the unique and authentic cuisines offered by MLK restaurants.</p>
                            <Link to="../about">
                                <button type="button" class="btn btn-link red-btn-link">2010 <i class="fa-solid fa-arrow-right-long" ></i></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section id="food-gallery">
                <div class="container-fluid p-0">
                    <div class="row no-gutters">
                        <div class="col-lg-4 food-img">
                            <img src={emeraldvendor} class="img-fluid" alt="Emerald City vendors" />
                        </div>
                        <div class="col-lg-4 food-img">
                            <img src={huongvendor} class="img-fluid " alt="Huong Duong vendors" />
                        </div>
                        <div class="col-lg-4 food-img">
                            <img src={outsidervendor} class="img-fluid" alt="Outsider Pizza vendors" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="about-sponsor">
                <h2 class="text-center">Big Thank You to Our Sponsors!</h2>
                <div class="container sponsor-logos text-center">
                    <a href="https://www.seattle.gov/office-of-economic-development">
                        <img src={SED} alt="Seattle Office of Economic Development Logo" />
                    </a>
                    <a href="https://www.amazon.com/">
                        <img src={amazon} alt="Amazon Logo" />
                    </a>
                    <a class="homesight-logo" href="https://www.homesightwa.org/">
                        <img src={homesight} alt="HomeSight Logo" />
                    </a>
                    <a href="http://www.mlkba.org/">
                        <img src={mlkba} alt="MLK Business Association Logo" />
                    </a>
                    <a href="https://essentialseseattle.com/">
                        <img src={eses} alt="Essential Southeast Seattle Logo" />
                    </a>
                </div>
            </section>
        </div>
    );
}