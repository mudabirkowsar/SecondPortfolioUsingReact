import React from 'react'
import { Link } from 'react-router-dom'

function Services() {
  return (
    <div>
    <section class="w3l-servicesblock1 py-5" id="services">
        <div class="container py-md-5 py-4">
            <div class="title-heading-w3 text-center mb-sm-5 mb-4">
                <h5 class="title-small mb-1">What i do?</h5>
                <h3 class="title-style">How I can help your next project</h3>
            </div>
            <div class="w3-services-grids py-lg-4">
                <div class="fea-gd-vv row">
                    <div class="col-lg-3 col-md-6">
                        <div class="feature-gd icon-yellow">
                            <div class="icon">
                                <i class="fas fa-laptop"></i>
                            </div>
                            <div class="icon-info">
                                <a href="#url">Web design<br/> and development </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mt-md-0 mt-4">
                        <div class="feature-gd icon-vilot">
                            <div class="icon">
                                <i class="fas fa-mobile-alt"></i>
                            </div>
                            <div class="icon-info">
                                <a href="#url">Web app<br/> development</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mt-lg-0 mt-md-5 mt-4">
                        <div class="feature-gd icon-blue">
                            <div class="icon">
                                <i class="fab fa-android"></i>
                            </div>
                            <div class="icon-info">
                                <a href="#url">React app<br/> development</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mt-lg-0 mt-md-5 mt-4">
                        <div class="feature-gd icon-red">
                            <div class="icon">
                                <i class="fab fa-php"></i>
                            </div>
                            <div class="icon-info">
                                <a href="#url">Php Web<br/> development</a>
                            </div>
                        </div>
                    </div>
                    {/* <div class="col-lg-3 col-md-6 mt-md-5 mt-4">
                        <div class="feature-gd icon-light-green">
                            <div class="icon">
                                <i class="fab fa-apple"></i>
                            </div>
                            <div class="icon-info">
                                <a href="#url">iOS App<br/> development </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mt-md-5 mt-4">
                        <div class="feature-gd icon-light-blue">
                            <div class="icon">
                                <i class="fas fa-code"></i>
                            </div>
                            <div class="icon-info">
                                <a href="#url">JQuery & Java<br/> programming</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mt-md-5 mt-4">
                        <div class="feature-gd icon-dark-green">
                            <div class="icon">
                                <i class="fas fa-link"></i>
                            </div>
                            <div class="icon-info">
                                <a href="#url">Blockchain<br/> development</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mt-md-5 mt-4">
                        <div class="feature-gd icon-pink">
                            <div class="icon">

<i class="fas fa-code-branch"></i>
                            </div>
                            <div class="icon-info">
                                <a href="#url">.net program<br/> development</a>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div class="text-center mt-5">
                <Link to="/services" class="btn btn-style">Learn More</Link>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Services
