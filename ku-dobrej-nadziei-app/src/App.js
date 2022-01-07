import React, { useRef } from 'react';
import logo from './logo.svg';

import facebook from './fonts/facebook-f-brands.svg';
import instagram from './fonts/instagram-brands.svg';
import youtube from './fonts/youtube-brands.svg';

import './zglobal.scss';
import pattern_6 from './images/pattern-6.jpg';
import './bootstrap/css/bootstrap.min.css';
import './fonts/Whyte-Bold.ttf';
import './fonts/Whyte-Extra-Light.ttf';
import './fonts/Whyte-Heavy.ttf';
import './fonts/Whyte-Light.ttf';
import './fonts/SportingGrotesque-Bold.otf';
import './fonts/SportingGrotesque-Regular.otf';
import GoogleFontLoader from 'react-google-font-loader';

import emailjs from 'emailjs-com';

export default class App extends React.Component {

    //jak zaimportować bootstrapa.js
    //jak zaimportować google-fonty -- zrobione
    //jak zaimportować font-awesome
    //jak zaimportować lord-icon

    voluntarySave(e) {
        e.preventDefault();

        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
        emailjs.sendForm('gmail', 'template_a9471dq', e.target, 'user_i1rz2myj1AnqyRFrINi2V')
            .then((result) => {
                window.location.reload()
            }, (error) => {
                console.log(error.text);
            });
    }

    handleNextClick() {
        const btn_intro_section = document.querySelector('.btn-intro-section');
        const btn_intro = document.querySelector('#btn-intro');

        btn_intro.classList.add("active");

        const hide_class = document.querySelector(".hide");
        hide_class.setAttribute('style', 'display: flex;');

        setTimeout(function () {
            btn_intro_section.remove();
            const logo = document.querySelector('.logo');
            const bg_top = document.querySelector('.bg-top');
            const main_container = document.querySelector('.main-container');

            logo.remove();
            bg_top.classList.add("moving");
            setTimeout(function () {
                main_container.setAttribute('style', 'animation-play-state: paused;');
                const menu = document.querySelector('.menu');
                menu.setAttribute('style', 'display: flex;');
                bg_top.setAttribute('style', 'background-image: none; background-color: transparent; border-color: #000000;');
            }, 2000);
        }, 800);
    }

    hideHiddenMenu() {
        const hide_class = document.querySelector(".hide");
        hide_class.setAttribute('style', 'display: flex;');


        const menu_hidden_img = document.querySelector("#menu-hidden-img");
        menu_hidden_img.setAttribute('style', 'display: none;');

        const menu_hidden_left = document.querySelector(".menu-hidden-left");
        menu_hidden_left.classList.add("hide-menu-hidden-left");

        const menu_hidden_right = document.querySelector(".menu-hidden-right");
        menu_hidden_right.classList.add("hide-menu-hidden-right");

        setTimeout(function () {
            menu_hidden_left.classList.remove("show-menu-hidden-left");
            menu_hidden_right.classList.remove("show-menu-hidden-right");
            menu_hidden_left.setAttribute('style', 'display: none;');
            menu_hidden_right.setAttribute('style', 'display: none;');
        }, 1000);
    }

    showHiddenMenu() {

        const bg_top = document.querySelector('.bg-top');

        const menu_hidden_right = document.querySelector(".menu-hidden-right");

        if (document.querySelector(".show-menu-hidden-right") == null) {
            menu_hidden_right.classList.add("show-menu-hidden-right");
            menu_hidden_right.classList.remove("hide-menu-hidden-right");
            menu_hidden_right.setAttribute('style', 'display: flex;');

            const menu_hidden_left = document.querySelector(".menu-hidden-left");
            menu_hidden_left.classList.add("show-menu-hidden-left");
            menu_hidden_left.classList.remove("hide-menu-hidden-left");
            menu_hidden_left.setAttribute('style', 'display: flex;');

            //bg_top.classList.add("border-line");

            setTimeout(function () {
                const menu_hidden_img = document.querySelector("#menu-hidden-img");
                menu_hidden_img.setAttribute('style', 'display: block;');
            }, 1000);

            const hide_class = document.querySelector(".hide");
            hide_class.setAttribute('style', 'display: none;');
        } else {
            const hide_class = document.querySelector(".hide");
            hide_class.setAttribute('style', 'display: flex;');


            const menu_hidden_img = document.querySelector("#menu-hidden-img");
            menu_hidden_img.setAttribute('style', 'display: none;');

            const menu_hidden_left = document.querySelector(".menu-hidden-left");
            menu_hidden_left.classList.add("hide-menu-hidden-left");

            const menu_hidden_right = document.querySelector(".menu-hidden-right");
            menu_hidden_right.classList.add("hide-menu-hidden-right");

            setTimeout(function () {
                menu_hidden_left.classList.remove("show-menu-hidden-left");
                menu_hidden_right.classList.remove("show-menu-hidden-right");
                menu_hidden_left.setAttribute('style', 'display: none;');
                menu_hidden_right.setAttribute('style', 'display: none;');
            }, 1000);
        }

    }


