import React from 'react'
import {Link} from 'react-router-dom'

function Hero() {
  return (
    <>
       <section class="w3l-banner py-5" id="home">
        <div class="container py-md-5 py-4">
            <div class="row align-items-center pt-4">
                <div class="col-md-6 banner-left pe-xl-5">
                    <h4>Hi, I'm Mudabir Kowsar </h4>
                    <h3 class="mb-3 mt-1">Developer</h3>
                    <p class="banner-sub me-md-5">I love to work in Web Development.
                        I always try my best to make good Websites.
                    </p>
                    <div class="d-flex align-items-center buttons-banner mt-sm-5 mt-4">
                        <Link to="/about" class="btn btn-style me-2">Hire Me</Link>
                    </div>
                </div>
                <div class="col-md-6">
                </div>
            </div>
        </div>
        {/* <!-- animations icons --> */}
        <div class="icon-effects-w3-1 text-right">
            <img src="assets/images/icon2.png" alt="" class="img-fluid"/>
        </div>
        <div class="icon-effects-w3-2 text-right">
            <img src="assets/images/icon3.png" alt="" class="img-fluid"/>
        </div>
        <div class="icon-effects-w3-3 text-right">
            <img src="assets/images/icon1.png" alt="" class="img-fluid"/>
        </div>
        <div class="icon-effects-w3-4 text-right">
            <img src="assets/images/icon6.png" alt="" class="img-fluid"/>
        </div>
        {/* <!-- //animations icons --> */}
    </section>
    </>
  )
}

export default Hero
