import "../assets/styles/About.css";
import { Link } from "react-router-dom";
import emeraldvendor from "../assets/img/vendors/emerald-city-vendors.jpg";
import bananasgrill from "../assets/img/restaurants/food/bananasgrill.png";
import bangkitchen from "../assets/img/restaurants/food/bangkitchen.png";
import asari from "../assets/img/vendors/asari-icon.png"

import SED from "../assets/img/sponsors/SED.png";
import amazon from "../assets/img/sponsors/amazon.png"
import mlkba from "../assets/img/sponsors/mlkba.png"
import eses from "../assets/img/sponsors/eses.png"
import homesight from "../assets/img/sponsors/homesight.png"
// import slideone from "../assets/img/about-carousel/slide-one.png"
// import slidetwo from "../assets/img/about-carousel/slide-two.png"
// import slidethree from "../assets/img/about-carousel/slide-three.png"

export default function About() {

    const buttons = document.querySelectorAll("[data-carousel-button]")

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const offset = button.dataset.carouselButton === "next" ? 1 : -1
            const slides = button
                .closest("[data-carousel]")
                .querySelector("[data-slides]")
            const activeSlide = slides.querySelector("[data-active]")
            let newIndex = [...slides.children].indexOf(activeSlide) + offset
            if (newIndex < 0) newIndex = slides.children.length - 1
            if (newIndex >= slides.children.length) newIndex = 0

            slides.children[newIndex].dataset.active = true
            delete activeSlide.dataset.active
        })
    })

    return (
        <div class="about">
            <div class="page-banner about-banner">
                <h1>About</h1>
                <div>
                    <p class="page-description">Discover the story behind our passion for great food and memorable experiences.</p>
                </div>
            </div>
            <section id="passport">
                <div class="container passport-container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 passport-text">
                            <h2>A Feast for the Senses</h2>
                            <p>Conceived by Asari Mohamath, a Cham Muslim refugee from Vietnam and former owner of Salima restaurant, Plate of Nations is a signature event of the MLK Business Association and has been captivating food enthusiasts since 2011. Immigrant-owned businesses take center stage and offer Special Menus to Share priced at $20 and $35 during this two-week feast of flavors and celebration of culture and diversity every spring.</p>
                            <Link to="../passport">
                                <button type="button" class="btn btn-link red-btn-link">Explore My Passport <i class="fa-solid fa-arrow-right-long" ></i></button>
                            </Link>
                        </div>
                        <div class="col-lg-6 passport-img-container">
                            <img src={asari} alt="Asari Mohamath" class="img-fluid passport-img" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="food-gallery">
                <div class="container-fluid p-0">
                    <div class="row no-gutters">
                        <div class="col-lg-4 food-img">
                            <img src={emeraldvendor} class="img-fluid" alt="Alem food" />
                            <div class="food-overlay">
                                <div class="food-overlay-text">
                                    <h3>Alem</h3>
                                    <p>Chicken tibs / spicy chicken / veggie platter with injera bread</p>
                                    <Link role="button" class="btn btn-outline-secondary btn-lg px-4" to="../restaurants">View More</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 food-img">
                            <img src={bananasgrill} class="img-fluid " alt="Bananas Grill food" />
                            <div class="food-overlay">
                                <div class="food-overlay-text">
                                    <h3>Bananas Grill</h3>
                                    <p>Falafal, hummus & pita, dolmas, vegeterian sambusas, rice</p>
                                    <Link role="button" class="btn btn-outline-secondary btn-lg px-4" to="../restaurants">View More</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 food-img">
                            <img src={bangkitchen} class="img-fluid" alt="Bang Kitchen food" />
                            <div class="food-overlay">
                                <div class="food-overlay-text">
                                    <h3>Bang Bang Kitchen</h3>
                                    <p>Chips with salsa / hatch chile queso, chicken wings, fried brussel sprouts, enchiladas ...</p>
                                    <Link role="button" class="btn btn-outline-secondary btn-lg px-4" to="../restaurants">View More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section id="about-event">
                <div class="container">
                    <div class="about-slides">
                        <h3><em>This could be you!</em></h3>
                        <div class="carousel" data-carousel>
                            <button class="carousel-button prev" data-carousel-button="prev">
                                <i class="fa-solid fa-arrow-left"></i>
                            </button>
                            <button class="carousel-button next" data-carousel-button="next">
                                <i class="fa-solid fa-arrow-right"></i>
                            </button>
                            <ul data-slides>
                                <li class="slide" data-active>
                                    <img src={slideone} alt="Slide Image 1" />
                                </li>
                                <li class="slide">
                                    <img src={slidetwo} alt="Slide Image 2" />
                                </li>
                                <li class="slide">
                                    <img src={slidethree} alt="Slide Image 3" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="about-pon">
                        <h2> What is Plate of Nations? </h2>
                        <ul class="about-list">
                            <li class="bullet-one">
                                <strong>2-week</strong> food event highlighting unique cultural cusines
                            </li>
                            <li class="bullet-two">
                                <strong>30+</strong> local restaurants to discover
                            </li>
                            <li class="bullet-three">
                                <strong>$20-35</strong> per sample plate
                            </li>
                            <li class="bullet-four">
                                <strong>Win</strong> contests and prizes
                            </li>
                            <li class="bullet-five">
                                <strong>All</strong> ages, cultural identies, and nationalities are welcome!
                            </li>
                        </ul>
                    </div>
                </div>
            </section> */}
            <section id="about-quote1">
                <div class="container">
                    <h3>"The event is about representing different cultures - and that's what our neighborhood is all about."</h3>
                    <p>- Drea Mizer, Co-Owner of Buddha Bruddah</p>
                </div>
            </section>
            <section id="about-steps">
                <div class="container">
                    <h2>5 Easy Steps</h2>
                    <ol class="steps">
                        <li class="step-one"><strong>1. Grab Your Plate of Nations Passport</strong></li>
                        <p>Pick up a physical copy at any Plate of Nations restaurant <em>OR </em>track digitally </p>
                        <div class="nav-button d-grid gap-2 d-md-flex justify-content-md-center">
                            <Link role="button" class="btn btn-primary btn-lg px-4 gap-3" to="../passport">Get Passport</Link>
                        </div>
                        <li class="step-two"><strong>2. Choose & Travel to Your Destination</strong></li>
                        <div class="nav-button d-grid gap-2 d-md-flex justify-content-md-center">
                            <Link role="button" class="btn btn-primary btn-lg px-4 gap-3 rest-btn" to="../restaurants">Find Restaurants</Link>
                        </div>
                        <li class="step-three"><strong>3. Order a "Plate of Nations Sample Plate" at Restaurant</strong></li>
                        <li class="step-four"><strong>4. Stamp Your Passport</strong></li>
                        <p>Physically stamp off <em>OR</em> enter a code into your digital passport</p>
                        <li class="step-five"><strong>5. Share Your Journey</strong></li>
                        <p>Tag us on social media with <a class="hashtag" href="https://www.instagram.com/explore/tags/plateofnations2023/"><strong>#PlateofNations2023</strong></a> for a chance to win various prizes!</p>
                        <div class="nav-button d-grid gap-2 d-md-flex justify-content-md-center">
                            <Link role="button" class="btn btn-primary btn-lg px-4 gap-3" to="../passport">See Prizes</Link>
                        </div>
                    </ol>
                </div>
            </section>
            <section id="about-quote2">
                <div class="container">
                    <h3>"Everyone got excited about a good event, because food brings people together"</h3>
                    <p>- Julie Pham, former MLKBA Board Chair</p>
                </div>
            </section>
            <section id="about-history">
                <div class="container">
                    <h2> Join our Journey</h2>
                </div>
            </section>
            <section id="about-timeline">
                <div class="container mt-4">
                    <div class="accordion" id="accordionExample">
                        <div class="card">
                            <div class="card-header" id="headingOne">
                                <h2 class="mb-0">
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Event 1
                                    </button>
                                </h2>
                            </div>

                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div class="card-body">
                                    Description of Event 1
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header" id="headingTwo">
                                <h2 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Event 2
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div class="card-body">
                                    Description of Event 2
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header" id="headingThree">
                                <h2 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Event 3
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <div class="card-body">
                                    Description of Event 3
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section id="about-sponsor">
                <div class="container sponsor-logos">
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