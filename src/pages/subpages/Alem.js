import RestaurantInfo from '../../components/RestaurantInfo';
import alemshare25 from "../../assets/img/restaurants/food/alem-share-25.jpeg";
import alemshare35 from "../../assets/img/restaurants/food/alem-share-35.jpeg";
import alemowner from "../../assets/img/vendors/alem-owner.png"
import smallsamplelogo from "../../assets/img/restaurants/restaurant-logos/smallsamplelogo.png";

export default function Alem() {
    return (
        <div>
            <RestaurantInfo
                logoImg={smallsamplelogo}
                logoAlt="Bananas Grill Logo"
                menuOneImg={alemshare25}
                menuOneAlt="Picture of sample platter option 1 at Alem"
                menuOnePrice="25"
                menuOneDesc="Chicken Tibs, Spicy Chicken OR Veggie Platter with Injera Bread / Jenena Buna (Ethiopian Coffee Tray), Wine, Beer, OR Soft Drink"
                menuTwoImg={alemshare35}
                menuTwoAlt="Picture of sample platter option 2 at Alem"
                menuTwoPrice="35"
                menuTwoDesc="Brown or White Lentils, Cabbage, Spinach, Split Peas, Spicy Lamb, Beef Curry, and Kifto with Injera Bread / An Order of Shiro - Slow Cooked Ground Split Peas Slowly Cooked in Red Onions, Tomatoes and Garlic"
                restaurantName="Alem"
                desc="Alem Restaurant bridges habesha cuisine to South Seattle through their finest Ethiopian and Eritrean foods."
                yearJoined="2023"
                streetAddress="4423 Rainier Avenue South"
                city="Seattle"
                zipcode="98118"
                mapsUrl={"https://www.google.com/maps/dir//4423+Rainier+Ave+S,+Seattle,+WA+98118/@47.5635331,-122.3583322,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x54906a7295ce3d37:0xc7820a9ef5ba9ce8!2m2!1d-122.2882925!2d47.5635544"}
                phone="(206)-723-3587"
                phoneHtml="tel:206-723-3587"
                email="alemrestaurants@gmail.com"
                emailHtml="mailto:alemrestaurants@gmail.com"
                website={"https://alemrestaurant.com/"}
                weekdayHours="10:00 AM - 12:00 AM"
                satHours="10:00 AM - 2:00 AM"
                sunHours="10:00 AM - 12:00 AM"

                ownerImg={alemowner}
                ownerAlt="Profile Picture of Farah Isamil"
                ownerName="Alem Owner"
                story="Welcome to Alem Restaurant, your bridge to habesha cuisine which is located at Rainier Ave south Seattle, with our finest Ethiopian and Eritrean foods. We emphasize on the fresh ingredients imported directly from our hometown guaranteeing the top notch food experience for you and your friends and family."
                story2="With the most experienced chefs in our yard, we put our heart and soul in providing you with the finest Ethiopian and Eritrean Food your taste buds will ever experience."
                />
        </div>
    );
}