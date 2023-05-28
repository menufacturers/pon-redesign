import React, { useState } from "react";
import "../assets/styles/Portal.css";
import sample_passport from "../assets/img/banners/sample-passport.png";
import { Link } from "react-router-dom";

export default function Portal() {
    const [display, setDisplay] = useState(false);

    function toggleImage() {
        setDisplay((prevDisplay) => !prevDisplay);
    }

    return (
        <div>
            <div className="passport-banner">
                <div className="container hero-container">
                    <h1 className="intro-text">Your Digital PON Passport</h1>
                    <p className="lead">
                        Link your phone number and unique stamp IDs found at PON restaurants to easily access your Passport anytime and anywhere.
                    </p>
                </div>
            </div>

            <section className="portal-visualizer">
                <div className="card-component">
                    <h3 style={{ textAlign: "center" }}>Passport Viewer</h3>
                    <p>
                        Want to check if you've added all your stamps? Take a look at your collection by using our Digital Passport viewer.
                    </p>

                    <div className="user-input-component">
                        <form action="">
                            <input className="phone-input" name="phone" placeholder="(203) 555-0123" />
                            <br />
                            <button type="button" onClick={toggleImage} className="check-stamp-button">
                                Check Stamps
                            </button>
                        </form>
                        {display && <img id="sample-passport-viz" src={sample_passport} alt="Plate of Nations Sample Passport" loading="lazy" />}
                    </div>
                </div>
            </section>
        </div>
    );
}


/*
import "../assets/styles/Portal.css";
import sample_passport from "../assets/img/banners/sample-passport.png"
import { Link } from "react-router-dom";

export default function Portal() {
    return (
        <div>
            <div class="page-banner passport-banner">
                <div>
                    <h1>Your Digital PON Passport</h1>
                </div>
                <div>
                    <p class="page-description">Link your phone number and unique stamp IDs found at PON restaurants to easily access your Passport anytime and anywhere.</p>
                </div>
            </div>
            
            <section class="portal-visualizer">
                <div class="card-component">
                    <h3 style={{textAlign:'center'}}>Passport Viewer</h3>
                    <p>Want to check if you've added all your stamps? Take a look at your collection through our Digital Passport viewer.</p>
                    
                    <div class="user-input-component">
                        <form action="">
                            <input class="phone-input" name="phone" placeholder="{203) 555-0123"></input><br></br>
                            <button type="button" onClick={this.imageShow()} class ="check-stamp-button">Check Stamps</button>
                        </form>
                        <img id="sample-passport-viz" src={sample_passport} alt="Plate of Nations Sample Passport" loading="lazy"/>
                        
                    </div>     
                </div>
            </section>
        </div>
    );
}

var display = 0;
var div = document.getElementById("sample-passport-viz");

function imageShow() {
    if(display == 1){
        div.style.display = "block";
        display = 0;
    } else {
        div.style.display = "none";
        display = 1;
    }
    console.log(div);
}

/*
<input class="check-stamp-button" type="submit" value="Check Stamps"></input>

Line 21: TypeError: Cannot read properties of null (reading 'style')
                    <script type="module">
                        function imageShow() {
                            document.getElementById('sample-passport-viz').style.display = "block"    
                        }
                    </script>       

*/

