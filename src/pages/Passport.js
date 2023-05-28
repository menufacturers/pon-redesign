import "../assets/styles/Passport.css";
import grand_prize from "../assets/img/social-posts/grand-prize.jpg"
import { Link } from "react-router-dom";
import dashes from "../assets/img/decorative-elements/beige-dashes.png"
import passport from "../assets/img/passport-2023.png";
import waves from "../assets/img/decorative-elements/white-yellow-waves.png";
import peas from "../assets/img/decorative-elements/peas-orange.png";

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
                            <img src={dashes} alt="Decorative dashes" class="dashes"></img>
                            <h2>What is the PON Passport?</h2>
                            <p>To commemorate your culinary trip around Southeast Seattle, pick up one of our "Passport" tracker cards!</p>
                            <p>Each restaurant has a unique stamp that you can collect by ordering a meal. What better way to remember your Plate of Nations experience than with a <i>special souvenier</i> to record your journey?</p>
                        </div>
                        <div class="col-lg-6 overview-img-container">
                            <img src={passport} alt="Plate of Nations 2023 promotional poster" class="img-fluid overview-img" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="passport-explanation">
                <div class="card-component" style={{ backgroundColor: '#F2C94C', color: 'black' }}>
                    <h3 style={{ textAlign: 'center' }}>How It Works</h3>
                    <div class="exp-img-container">
                        <img src={waves} alt="Decorative waves"></img>
                    </div>
                    <br></br>
                    <h4><i class="fa-solid fa-fw fa-compass"></i> Visit One of Our Vendors</h4>
                    <p class="explanation-subpoint">Pick up a free physical copy at any <a class="faq-hyperlink" href="https://pon-redesign-24b89.web.app/restaurants" target="_blank" rel="noreferrer"><i>participating location</i></a>.<br></br></p>
                    <h4><i class="fa-solid fa-fw fa-utensils"></i> Collect Stamps with Your Meal</h4>
                    <p class="explanation-subpoint">Each restaurant has a unique stamp that you can collect by purchasing an event-exclusive sample platter.</p>
                    <h4><i class="fa-solid fa-fw fa-gift"></i> Be Entered to Win Giveaways</h4>
                    <p class="explanation-subpoint">Each stamp you collect enters you into giveaways on our socials, and a grand finale raffle at the event's close.</p>
                    <h4><i class="fa-solid fa-fw fa-database"></i> Register Your Passoprt Online</h4>
                    <p class="explanation-subpoint">Create a digital copy of your tracker card so your collection is always on you, and so you may collect your prizes!</p>
                </div>
            </section>
            <section id="passport-portal">
                <div class="container portal-container">
                    <div class="row align-items-stretch">
                        <div class="col-lg-2 peas-container">
                            <img src={peas} alt="Decorative peas" class="img-fluid peas"></img>
                        </div>
                        <div class="col-lg-8 portal-text">
                            <h2>Digitize Your Passport for Convenient Access</h2>
                            <p>Add stamps to your collection even if you forget your card at home—all you need is a valid phone number. Click the link below to register or add stamps to your digital Passport!</p>
                            <Link to="../digital-passport">
                                <button type="button" class="btn btn-link white-btn-link">Digitize <i class="fa-solid fa-arrow-right-long"></i></button>
                            </Link>
                        </div>
                        <div class="col-lg-2 peas-container">
                            <img src={peas} alt="Decorative peas" class="img-fluid peas"></img>
                        </div>
                    </div>
                </div>
            </section>
            <section id="giveaways">
                <div class="container overview-container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 overview-img-container">
                            <img src={grand_prize} alt="Plate of Nations Grand Prize" class="grand-prize-img img-fluid" />
                        </div>
                        <div class="col-lg-6 overview-text giveaway-text">
                            <div class="dashes-container">
                                <img src={dashes} alt="Decorative dashes" class="dashes"></img>
                            </div>
                            <h2>Giveaways</h2>
                            <p>Throughout the event, we’ll be running daily contests through social media. Enter using <a class="hyperlink" href="https://www.instagram.com/explore/tags/plateofnations2023/" target="_blank" rel="noreferrer">#PlateOfNations2023</a> for a chance to win:</p>
                            <span style={{ textIndent: '20px' }}>
                                <li><i class="fa-solid fa-fire"></i> Free meals from participating PON restaurants</li>
                                <li><i class="fa-solid fa-fire"></i> Gift cards to your favorite stores</li>
                                <li><i class="fa-solid fa-fire"></i> And limited Plate of Nations merchandise</li><br></br></span>
                            <p>Each stamp collected on your Passport will also enter you for a chance to win a prize from our event wrap-up raffle on April 9th!</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
