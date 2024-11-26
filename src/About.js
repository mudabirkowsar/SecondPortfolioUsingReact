import React from 'react'

function About() {
  return (
    <div>
       <section class="w3l-aboutblock1 pt-lg-5 pt-2 pb-5" id="about">
        <div class="container py-md-5 py-4">
            <div class="row align-items-center">
                <div class="col-lg-4">
                    <div class="position-relative">
                        <img src="assets/images/about.jpg" alt="" class="radius-image img-fluid"/>
                    </div>
                </div>
                <div class="col-lg-8 ps-lg-5 mt-lg-0 mt-5">
                    <h5 class="title-small mb-1">My Intro</h5>
                    <h3 class="title-style">About Me</h3>
                    <p class="mt-3">Hi, I'm Mudabir, a passionate full-stack web developer and B.Tech Computer Science student at GNA University. I specialize in creating dynamic, user-friendly web applications using technologies like React, Node.js, Express.js, and MongoDB. With a focus on solving real-world problems, I aim to deliver scalable and impactful solutions through my work. I'm constantly learning and growing, striving to transform innovative ideas into successful digital experiences. Let's collaborate and bring ideas to life!.</p>
                    <div class="my-info mt-md-5 mt-4">
                        <ul class="single-info">
                            <li class="name-style">Name</li>
                            <li>:</li>
                            <li>
                                <p>Mudabir Kowsar</p>
                            </li>
                        </ul>
                        <ul class="single-info">
                            <li class="name-style">Age</li>
                            <li>:</li>
                            <li>
                                <p>21 Years</p>
                            </li>
                        </ul>
                        <ul class="single-info">
                            <li class="name-style">From</li>
                            <li>:</li>
                            <li>
                                <p>Kulgam Kashmir</p>
                            </li>
                        </ul>
                        <ul class="single-info">
                            <li class="name-style">Email</li>
                            <li>:</li>
                            <li>
                                <p><a href="mailto: khandaymudabir@mail.com">khandaymudabir@gmail.com</a></p>
                            </li>
                        </ul>
                    </div>
                    <a href="https://drive.google.com/file/d/1_xF3JhC1YCbFq-dh0vJUJzryvF0uFKuw/view?usp=sharing" class="btn btn-style mt-5">Download CV</a>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default About