    render() {
        //   return (
        //     <div classNameName="App">
        //       <header classNameName="App-header">
        //         <img src={logo} className="App-logo" alt="logo" />
        //         <p>
        //           Edit <code>src/App.js</code> and save to reload.
        //         </p>
        //         <a
        //           className="App-link"
        //           href="https://reactjs.org"
        //           target="_blank"
        //           rel="noopener noreferrer"
        //         >
        //           Learn React
        //         </a>
        //       </header>
        //     </div>
        //   );


        return (

            <div className="main-container">
                <GoogleFontLoader
                    fonts={[
                        {
                            font: 'Roboto',
                            weights: [400, '400i', 900, ],
                        },
                        {
                            font: 'Lora',
                            weights: [400, 700],
                        },
                    ]}
                    subsets={['cyrillic-ext', 'greek']}
                />
                <div>
                    <div className="bg-top">
                        <div className="menu-hidden">
                            <div className="menu-hidden-left" >
                                <img id="menu-hidden-img" src={pattern_6} width="100%" height="100%"
                                />
                            </div>
                            <div className="menu-hidden-right"  >
                                <div className="menu-hidden-right-main">
                                    <ul>
                                        <li><a>O NAS</a></li>
                                        <li><a>OSOBY POTRZEBUJĄCE</a></li>
                                        <li><a>WOLONTARIAT</a></li>
                                        <li><a>WSPÓŁPRACA</a></li>
                                        <li><a>GABINET</a></li>
                                        <li><a>GALERIA</a></li>
                                        <li><a>JAK POMÓC NASZYM PODOPIECZNYM?</a></li>
                                    </ul>
                                    <lord-icon id="menu-hidden-button-2" src="https://cdn.lordicon.com/uzrqzyei.json"
                                        trigger="hover" colors="primary:#f2999d,secondary:#08a88a" onClick={this.hideHiddenMenu}>

                                    </lord-icon>
                                </div>
                            </div>
                        </div>
                        <div className="menu">
                            <div className="menu-logo" height="20vh;">
                                FUNDACJA POMOGĘ CI
                            </div>
                            <div className="menu-left">
                                <ul>
                                    <li>O NAS</li>
                                    <li>WOLONTARIAT</li>
                                    <li>WSPÓŁPRACA</li>
                                </ul>
                                <lord-icon id="menu-hidden-button" src="https://cdn.lordicon.com/uzrqzyei.json" trigger="morph"
                                    colors="primary:#000000,secondary:#08a88a" onClick={this.showHiddenMenu}>
                                </lord-icon>
                            </div>
                        </div>
                        <div className="logo">Fundacja Pomogę Ci</div>
                    </div >

                    <div className="btn-intro-section">
                        <a id="btn-intro" className="" onClick={this.handleNextClick}>DALEJ</a>
                    </div>
                </div >
                <div className="hide">
                    <div className="content">
                        <div className="section-intro">
                            <div className="section-intro-text">
                                <div>Jestem</div>
                                <div>po to by</div>
                                <div>&lt;ci pomóc&gt;</div>
                            </div>

                            <div>Dowiedz się w jaki sposób!</div>
                        </div>
                        <div className="section-index">
                            <div>
                                /1
                                <a href="#first-index">STATUT</a>
                            </div>

                            <div>
                                /2
                                <a href="#second-index">WYDARZENIA</a>
                            </div>
                            <div>
                                /3
                                <a href="#third-index">DZIAŁALNOŚĆ</a>
                            </div>
                        </div>
                        <div className="section-galery">
                            <div className="galery-content">
                                <div className="left">
                                    <div className="double"></div>
                                    <div className="bg-salmon single"></div>
                                    <div className="single"></div>
                                    <div className="bg-dark-blue single"></div>
                                    <div className="double"></div>
                                </div>
                                <div className="middle">
                                    <div className="single"></div>
                                    <div className="double first img"></div>
                                    <div className="double">
                                        <div className="single bg-salmon small-width" id="fl1"></div>
                                    </div>
                                    <div className="double second img cb">
                                        <div className="single bg-salmon small-width"></div>
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="double third img">
                                        <div className="single bg-salmon small-width"></div>
                                    </div>
                                    <div className="single">
                                        <div className="bg-dark-blue single small-width fr"></div>
                                    </div>
                                    <div className="double fourth img cb"></div>
                                    <div className="single">
                                        <div className="bg-dark-blue single small-width fr"></div>
                                    </div>
                                    <div className="single bg-salmon cb"></div>

                                </div>
                            </div>
                        </div>

                        <div className="section-statut">
                            <div id="first-index">
                                <header>01</header>
                                <div className="content">
                                    <header>Nasz statut </header>
                                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel neque et nisl
                                        ultricies eleifend. In ex ante, euismod a luctus at, tincidunt in massa. Mauris ipsum
                                        massa, euismod in volutpat non, ornare vel velit. Nam vestibulum fringilla quam, non
                                        ultrices dolor posuere in. Fusce sollicitudin metus eget odio consequat, tempus faucibus
                                        orci pharetra. Etiam porta libero a lobortis faucibus. Nullam tempus id neque sit amet
                                        feugiat. Praesent viverra sapien vitae massa viverra, et euismod purus elementum. Ut
                                        imperdiet viverra tellus sed aliquam. Vestibulum libero neque, pellentesque quis
                                        faucibus in, varius nec nisi. Ut cursus viverra sodales. Praesent iaculis mattis dui, ut
                                        tincidunt velit varius hendrerit. Nam eu turpis eu neque suscipit vulputate sed ut
                                        turpis. Proin ut risus magna. Nulla ac justo nec neque maximus lobortis. Curabitur ac
                                        quam eu arcu fermentum laoreet.</div>
                                </div>
                            </div>
                            <div id="second-index">
                                <header>02</header>
                                <div className="content">
                                    <header>Wydarzenia</header>
                                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel neque et nisl
                                        ultricies eleifend. In ex ante, euismod a luctus at, tincidunt in massa. Mauris ipsum
                                        massa, euismod in volutpat non, ornare vel velit. Nam vestibulum fringilla quam, non
                                        ultrices dolor posuere in. Fusce sollicitudin metus eget odio consequat, tempus faucibus
                                        orci pharetra. Etiam porta libero a lobortis faucibus. Nullam tempus id neque sit amet
                                        feugiat. Praesent viverra sapien vitae massa viverra, et euismod purus elementum. Ut
                                        imperdiet viverra tellus sed aliquam. Vestibulum libero neque, pellentesque quis
                                        faucibus in, varius nec nisi. Ut cursus viverra sodales. Praesent iaculis mattis dui, ut
                                        tincidunt velit varius hendrerit. Nam eu turpis eu neque suscipit vulputate sed ut
                                        turpis. Proin ut risus magna. Nulla ac justo nec neque maximus lobortis. Curabitur ac
                                        quam eu arcu fermentum laoreet.</div>
                                </div>
                            </div>
                            <div id="third-index">
                                <header>03</header>
                                <div className="content">
                                    <header>Działalność</header>
                                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel neque et nisl
                                        ultricies eleifend. In ex ante, euismod a luctus at, tincidunt in massa. Mauris ipsum
                                        massa, euismod in volutpat non, ornare vel velit. Nam vestibulum fringilla quam, non
                                        ultrices dolor posuere in. Fusce sollicitudin metus eget odio consequat, tempus faucibus
                                        orci pharetra. Etiam porta libero a lobortis faucibus. Nullam tempus id neque sit amet
                                        feugiat. Praesent viverra sapien vitae massa viverra, et euismod purus elementum. Ut
                                        imperdiet viverra tellus sed aliquam. Vestibulum libero neque, pellentesque quis
                                        faucibus in, varius nec nisi. Ut cursus viverra sodales. Praesent iaculis mattis dui, ut
                                        tincidunt velit varius hendrerit. Nam eu turpis eu neque suscipit vulputate sed ut
                                        turpis. Proin ut risus magna. Nulla ac justo nec neque maximus lobortis. Curabitur ac
                                        quam eu arcu fermentum laoreet.</div>
                                </div>
                            </div>
                        </div>
                        <div className="office-img"></div>
                        <div id="section-events">
                            <header>Nasz Gabinet</header>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel neque et nisl ultricies
                                eleifend. In ex ante, euismod a luctus at, tincidunt in massa. Mauris ipsum massa, euismod in
                                volutpat non, ornare vel velit. Nam vestibulum fringilla quam, non ultrices dolor posuere in.
                                Fusce sollicitudin metus eget odio consequat, tempus faucibus orci pharetra. Etiam porta libero
                                a lobortis faucibus. Nullam tempus id neque sit amet feugiat. Praesent viverra sapien vitae
                                massa viverra, et euismod purus elementum. Ut imperdiet viverra tellus sed aliquam. Vestibulum
                                libero neque, pellentesque quis faucibus in, varius nec nisi. Ut cursus viverra sodales.
                                Praesent iaculis mattis dui, ut tincidunt velit varius hendrerit. Nam eu turpis eu neque
                                suscipit vulputate sed ut turpis. Proin ut risus magna. Nulla ac justo nec neque maximus
                                lobortis. Curabitur ac quam eu arcu fermentum laoreet.
                            </div>
                        </div>
                        <div className="section-activity activity-1">
                            <header>Wolontariat</header>
                            <div className="container">
                                <div className="">
                                    <form  className="px-4 py-3" onSubmit={this.voluntarySave}>
                                        <div className="form-group">
                                            <label htmlFor="exampleDropdownFormEmail1">ADRES E-MAIL</label>
                                            <input id="voluntary-1" name="voluntary-1" type="email" className="form-control exampleDropdownFormEmail1" placeholder="EMAIL@EXAMPLE.COM" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleDropdownFormPassword1">IMIĘ</label>
                                            <input id="voluntary-2" name="voluntary-2" type="text" className="form-control exampleDropdownFormPassword1" placeholder="IMIĘ" />
                                        </div>
                                        <button type="submit" className="btn btn-danger btn-round rounded-div">ZAPISZ</button>
                                    </form>
                                    <div className="dropdown-divider"></div>
                                </div>
                            </div>
                        </div>
                        <div className="section-activity activity-2">
                            <header>Współpraca</header>
                            <div className="container">
                                <div className="">
                                    <form className="px-4 py-3">
                                        <div className="form-group">
                                            <label htmlFor="exampleDropdownFormEmail1">ADRES E-MAIL</label>
                                            <input type="email" className="form-control exampleDropdownFormEmail1" placeholder="EMAIL@EXAMPLE.COM" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleDropdownFormPassword1">HASŁO</label>
                                            <input type="password" className="form-control exampleDropdownFormPassword1" placeholder="HASŁO" />
                                        </div>
                                        <button type="submit" className="btn btn-danger btn-round rounded-div">ZAPISZ</button>
                                    </form>
                                    <div className="dropdown-divider"></div>
                                </div>
                            </div>
                        </div>
                        <div className="section-activity activity-3">
                            <header>Osoby potrzebujące</header>
                            <div className="container">
                                <div className="">
                                    <form className="px-4 py-3">
                                        <div className="form-group">
                                            <label htmlFor="exampleDropdownFormEmail1">ADRES E-MAIL</label>
                                            <input type="email" className="form-control exampleDropdownFormEmail1" placeholder="EMAIL@EXAMPLE.COM" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleDropdownFormPassword1">HASŁO</label>
                                            <input type="password" className="form-control exampleDropdownFormPassword1" placeholder="HASŁO" />
                                        </div>

                                        <button type="submit" className="btn btn-danger btn-round rounded-div">ZAPISZ</button>
                                    </form>
                                    <div className="dropdown-divider"></div>
                                </div>
                            </div>
                        </div>
                        <div className="section-help">
                            <div>
                                <header>Jak pomóc naszym podopiecznym?</header>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel neque et nisl ultricies
                                eleifend. In ex ante, euismod a luctus at, tincidunt in massa. Mauris ipsum massa, euismod in
                                volutpat non, ornare vel velit. Nam vestibulum fringilla quam, non ultrices dolor posuere in.
                                Fusce sollicitudin metus eget odio consequat, tempus faucibus orci pharetra. Etiam porta libero
                                a lobortis faucibus.
                            </div>
                            <div>
                                <header>Przekaż 1% podatku</header>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel neque et nisl ultricies
                                eleifend. In ex ante, euismod a luctus at, tincidunt in massa.
                            </div>


                        </div>
                        <div className="footer">
                            <div className="footer-top">
                                <div className="footer-logo">

                                </div>
                                <div className="footer-contact">
                                    <div className="left">
                                        <span>Fundacja Pomogę Ci</span><br />
                                        ul. Xyz 10/10<br />
                                        15-795 Białystok<br />
                                    </div>
                                    <div className="middle">
                                        <span>Godziny otwarcia</span><br />
                                        Pon-Sob: 11:00-17:00<br /><br />
                                    </div>
                                    <div className="right">
                                        <span>Dane kontaktowe</span><br />
                                        +48 888 444 333<br />
                                        xyz@gmail.com
                                    </div>
                                </div>
                                <div className="footer-social-links">
                                    <ul className="footer-social-list">
                                        <li><a href="#"><img id="facebook-img" className="fab fa-facebook-f" src={facebook} ></img></a></li>
                                        <li><a href="#"><img id="youtube-img" className="fab fa-youtube" src={youtube}></img></a></li>
                                        <li><a href="#"><img id="instagram-img" className="fab fa-instagram" src={instagram}></img></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-bottom">
                                2021 © Wszelkie prawa zastrzeżone. | Wykonanie Aleksandra Krysińska
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );

    }
}



// export default App;

