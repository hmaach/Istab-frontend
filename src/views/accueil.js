
import { Optionsmenu } from "../tools/optionsmenu";


function Accueil() {



  return (

    <div>

      <head>
        <link rel="stylesheet" href="/assets/css/style.css" />

      </head>
      <div id="navbar">
        <img src="/assets/images/logo.png" id="Logo_ofppt" />

        <p id="ISTABerkane">ISTA Berkane</p> <hr />

        <div id="list">
          <ul>
            <li>

              <a href="#"> <img
                src="/assets/images/menu-items/Vector.png" /> <p style={{ color: '#1DA1F2' }}>Home</p></a>


            </li>
            <li>
              <a href="#">
                <img
                  src="/assets/images/menu-items/calendar.png" />
                <p>Calendrier</p></a>

            </li>
            <li>
              <a href="#">
                <img
                  src="/assets/images/menu-items/Default.png" />
                <p>Stagiaires</p></a>

            </li>
            <li id="test">
              <a href="#">
                <img
                  src="/assets/images/menu-items/list.png" />
                <p>Cours / Exercice</p></a>

            </li>
            <li>
              <a href="#">
                <img
                  src="/assets/images/menu-items/cv.png" />
                <p>Mon CV</p></a>

            </li>
            <li>
              <a href="#">
                <img
                  src="/assets/images/menu-items/profile.png" />
                <p>Profile</p></a>

            </li>
            <li>
              <a href="#">
                <img
                  src="/assets/images/menu-items/more.png" />
                <p>Plus</p></a>

            </li>
          </ul>
        </div>
        <div id="profile">
          <img
            src="/assets/images/menu-items/profile.png" style={{
              position: "absolute",
              width: "39px",
              height: "39px",
              left: "0px",
              top: "10px",
              borderRadius: "99999px"
            }} />

          <p>Issam Harnoufi</p>
          <p>Développement digitale</p>

          <a href="#">  <img
            src="/assets/images/logout.png" /></a>


        </div>
      </div>

      <div id="Notification">
        <div id="notif">
          <input

            type="text"
            placeholder="Chercher  ..."
            className="search-input"
          />
        </div>

        <div id="News">
          <h2>Notifications</h2> <hr />
          <div id="event">


          </div> <hr />

          <div id="more">
            <a href="#">Voir plus...</a>
          </div>



        </div>

        <div id="Stag">
          <h2>Découvrez les stagiaires</h2> <hr />
          <div id="profil">
            <div id="profile-pic">
              <img
                src="/assets/images/user.png" />
            </div>

            <span>         test</span> <br />
            <span>test</span>

          </div> <hr />
          <div id="more">
            <a href="#">Voir plus...</a>
          </div>
        </div>

        <p id="copyright"> Hamza Maach - Issam Harnoufi
          ISTA Berkane © 2023,</p>

      </div>

      <div id="main">
        <div id="header">
          <h2>Accueil</h2>
          <div id="categories">
            <ul>
              <li><a href="#">Tous</a></li>
              <li><a href="#">Annonces</a></li>
              <li><a href="#">Cours</a></li>
              <li><a href="#">Exercices</a></li>
              <li><a href="#">Ma filière</a></li>
            </ul>

          </div>
        </div>

        <div id="postes">
          <div class="widget-post" aria-labelledby="post-header-title">
            <div class="widget-post__header">
              <h2 class="widget-post__title" id="post-header-title">
                <i class="fa fa-pencil" aria-hidden="true"></i>
                Write Me
              </h2>
            </div>
            <form id="widget-form" class="widget-post__form" name="form" aria-label="post widget">
              <div class="widget-post__content">
                <label for="post-content" class="sr-only">Share</label>
                <textarea name="post" id="post-content" class="widget-post__textarea scroller" placeholder="publier..."></textarea>
              </div>
              <div class="widget-post__options is--hidden" id="stock-options">
              </div>
              <div class="widget-post__actions post--actions">
                <div class="post-actions__attachments">

                  <button type="button" class="btn post-actions__upload attachments--btn">
                    <label for="upload-image" class="post-actions__label">
                      <i class="fa fa-upload" aria-hidden="true"></i>
                      upload
                    </label>
                  </button>
                  <input type="file" id="upload-image" multiple />
                </div>
                <div class="post-actions__widget">
                  <button class="btn post-actions__publish">publier</button>
                </div>
              </div>
            </form>
          </div>
          <div id="post">

            <div class="post-content">
              <img src="/assets/images/user.png" />
              <div class="flex-container">
                <span>hjhhhhhhhhjjjj</span> 
                <span>14:35 | 12 Mars 2023</span>
              </div>
              <p>(test)</p>
              <button class="options-btn"><i class="fas fa-ellipsis-v"></i></button>



            </div>
          </div>
          <div id="post">

            <div class="post-content">
              <img src="/assets/images/user.png" />
              <p>hjhhhhhhhhjjjj</p> <br />
              <p>14:35 | 12 Mars 2023</p>
              <p >(test)</p>
              <button class="options-btn"><i class="fas fa-ellipsis-v"></i></button>



            </div>
          </div>


        </div>



      </div>



    </div>





  );
}


export default Accueil;
