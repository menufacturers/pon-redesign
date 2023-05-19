import "../assets/styles/Passport.css";
import { Link } from "react-router-dom";
import passport from "../assets/img/passport-2023.png"
import waves from "../assets/img/decorative-elements/white-yellow-waves.png";

export default function Passport() {
    return (
        <div>
            <div class="page-banner passport-banner">
                <div>
                    <h1>Plate of Nations Passport</h1>
                </div>
                <div>
                    <p class="page-description">Travel the world from your plate and create a delicious journey to remember.</p>
                </div>
            </div>
            <section id="passport-overview">
                <div class="container overview-container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 overview-text">
                            <h2>What is the PON Passport?</h2>
                            <p>To commenorate your trip around the world, pick up one of our "Passport" tracker cards!</p>
                            <p>Each restaurant has a unique stamp that you can collect by ordering a meal. What better way to remember your trip around the world than with a <b>special souvenier</b> to record your journey?</p>
                            <p>Collect enough and maybe you'll find some treasures along the way!</p>
                        </div>
                        <div class="col-lg-6 overview-img-container">
                            <img src={passport} alt="Plate of Nations 2023 promotional poster" class="img-fluid overview-img" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="passport-explanation">
                <div class="card-component" style={{ backgroundColor: '#F2C94C', color: 'black' }}>
                    <h2 style={{ textAlign: 'center' }}>How It Works</h2>
                    <div class="exp-img-container">
                        <img src={waves} alt="Decorative waves"></img>
                    </div>
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
                            <button type="button" class="btn btn-link white-btn-link">Digitize <i class="fa-solid fa-arrow-right-long"></i></button>
                        </Link>
                    </div>
                </div>
            </section>
            <section id="giveaways">
                <div class="container">
                    <div class="col-lg">
                        <h2>Giveaways</h2>
                        <p>Throughout the event, we’ll be running daily contests through social media. Enter using <span style={{ color: '#bd242a' }}><b>#PlateofNations2023</b></span> for a chance to win:</p>
                        <span style={{ textIndent: '20px' }}>
                            <li>Free meals from participating PON restaurants.</li>
                            <li>Gift cards to your favorite stores.</li>
                            <li>And limited Plate of Nations merchandise.</li><br></br></span>
                        <p>Also, each stamp collected on your Passport will enter your for a chance to win a prize from our event wrap-up raffle on April 9th!</p>
                        <button type="button" class="btn btn-link red-btn-link">Learn More <i class="fa-solid fa-arrow-right-long"></i></button>
                    </div>
                </div>
            </section>
        </div>
    );
}