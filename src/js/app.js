'use strict';
import 'bootstrap/dist/js/bootstrap';
import 'owl.carousel2/dist/owl.carousel';
import './nav-slide';

$(function () {

    // Owl Carousel
    $('.carousel-one').owlCarousel({
        loop: true,
        nav: false,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // Navbar Toggler Button
    let navButton = $(".navbar-toggler");
    let navbarDropdown = $(".navbar-nav-dropdown");

    navButton.on("click", function () {
        $(".navbar-toggler").toggleClass("nButton");
        $(".navbar-nav-dropdown").toggleClass("nDropdown");
        $(".navbar-toggler-icon").toggleClass("navbarTogglerIcon")
    });
});