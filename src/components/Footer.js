import "../assets/styles/Footer.css";

export default function Footer() {
    return (
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <span class="copyright">&copy; 2023 Plate of Nations • All rights reserved</span>
                    </div>
                    <div class="col-md-4">
                    </div>
                    <div class="col-md-4">
                        <a class="socials-icon" href="https://www.facebook.com/plateofnations"><i class="fa-brands fa-square-facebook"></i></a>
                        <a class="socials-icon" href="https://www.linkedin.com/company/plate-of-nations/"><i class="fa-brands fa-linkedin"></i></a>
                        <a class="socials-icon" href="https://www.instagram.com/plateofnations/"><i class="fa-brands fa-square-instagram"></i></a>
                        <a class="socials-icon" href="https://www.tiktok.com/@plateofnations23"><i class="fa-brands fa-tiktok"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
