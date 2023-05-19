import "../assets/styles/Restaurants.css";
import React, { useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import alem from "../assets/img/restaurants/food/alem.png";
import alemlogo from "../assets/img/restaurants/restaurant-logos/alem-logo.png";
import bananasgrill from "../assets/img/restaurants/food/bananasgrill.png";
import bananasgrill2 from "../assets/img/restaurants/food/bananasgrill2.png";
import bananaslogo from "../assets/img/restaurants/restaurant-logos/bananas-logo.jpeg"
import bangkitchen from "../assets/img/restaurants/food/bangkitchen.png";
import banglogo from "../assets/img/restaurants/restaurant-logos/bang-logo.jpeg"
import banhmi from "../assets/img/restaurants/food/banhmi.png";
import buathai from "../assets/img/restaurants/food/buathai.png";
import buddhabrud from "../assets/img/restaurants/food/buddhabrud.png";
import cafetal from "../assets/img/restaurants/food/cafetal.jpg";
import farah from "../assets/img/vendors/farah-ismail.png"
import SearchBar from "./SearchBar";
import banhmilogo from "../assets/img/restaurants/restaurant-logos/banhmilogo.png";
import buddhalogo from "../assets/img/restaurants/restaurant-logos/buddhalogo.png";
import bualogo from "../assets/img/restaurants/restaurant-logos/bualogo.png";
import cafetalogo from "../assets/img/restaurants/restaurant-logos/cafetal-logo.png";
import smallsamplelogo from "../assets/img/restaurants/restaurant-logos/smallsamplelogo.png";

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
                    <p class="page-description">Explore all participating restaurants and find a world of flavors.</p>
                </div>
            </div>
            <SearchBar />
            {/* <a href="/menu">
            <i class="bi bi-list mobile-menu-icon"></i>
            </a>
            <button className="mobile-menu-icon">
            {searchQuery ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fa fas-bars"></i>
            )}
          </button> */}
            <RestaurantCard
                imgLink={alem}
                imgAlt="Alem food"
                logoImg={alemlogo}
                logoAlt="Alem logo"
                title="Alem"
                cuisine={"Eritrian, Ethiopian"}
                hours="10:00 AM - 12:00 AM"
                location="Columbia City"
                visitLink="../alem"
            />
            <RestaurantCard
                imgLink={bananasgrill}
                imgAlt="Bananas Grill food"
                logoImg={bananaslogo}
                logoAlt="Bananas Grill logo"
                title="Bananas Grill"
                cuisine={"Halal, Mediterranean, Somali"}
                hours="11:00 AM - 9:00 PM"
                location="Columbia City"
                visitLink="../bananasgrill"
            />
            <RestaurantCard
                imgLink={bangkitchen}
                imgAlt="Bang Bang Kitchen food"
                logoImg={banglogo}
                logoAlt="Bang Bang Kitchen logo"
                title="Bang Bang Kitchen"
                cuisine={"American, Mexican, New Mexican"}
                hours="4:00 PM - 10:00 PM"
                location="Othello"
                visitLink="../restaurants"
            />

            <RestaurantCard
                imgLink={banhmi}
                imgAlt="Banh Mi food"
                logoImg={banhmilogo}
                logoAlt="Bang Bang Kitchen logo"
                title="Banh Mi Deluxe/Boss Tea"
                cuisine={"Vietnamese"}
                hours="10:00 AM - 8:00 PM"
                location="MLK"
                visitLink="../restaurants"
            />

            <RestaurantCard
                imgLink={buathai}
                imgAlt="Banh Mi food"
                logoImg={bualogo}
                logoAlt="Bang Bang Kitchen logo"
                title="Bua 9 Thai"
                cuisine={"Thai"}
                hours="11:00 AM - 9:30 PM"
                location="Columbia City"
                visitLink="../restaurants"
            />

            <RestaurantCard
                imgLink={buddhabrud}
                imgAlt="Banh Mi food"
                logoImg={buddhalogo}
                logoAlt="Bang Bang Kitchen logo"
                title="Buddha Bruddah"
                cuisine={"Hawaiian, Thai"}
                hours="11:00 AM - 8:00 PM"
                location="Mount Baker"
                visitLink="../restaurants"
            />

            <RestaurantCard
                imgLink={cafetal}
                imgAlt="Banh Mi food"
                logoImg={cafetalogo}
                logoAlt="Bang Bang Kitchen logo"
                title="Cafetal Quilombo"
                cuisine={"Mexican"}
                hours="10:00 AM - 7:00 PM"
                location="Beacon Hill"
                visitLink="../restaurants"
            />
        </div>
    );
}
