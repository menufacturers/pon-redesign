import "../assets/styles/Restaurants.css";

export default function Restaurants() {
    return (
        <div>
            <h1>Hello this is the restaurants page.</h1>
            <ul>
                <li>Search</li>

                <li>Filter + sort</li>
                <li>Restaurant cards: distance, hours, cuisine</li>
                <section id="cards">
                <div class="container">
                    <div class="col-lg-4">
                        <img src="../assets/img/restaurants/alem.png" alt="alem restaurant" class="img-fluid" />
                    </div>
                    <div class="col-lg-4">
                        <img src="../assets/img/restaurants/bananasgrill.png" alt="bgrill restaurant" class="img-fluid" />
                    </div>
                    <div class="col-lg-4">
                        <img src="../assets/img/restaurants/banhmi.png" alt="banhmi restaurant" class="img-fluid" />
                    </div>
                </div>
            </section>
            </ul>
        </div>
    );
}
