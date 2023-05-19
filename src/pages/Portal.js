import "../assets/styles/Portal.css";
import sample_passport from "../assets/img/banners/sample-passport.png"
import { Link } from "react-router-dom";



export default function Portal() {
    return (
        <div>
            <div class="passport-banner">
                <div class="container hero-container">
                    <h1 class="intro-text">Your Digital PON Passport</h1>
                    <p class="lead">Link your phone number and unique stamp IDs found at PON restaurants to easily access your Passport anytime and anywhere.</p>
                </div>
            </div>
            
            <section class="portal-visualizer">
                <div class="card-component">
                    <h3 style={{textAlign:'center'}}>Passport Viewer</h3>
                    <p>Want to check if you've added all your stamps? Take a look at your collection by using our Digital Passport viewer.</p>
                    
                    <div class="user-input-component">
                        <form action="">
                            <input class="phone-input" name="phone" placeholder="{203) 555-0123"></input><br></br>
                            <button type="button" onclick="imageShow()" class ="check-stamp-button">Check Stamps</button>
                        </form>
                    </div>
                    <div id="sample-passport-viz">
                        <img src={sample_passport} alt="Plate of Nations Sample Passport" loading="lazy"/>
                    </div>
                </div>
            </section>
        </div>
    );
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