import "../assets/styles/Passport.css";
import { Link } from "react-router-dom";

// was already commented -> import passport from "../assets/img/passport-2023.png";

export default function Passport() {
    return (
        <div>
            <div class="passport-banner">
                <div class="container hero-container">
                    <h1 class="intro-text">The PON Passport</h1>
                    <p class="lead">Travel the world from your plate and create a delicious journey to remember.</p>
                </div>
            </div>
            <section id="what-is-passport">
                <div class="container">
                    <div class="col-lg">
                        <h2>What is the PON Passport?</h2>
                        <p>To commenorate your trip around the world, pick up one of our "Passport" tracker cards!</p>
                        <p>Each restaurant has a unique stamp that you can collect by ordering a meal. What better way to remember your trip around the world than with a <b>special souvenier</b> to record your journey?</p>
                        <p>Collect enough and maybe you'll find some treasures along the way!</p>
                    </div>
                </div>
            </section>
            <section id="passport-explanation">
                <div class="card-component" style={{backgroundColor:'#f7f4e3', color:'black'}}>
                    <h2 style={{textAlign:'center'}}>How the Plate of Nations Passport Works</h2>
                    <br></br>

                    <h4><i class="fa-solid fa-fw fa-compass"></i> Visit One of Our Vendors</h4>
                    <p class="explanation-subpoint">Pick up a free physical copy at any participating location.<br></br>Restaurants Link</p>
                    <h4><i class="fa-solid fa-fw fa-utensils"></i> Collect Stamps with Your Meal</h4>
                    <p class="explanation-subpoint">Each restaurant restaurant has a unique stamp that you can collect by purchasing an event-exclusive sample platter.</p>
                    <h4><i class="fa-solid fa-fw fa-gift"></i> Be Entered to Win Giveaways</h4>
                    <p class="explanation-subpoint">Each stamp you collect enters you into giveaways on our socials, and a grand finale raffle at the event's close.</p>
                    <h4><i class="fa-solid fa-fw fa-database"></i> Register Your Passoprt Online</h4>
                    <p class="explanation-subpoint">Create a digital copy of your tracker card so your collection is always on you, and so you may collect your prizes!</p>
                    
                </div>
            </section>
            <section id="passport-portal">
                <div class="container">
                    <div class="col-lg-portal">
                        <h2>Digitize Your PON Passport for Convenient Access</h2>
                        <p>Add stamps to your collection even if you forget your card at home. All you need is a valid phone number.</p>
                        <p>Click the link below to register your Passport, or add stamps to your existing digital Passport.</p>
                        <Link to='../digital-passport'>
                            <button type="button" class="btn btn-link white-btn-link">Digitize<i class="fa-solid fa-arrow-right-long"></i></button>
                        </Link>
                    </div>
                </div>
            </section>
            <section id="giveaways">
                <div class="container">
                    <div class="col-lg">
                        <h2>Giveaways</h2>
                        <p>Throughout the event, we’ll be running daily contests through social media. Enter using <span style={{color:'#bd242a'}}><b>#PlateofNations2023</b></span> for a chance to win:</p>
                        <span style={{textIndent: '20px'}}>
                            <li>Free meals from participating PON restaurants.</li>
                            <li>Gift cards to your favorite stores.</li>
                            <li>And limited Plate of Nations merchandise.</li><br></br></span>
                        <p>Also, each stamp collected on your Passport will enter your for a chance to win a prize from our event wrap-up raffle on April 9th!</p>
                        <button type="button" class="btn btn-link red-btn-link">Learn More<i class="fa-solid fa-arrow-right-long"></i></button>
                    </div>
                </div>
            </section>
        </div>
    );
    
    function toggleText() {
        var x = document.getElementById("text-test");
        if (x.style.display === "none") {
            x.style.display = "inline";
        } else {
            x.style.display = "none";
        }
    }

}


        //                         <Link role="button" class="btn btn-primary btn-lg px-4 gap-3" to="../portal">Digitize</Link>

    /*
                        <Link role="button" class="btn btn-primary btn-lg px-4 gap-3" to="../portal">Digitize</Link>


                        <h2>How the PON Passport Works.</h2>
                        <span id="less-text">
                            <p>Visit our vendors to pick one up.</p>
                            <p>Collect stamps at PON restaurants.</p>
                            <p>Be entered to win daily contests.</p>
                            <p>Register your Passport online.</p>
                        </span>
                        <span id="more-text">
                            <p>Visit our vendors to pick one up.</p>
                            <ul>FREE Physical Passports available at all participating vendors</ul>
                            <p>Collect stamps at PON restaurants.</p>
                            <ul>Each restaurant has a unique stamp that you can collect by ordering a meal set.</ul>
                            <ul>Collect as many stamps as you can!</ul>
                            <p>Be entered to win daily contests.</p>
                            <ul>The stamps you collect will enter you into daily giveaways hosted on our social media accounts.</ul>
                            <ul>Additional raffle will be drawn at the end of the event for prizes.</ul>
                            <p>Register your Passport online.</p>
                            <ul>Keeps your card accessible electronically.</ul>
                            <ul>Automatically notifies you if you win one of our giveaways.</ul>
                        </span>

                        <button onclick="toggleText()" id="myBtn">Read more</button>

                        <p>Visit our vendors to pick one up.
                            <span id="read-more">
                                <p>FREE Physical Passports available at all participating vendors</p>
                            </span>
                        </p>
                        <p>Collect stamps at PON restaurants.
                            <span id="read-more">
                                <p>Each restaurant has a unique stamp that you can collect by ordering a meal set.</p>
                                <p>Collect as many stamps as you can!</p>
                            </span>
                        </p>
                        <p>Be entered to win daily contests.
                            <span id="read-more">
                                <p>The stamps you collect will enter you into daily giveaways hosted on our social media accounts.</p>
                                <p>Additional raffle will be drawn at the end of the event for prizes.</p>
                            </span>
                        </p>
                        <p>Register your Passport online.
                            <span id="read-more">
                                <p>Keeps your card accessible electronically.</p>
                                <p>Automatically notifies you if you win one of our giveaways.</p>
                            </span>
                        </p>
    */

    /*
    return (
        <div>
            <h1>Hello this is the passport page.</h1>
            <ul>
                <li>Passport image</li>
                <li>Brief introduction</li>
                <li>Steps</li>
                <li>Portal</li>
                <li>Giveaways information + example images</li>
            </ul>
        </div>
    );
    */


/*
function readMore() {
    var lessText = document.getElementById("less-text"); //dots
    var moreText = document.getElementById("more-text"); //more
    var btnText = document.getElementById("myBtn");
  
    if (lessText.style.display === "none") {
        lessText.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        lessText.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
  }*/
