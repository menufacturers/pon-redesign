import "../assets/styles/Restaurants.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import alem from "../assets/img/restaurants/food/alem.png";
import alemlogo from "../assets/img/restaurants/restaurant-logos/alem-logo.png";
import bananasgrill from "../assets/img/restaurants/food/bananasgrill.png";
import bananaslogo from "../assets/img/restaurants/restaurant-logos/bananas-logo.jpeg"
import bangkitchen from "../assets/img/restaurants/food/bangkitchen.png";
import banhmi from "../assets/img/restaurants/food/banhmi.png";
import buathai from "../assets/img/restaurants/food/buathai.png";
import buddhabrud from "../assets/img/restaurants/food/buddhabrud.png";
import cafetal from "../assets/img/restaurants/food/cafetal.jpg";


export default function Restaurants() {
    const [searchQuery, setSearchQuery] = useState("");

    function handleSearchInputChange(event) {
        setSearchQuery(event.target.value);
    }
    //     const filteredRestaurants = restaurants.filter((restaurant) =>
    //     restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
    //   );

    return (
        <div>
            <div class="page-banner restaurants-banner">
                <div>
                    <h1>Restaurants</h1>
                </div>
                <div>
                    <p>Find all participating restaurants here!</p>
                </div>
            </div>
            <RestaurantCard
                imgLink={alem}
                imgAlt="Alem food"
                logoImg={alemlogo}
                logoAlt="Alem logo"
                title="Alem"
                cuisine={"Ethiopian, Eritrian"}
                hours="10:00 AM - 12:00 AM"
                location="Columbia City"
                visitLink="../restaurants"
            />
            <RestaurantCard
                imgLink={bananasgrill}
                imgAlt="Bananas Grill"
                logoImg={bananaslogo}
                logoAlt="Bananas Grill logo"
                title="Bananas Grill"
                cuisine={"Halal, Somali, Mediterranean"}
                hours="11:00 AM - 9:00 PM"
                location="Columbia City"
                visitLink="../restaurants"
            />
            <ul>
                <li>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                    />
                </li>

                <li>Filter + sort</li>
                <li>Restaurant cards: distance, hours, cuisine</li>

                <section id="cards">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6 passport-img-container">
                                <img src={alem} alt="Plate of Nations Passport" class="img-fluid passport-img" />
                            </div>
                            <div class="col-lg-6">
                                <h2>Alem</h2>
                                <p>Open today: 10:00 AM - 12:00 AM</p>
                                <p>Located: Columbia City</p>
                                <p>Cuisine: Ethiopian</p>
                                <Link role="button" class="btn btn-outline-primary btn-lg px-4" to="../restaurants">Visit Restaurant</Link>

                            </div>
                        </div>
                    </div>
                </section>

                <section id="cards">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6 passport-img-container">
                                <img src={bananasgrill} alt="Plate of Nations Passport" class="img-fluid passport-img" />
                            </div>
                            <div class="col-lg-6">
                                <h2>Bananas Grill</h2>
                                <p>Open today: 11:00 AM - 9:00 PM</p>
                                <p>Located: Columbia City</p>
                                <p>Cuisine: Mediterranean, Somali</p>
                                <Link role="button" class="btn btn-outline-primary btn-lg px-4">Visit Restaurant</Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="cards">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6 passport-img-container">
                                <img src={bangkitchen} alt="Plate of Nations Passport" class="img-fluid passport-img" />
                            </div>
                            <div class="col-lg-6">
                                <h2>Bang Bang Kitchen</h2>
                                <p>Open today: 4:00 PM - 10:00 PM</p>
                                <p>Located: Othello</p>
                                <p>Cuisine: American, Mexican</p>
                                <Link role="button" class="btn btn-outline-primary btn-lg px-4">Visit Restaurant</Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="cards">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6 passport-img-container">
                                <img src={banhmi} alt="Plate of Nations Passport" class="img-fluid passport-img" />
                            </div>
                            <div class="col-lg-6">
                                <h2>Banh Mi Deluxe/Boss Tea</h2>
                                <p>Open today: 10:00 AM - 8:00 PM</p>
                                <p>Located: MLK</p>
                                <p>Cuisine: Vietnamese</p>
                                <Link role="button" class="btn btn-outline-primary btn-lg px-4">Visit Restaurant</Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="cards">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6 passport-img-container">
                                <img src={buathai} alt="Plate of Nations Passport" class="img-fluid passport-img" />
                            </div>
                            <div class="col-lg-6">
                                <h2>Bua 9 Thai</h2>
                                <p>Open today: 11:00 AM - 9:30 PM</p>
                                <p>Located: Columbia City</p>
                                <p>Cuisine: Thai</p>
                                <Link role="button" class="btn btn-outline-primary btn-lg px-4">Visit Restaurant</Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="cards">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6 passport-img-container">
                                <img src={buddhabrud} alt="Plate of Nations Passport" class="img-fluid passport-img" />
                            </div>
                            <div class="col-lg-6">
                                <h2>Buddha Bruddah</h2>
                                <p>Open today: 11:00 AM - 8:00 PM</p>
                                <p>Located: Mount Baker</p>
                                <p>Cuisine: Hawaiian, Thai</p>
                                <Link role="button" class="btn btn-outline-primary btn-lg px-4">Visit Restaurants</Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="cards">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6 passport-img-container">
                                <img src={buathai} alt="Plate of Nations Passport" class="img-fluid passport-img" />
                            </div>
                            <div class="col-lg-6">
                                <h2>Bua 9 Thai</h2>
                                <p>Open today: 11:00 AM - 8:00 PM</p>
                                <p>Located: Mount Baker</p>
                                <Link role="button" class="btn btn-outline-primary btn-lg px-4">Visit Restaurant</Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="cards">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6 passport-img-container">
                                <img src={cafetal} alt="Plate of Nations Passport" class="img-fluid passport-img" />
                            </div>
                            <div class="col-lg-6">
                                <h2>Cafetal Quilombo</h2>
                                <p>Open today: 10:00 AM - 7:00 PM</p>
                                <p>Located: Beacon Hill</p>
                                <Link role="button" class="btn btn-outline-primary btn-lg px-4">Visit Restaurant</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </ul>
        </div>
    );
}
