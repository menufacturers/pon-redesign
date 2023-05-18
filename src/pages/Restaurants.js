import "../assets/styles/Restaurants.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import RestaurantInfo from "../components/RestaurantInfo";
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
                    <p class="page-description">Find and explore all participating restaurants here!</p>
                </div>
            </div>
            <SearchBar />
            <a href="/menu">
            <i class="bi bi-list mobile-menu-icon"></i>
            </a>
            <button className="mobile-menu-icon">
            {searchQuery ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fa fas-bars"></i>
            )}
          </button>
            <RestaurantCard
                imgLink={alem}
                imgAlt="Alem food"
                logoImg={alemlogo}
                logoAlt="Alem logo"
                title="Alem"
                cuisine={"Eritrian, Ethiopian"}
                hours="10:00 AM - 12:00 AM"
                location="Columbia City"
                visitLink="../restaurants"
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
                visitLink="../restaurants"
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
            
            <RestaurantInfo
                logoImg={bananaslogo}
                logoAlt="Bananas Grill Logo"
                menuOneImg={bananasgrill}
                menuOneAlt="Picture of sample platter option 1 at Bananas Grill"
                menuOnePrice="25"
                menuOneDesc="Falafel, Hummus & Pita, Dolmas, Vegetarian Sambusas, Rice"
                menuTwoImg={bananasgrill2}
                menuTwoAlt="Picture of sample platter option 1 at Bananas Grill"
                menuTwoPrice="35"
                menuTwoDesc="Dolmas, Falafel, Hummus & Pita, Beef & Lamb Gyro Meat, Grilled Salt and Pepper Lemon Fish, Chicken Shwarma or Chicken Kabob, Rice and Salad"

                restaurantName="Bananas Grill"
                desc="Bananas Grill is a familiy-owned restaurant offering a tasty fusion of American, Mediteranean, and Halal fast food. Attendees not only love Bananas Grill's delicious dishes, but enjoy their warm and friendly service!"
                yearJoined="2011"
                streetAddress="4556 Martin Luther King Jr Way South"
                city="Seattle"
                zipcode="98108"
                mapsUrl="https://www.google.com/maps/place/Bananas+Grill/@47.5620445,-122.2937675,17z/data=!3m2!4b1!5s0x54906a736077c66f:0x72e717a135093847!4m6!3m5!1s0x54906a737dae1fd7:0xb231d5bc31820ced!8m2!3d47.5620445!4d-122.2937675!16s%2Fg%2F1tj45m14"
                phone="(206)-420-4839"
                phoneHtml="tel:(206)-420-4839"
                email="bananasgrillseattle@gmail.com"
                emailHtml="mailto:bananasgrillseattle@gmail.com"
                weekdayHours="11:00am - 7:30pm"
                satHours="11:00am - 7:30pm"
                sunHours="Closed"

                ownerImg={farah}
                ownerAlt="Profile Picture of Farah Isamil"
                ownerName="Farah Ismail"
                story="After working hard, planning and saving for nearly 15 years, Farah Ismail finally opened Bananas Grill restaurant in the Rainier Valley. 'I wanted to fill a need in the community for Halal fast food,' he said. Farah and his family have always had a passion and love for cooking and eating. They love the art of cooking and it brings them joy to see others enjoy their passion. Bananas Grill has high-quality and fresh food, passion, and warm and friendly service."
                story2="The restaurant has a modern, vibrant and comfortable atmosphere that is family-friendly. The menu offers many entrees that include a variety of halal meat options, mouthwatering gyros, and shawarmas, as well as halal hamburgers and cheeseburgers. 'It's a mixture of American, Mediterranean and Halal reflecting my family heritage,' Farah said. Specialty drinks include Somali spiced chai-tea and fruit smoothies, among others. They offer various dessert options including baklava."
                />
        </div>
    );
}
