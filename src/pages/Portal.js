import "../assets/styles/Passport.css";

export default function Portal() {
    return (
        <div>
            <section id="portal-intro">
                <div class="container">
                    <div class="col-lg">
                        <h1>Your Digital PON Passport</h1>
                        <p>Link your phone number and unique stamp IDs found at PON restaurants to easily access your Passport anytime and anywhere.</p>
                    </div>
                </div>
            </section>
            <section id="portal-visualizer">
                <div class="card-component">
                    <h3 style={{textAlign:'center'}}>Visualizer</h3>
                    <p>Want to check if you've added all your stamps? Take a look at your collection by using our Digital Passport viewer.</p>
                    <div class="user-input-component">
                        <form action="">
                            <label for="phone">Phone Number</label><br></br>
                            <input type="text" id="phone" name="phone" value=""></input><br></br>
                            <input type="submit" value="Check Stamps"></input>
                        </form>
                    </div>
                    
                    <p>Register a new Stamp</p>
                    
                </div>
            </section>
        </div>
    );
}