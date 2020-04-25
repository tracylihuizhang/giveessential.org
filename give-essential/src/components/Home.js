import React from 'react';
import { NavLink } from 'react-router-dom';
// import '../css/style2.css'

export default function Home() {
    return (
    <body>
        <div className="cover">
          <nav>
            <div className="mobile-nav">
              <NavLink to="#" id="logo"><img id="logo" src="img/newgraphics/colornotitle.png" alt="site logo" /></NavLink>
              <ul>
                <li>
                  <label for="mobile-toggle"><i clascoms="fa fa-bars" ></i></label>
                  <input type="checkbox" id="mobile-toggle" />
                  <div className="mobile-popup-menu">
                    <div className="toggle-nav">
                      <NavLink to="#" id="logo"><img id="logo" src="img/newgraphics/logonotitle.png" alt="site logo" /></NavLink>
                      <ul>
                        <li>
                          <label for="mobile-toggle"><i className="fa fa-times"></i></label>
                        </li>
                      </ul>
                    </div>
                    <div className="toggle-links">
                      <ul>
                        <li><NavLink to="" onclick="window.open('https://giveessential.typeform.com/to/Mk76Bo')">I'm an essential worker</NavLink></li>
                        <li><NavLink to="" onclick="window.open('https://giveessential.typeform.com/to/LWKggm')">I want to donate</NavLink></li>
                        <li><NavLink to="https://giveessential.org/#work">How this works</NavLink></li>
                        <li><NavLink to="/faq">FAQ</NavLink></li>
                        <li><NavLink to="https://giveessential.org/#contact">Contact</NavLink></li>
                        <li><NavLink to="#"
                            onclick="window.open('https://www.gofundme.com/f/give-essential?utm_source=customer&utm_medium=copy_link&utm_campaign=p_cf+share-flow-1')">Our
                            GoFundMe</NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="web-nav">
              <NavLink to="/" id="logo"><img id="logo" src="img/newgraphics/logonotitle.png" alt="site logo" /></NavLink>
              <ul>
                <li><NavLink to="#work" >How does this work?</NavLink></li>
                <li><NavLink to="#meet" >Meet the team</NavLink></li>
                <li><NavLink to="/faq" >FAQ</NavLink></li>
                <li><NavLink to="#contact" >Contact</NavLink></li>
                <li><NavLink to="#"
                    onclick="window.open('https://www.gofundme.com/f/give-essential?utm_source=customer&utm_medium=copy_link&utm_campaign=p_cf+share-flow-1')"
                    className="donate">Our GoFundMe</NavLink></li>
              </ul>
            </div>
          </nav>
          <div className="container">
            <section className="main-container">
              <div className="content-box">
                <div className="content-text-box">
                  <h1 className="maintext">Connecting essential workers to essential items</h1>
                  <h3 className="tagtext">Essential workers on the frontline need your help. Send a package of household items you already own—without leaving your home.
                    <br /><br /></h3>
                </div>
              </div>
              <div className="picture-box">
                <div className="content-links-box">
                  <NavLink to="" onclick="window.open('https://giveessential.typeform.com/to/Mk76Bo')"
                    className="css-button-rounded css-button-rounded-1">I'm an essential worker</NavLink>
                  <NavLink to="" onclick="window.open('https://giveessential.typeform.com/to/LWKggm')"
                    className="css-button-rounded css-button-rounded-2">I want to donate</NavLink>
                    <br /><center><NavLink to="" onclick="window.open('https://www.facebook.com/GiveEssential/')">
                    <i className="fa fa-facebook-square"
                        ></i></NavLink>  &nbsp&nbsp&nbsp
                        <NavLink to="" onclick="window.open('https://instagram.com/GiveEssential')">
                          <i className="fa fa-instagram" ></i></NavLink>
                          &nbsp&nbsp&nbsp
                      <NavLink to="" onclick="window.open('https://twitter.com/GiveEssential')">
                        <i className="fa fa-twitter" ></i></NavLink></center>
                </div>
              </div>
            </section>      
            <section className="how">
              <a name="how" className="who-hover" />
              <h3 className="how-text">
                <center> How does this work? </center>
              </h3>
              <div className="who-text-box">
                <div className="who-text">
                    <b>Give Essential lets you send your extra household items directly to an essential worker who needs them, providing a way to support the frontline from your home.
                    </b> If you have any supplies or funds to share, you can help!
                    <br /><br />During this pandemic, we have asked essential workers to risk their lives so that our
                    communities can stay safe at home. But who protects them? Let’s help the single mother
                    working to fulfill her 6th grocery delivery order of the day. The immunocompromised
                    veteran forced to take on night shifts re-stocking shelves.
                    Give Essential brings our communities together to give back to our essential workers.
                    <br /><br />
                    We all have extra stuff—board games collecting dust, a box of unused tampons,
                    extra shampoo bottles from hotels.
                    <b>Anything that you can share will go directly to an essential worker in need.</b><br />
                    <br /><b>How are we defining “essential worker”?</b> An essential worker is anyone who has to risk
                    their health in order to make ends meet and/or is unable to work from home.
                    <br /><br /><i><b>Examples:</b></i> Postal workers, delivery shopper/drivers, retail personnel, grocery personnel, bank tellers, EMT
                </div>
              </div>
              <h3 className="secondhow-text">
                <center>I'm interested! What now?</center>
              </h3>
              <section className="xop-section">
                <div className="xop-wrapper">
                  <div className="xop-container">
                    <div className="xop-actionBox-3">
                      <h4 className="xop-heading">
                        <center>1. Sign up</center>
                      </h4>
                      <p className="xop-text">Essential workers and donors both fill out forms
                        letting us know
                        what essential workers need and what donors have.
                      </p>
                      <form action="https://giveessential.typeform.com/to/Mk76Bo" target="_blank">
                        <button className="xop-btn-2">Essential Workers<i aria-hidden="true"></i></button>
                      </form>
                      <form action="https://giveessential.typeform.com/to/LWKggm" target="_blank">
                        <button className="xop-btn-2">Donors <i aria-hidden="true"></i></button>
                      </form>
                    </div>
                    <div className="xop-actionBox-1">
                      <h4 className="xop-heading">
                        <center>2. We create matches</center>
                      </h4>
                      <p className="xop-text">
                        For example: We create a match between a donor with extra toys and an essential worker with kids.<br /><br />
                        Categories of donations: personal hygiene products, feminine hygiene products,
                        kids activities, gift cards
                      </p>
                    </div>
                    <div className="xop-actionBox-2">
                      <h4 className="xop-heading">
                        <center>3. Gift delivery</center>
                      </h4>
                      <p className="xop-text">Give Essential will email the donor their match,
                        and the donor will send the essential worker their donation! <br /><br />
                        Donors can directly support the frontline without even leaving their home,
                        using resources they already have.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <h3 className="secondhow-text">
                <center>Featured Donation Requests</center>
              </h3>
              <center>
                <p >Read about some of the essential workers you can help.</p>
              </center>
              <div className="how-text-box">
                <iframe
                  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ4iBqbwQPXMU25n0z2YuTK_59mhDvRMATPzX-hz1cxKb5ztsCIYFwA-I8UDxKmIc5HFwlGyM1Biglw/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
              </div>      
            </section>
            <section className="press">
              <a name="thank-you"></a>
              <div className="comp-text-box">
                <div className="comp-text-box-header">
                  <h3 className=" how-text">In the news</h3>
                </div>
                <div className="comp-text-box-items">
                  <center>
                  <NavLink to="" onclick="window.open('https://www.nj.com/coronavirus/2020/04/need-supplies-have-some-to-donate-these-nj-college-students-found-a-way-pair-you-up.html')">
                    <img border="18vw" alt="typeform" src="img/media/NJ.png" height="350vw" />
                  </NavLink>
                  <NavLink to="" onclick="window.open('https://twitter.com/AnnMcLaneKuster/status/1251879134239866880')">
                    <img border="18vw" alt="typeform" src="img/media/kuster.png" height="350vw" />
                  </NavLink>
                  <NavLink to="" onclick="window.open('https://www.vnews.com/Volunteer-Spotlight-Dartmouth-students-launch-program-to-connect-essential-workers-with-volunteers-33949710')">
                    <img border="18vw" alt="typeform" src="img/media/valleynews.png" height="350vw" />
                  </NavLink>
                  <NavLink to="" onclick="window.open('https://www.baynews9.com/fl/tampa/news/2020/04/21/college-students-create-website-to-help-essential-workers')">
                    <img border="18vw" alt="typeform" src="img/media/baynews.png" width="350vw" />
                  </NavLink>
                </center>
                </div>
              </div>
            </section>
      
            <a name="meet" />
              <section className="who">
              <div className="meet-box">
                <div className="image-box">
                  <img alt="typeform" src="img/cofounders.png" />
                </div>
                <div className="meet-text-box">
                  <p>
                    <h3>Meet the co-founders</h3>
                  </p>
                  <p>We're Amy and Rine, two college roommates. Over the past few weeks,
                    COVID-19 has turned our lives upside down. We were troubled by the
                    lack of support for essential workers despite society's increasing
                    reliance on their services, and wanted to help. We built and launched
                    Give Essential within 72 hours and have been touched by the responses we've received.
                  </p>
                  <p>Since then, we've built a team of 30+ volunteers —
                  <b><NavLink to="" onclick="window.open('https://giveessential.typeform.com/to/Uj4kWJ')" >
                    please fill out this form if you're interested in volunteering.</NavLink></b>
                    We are a 100% volunteer-run
                    organization and could not do this without our incredible team.
                  </p>
                  <p><b>Executive directors:</b> Amy, Crystal, Rine</p>
                  <p><b>Our core team:</b> Cindy, Kaitlyn, Kristie, Luiza</p>
                </div>
              </div>
            </section>
            <section className="contact">
              <div className="ct-text-box">
                <h3 className="how-text">Contact us!</h3>
                <h3 ><b>General questions:</b> team@giveessential.org</h3>
                <h3 ><b>Outreach:</b> outreach@giveessential.org</h3>
                <h3 ><b>Media:</b> pr@giveessential.org</h3>
              </div>
            </section>
          </div>
          <footer>
            <div className="privacy-policy">
              <ul>
                <li>
                  <NavLink to="https://docs.google.com/document/d/19mfnurvguiTeBEgWk79-u0tLASRgJqcZL1u0fISkLxQ/edit?usp=sharing"
                    id="logo">
                    Privacy Policy
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="social-links">
              <ul>
                <li>
                  <NavLink to="" onclick="window.open('https://www.facebook.com/GiveEssential/')">
                  <i className="fa fa-facebook-square"
                      ></i></NavLink></li>
                <li><NavLink to="" onclick="window.open('https://twitter.com/GiveEssential')"><i className="fa fa-twitter" ></i></NavLink></li>
                <li><NavLink to="" onclick="window.open('https://instagram.com/GiveEssential')"><i className="fa fa-instagram" ></i></NavLink></li>
              </ul>
            </div>
          </footer>
        </div>
    </body>   
    );
}