import RestaurantInfo from '../../components/RestaurantInfo';
import bananasgrill from "../../assets/img/restaurants/food/bananasgrill.png";
import bananasgrill2 from "../../assets/img/restaurants/food/bananasgrill2.png";
import farah from "../../assets/img/vendors/farah-ismail.png"
import farahismail from "../../assets/img/vendors/farah.png";
import smallsamplelogo from "../../assets/img/restaurants/restaurant-logos/smallsamplelogo.png";

export default function BangBangKitchen() {
    return (
        <div>
            <RestaurantInfo
                logoImg={smallsamplelogo}
                logoAlt="Bananas Grill Logo"
                menuOneImg={bananasgrill}
                menuOneAlt="Picture of sample platter option 1 at Bananas Grill"
                menuOnePrice="25"
                menuOneDesc="Falafel, Hummus & Pita, Dolmas, Vegetarian Sambusas, Rice"
                menuTwoImg={bananasgrill2}
                menuTwoAlt="Picture of sample platter option 1 at Bananas Grill"
                menuTwoPrice="35"
                menuTwoDesc="Dolmas, Falafel, Hummus & Pita, Beef & Lamb Gyro Meat, Grilled Salt and Pepper Lemon Fish, Chicken Shwarma or Chicken Kabob, Rice and Salad"

                restaurantName="Bang Bang Kitchen"
                desc="Bananas Grill is a familiy-owned restaurant offering a tasty fusion of American, Mediteranean, and Halal fast food. Attendees not only love Bananas Grill's delicious dishes, but enjoy their warm and friendly service!"
                yearJoined="2011"
                streetAddress="4556 Martin Luther King Jr Way South"
                city="Seattle"
                zipcode="98108"
                mapsUrl={"https://www.google.com/maps/place/Bananas+Grill/@47.5620445,-122.2937675,17z/data=!3m2!4b1!5s0x54906a736077c66f:0x72e717a135093847!4m6!3m5!1s0x54906a737dae1fd7:0xb231d5bc31820ced!8m2!3d47.5620445!4d-122.2937675!16s%2Fg%2F1tj45m14"}
                phone="(206)-420-4839"
                phoneHtml={"tel:(206)-420-4839"}
                email="bananasgrillseattle@gmail.com"
                emailHtml={"mailto:bananasgrillseattle@gmail.com"}
                website={"https://bananagrillseattle.com/"}
                weekdayHours="11:00am - 7:30pm"
                satHours="11:00am - 7:30pm"
                sunHours="Closed"

                ownerImg={farahismail}
                ownerAlt="Profile Picture of Farah Isamil"
                ownerName="Farah Ismail"
                story="After working hard, planning and saving for nearly 15 years, Farah Ismail finally opened Bananas Grill restaurant in the Rainier Valley. 'I wanted to fill a need in the community for Halal fast food,' he said. Farah and his family have always had a passion and love for cooking and eating. They love the art of cooking and it brings them joy to see others enjoy their passion. Bananas Grill has high-quality and fresh food, passion, and warm and friendly service."
                story2="The restaurant has a modern, vibrant and comfortable atmosphere that is family-friendly. The menu offers many entrees that include a variety of halal meat options, mouthwatering gyros, and shawarmas, as well as halal hamburgers and cheeseburgers. 'It's a mixture of American, Mediterranean and Halal reflecting my family heritage,' Farah said. Specialty drinks include Somali spiced chai-tea and fruit smoothies, among others. They offer various dessert options including baklava."
                />
        </div>
    );
}