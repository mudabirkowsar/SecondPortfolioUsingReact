import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <footer class="footer-w3ls text-center py-5">
        <div class="container pt-4">
            <div class="mx-auto raman" >
                <Link href="/home" class="footer-logo py-1">
                    <i class="fas fa-bold"></i>.
                </Link>
                <p class="mt-4 text-white">Crafting innovative solutions, one line of code at a time."</p>
                <div class="social-icons-main mt-4 pb-3">
                    <ul class="social-icons3">
                        {/* <li>
                            <a href="#facebook">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#twitter">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </li> */}
                        <li>
                            <a href="https://www.linkedin.com/in/mudabir-kowsar-34783a256/"  target='_blank'>
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/mudabirkowsar" target='_blank'>
                                <i class="fab fa-github-alt"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/xain_khanday?igsh=bXQxaW9ocmF6aDRu"  target='_blank'>
                                <i class="fab fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <!-- copyright --> */}
            <p class="copy-right-w3 text-white mt-5 pt-4">© 2021 Biodata. All rights reserved | Design by
                <a href="http://.com" target="_blank"> Mudabir Kowsar Khanday</a>
            </p>
        </div>
    </footer>
    </div>
  )
}

export default Footer
