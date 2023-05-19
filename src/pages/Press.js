import React from "react";
import "../assets/styles/Press.css";
const Press = () => {
  const embedYouTubeVideo = (videoId) => {
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
      <div className="video-container">
        <iframe
          title="YouTube Video"
          src={embedUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  };

  return (
    <div>
      <div className="page-banner press-banner">
        <div>
          <h1>Media</h1>
          <div>
            <p className="page-description">
              Get the scoop on Plate of Nations media mentions and press outreach initiatives.
            </p>
          </div>
        </div>
      </div>
      <div className="press-container">
      <div className="year-group">
        <h2>Plate of Nations Media 2022</h2>
          <ul>
            <li class="utube">{embedYouTubeVideo("_MHqRCM9hdo")}</li>
            <li class="utube">{embedYouTubeVideo("Yl8Drl9Lsdg")}</li>
          </ul>
      </div>
      <div className="year-group">
        <h2>Plate of Nations Media 2021</h2>
        <ul>
          <li class = "utube">{embedYouTubeVideo("0qfEdifiPhs")}</li>
          <li>
            <i class="fa-solid fa-newspaper"></i>
            <a class="press-link" href="https://southseattleemerald.com/2021/09/25/taste-global-eat-local-annual-plate-of-nations-food-festival-ends-this-weekend/">
              Taste Global, Eat Local: Annual Plate of Nations Food Festival Ends This Weekend
            </a>
          </li>
          <li>
            <i class="fa-solid fa-newspaper"></i>
            <a class="press-link" href="https://curiocity.com/enjoy-some-of-seattles-most-diverse-eats-at-this-food-festival-happening-now/">
              Enjoy Some of Seattle's Most Diverse Eats at This Food Festival Happening Now
            </a>
          </li>
        </ul>
      </div>

      <div className="year-group">
        <h2>Plate of Nations Media 2020</h2>
        <ul>
          <li class = "utube">{embedYouTubeVideo("p4vYkHGgSnw")}</li>
          <li>
            <i class="fa-solid fa-newspaper"></i>
            <a class="press-link" href="https://southseattleemerald.com/2020/10/25/seattle-restaurant-week-spotlights-south-ends-global-cuisine/">
              Seattle Restaurant Week Spotlights South End's Global Cuisine
            </a>
          </li>
          <li>
            <i class="fa-solid fa-newspaper"></i>
            <a class="press-link" href="https://www.homesightwa.org/plate-of-nations-extends-its-10th-annual-event/">
              Plate of Nations Extends Its 10th Annual Event
            </a>
          </li>
        </ul>
      </div>

      <div className="year-group">
        <h2>Plate of Nations Media 2019</h2>
        <ul>
          {/* <li class = "utube">{embedYouTubeVideo("xOSqbwSz_7k")}</li> */}
          <li>
            <i class="fa-solid fa-newspaper"></i>
            <a class="press-link" href="https://everout.com/seattle/events/plate-of-nations/e73430/">Plate of Nations 2019</a>
          </li>
          <li>
            <i class="fa-solid fa-newspaper"></i>
            <a class="press-link" href="https://www.seattlemet.com/eat-and-drink/2019/03/where-to-eat-and-drink-this-week-march-20-26">
              Where to Eat and Drink This Week: March 20–26
            </a>
          </li>
        </ul>
      </div>
      <div className="year-group">
        <h2>Plate of Nations Media 2017</h2>
        <ul>
          <li><i class="fa-solid fa-newspaper"></i><a class="press-link" href="https://southseattleemerald.com/2017/04/05/plate-of-nations-seasons-south-seattle-with-international-flavor/">Plate of Nations Seasons South Seattle with International Flavor</a></li>
        </ul>
      </div>

      <div className="year-group">
        <h2>Plate of Nations Media 2016</h2>
        <ul>
          <li><i class="fa-solid fa-newspaper"></i><a class="press-link" href="https://www.seattlemet.com/eat-and-drink/2016/03/10-reasons-plate-of-nations-is-seattle-s-coolest-restaurant-promo">10 Reasons Plate of Nations Is Seattle's Coolest Restaurant Promo</a></li>
          <li><i class="fa-solid fa-newspaper"></i><a class="press-link" href="https://ethnicseattle.com/2016/03/25/plate-of-nations-a-passport-to-explore-worlds-of-flavor/">Plate of Nations: A Passport to Explore Worlds of Flavor</a></li>
          <li><i class="fa-solid fa-newspaper"></i><a class="press-link" href="https://www.plateofnations.com/pon-press/ethnicseattle.com/2016/03/28/the-women-behind-plate-of-nations/">The Women Behind Plate of Nations</a></li>
          <li><i class="fa-solid fa-newspaper"></i><a class="press-link" href="https://www.thestranger.com/events/23687051/plate-of-nations">Plate of Nations</a></li>
          <li><i class="fa-solid fa-newspaper"></i><a class="press-link" href="https://www.greaterseattleonthecheap.com/152958-seattle-plate-of-nations-ethnic-food-event/">Seattle: Plate of Nations ethnic food event</a></li>
          <li><i class="fa-solid fa-newspaper"></i><a class="press-link" href="https://www.emeraldpalate.com/things-to-eat-and-see-in-seattle-march-25-27/?utm_source=facebook&utm_medium=social&utm_campaign=weekend-wanderings-3-24-2016">Things to Eat and See in Seattle (March 25-27)</a></li>
          <li><i class="fa-solid fa-newspaper"></i><a class="press-link" href="https://www.seattlemet.com/eat-and-drink/2016/03/nosh-pit-weekly-planner-march-23-29">Nosh Pit Weekly Planner: March 23-29</a></li>
          <li><i class="fa-solid fa-newspaper"></i><a class="press-link" href="https://bottomline.seattle.gov/2016/03/21/local-global-eats-plate-of-nations-is-march-25-april-10/">Local & Global Eats: Plate of Nations is March 25-April 10</a></li>
          <li><i class="fa-solid fa-newspaper"></i><a class="press-link" href="http://www.kplu.org/post/plate-nations-highlights-rainier-valley-cultural-melting-pot">Plate of Nations Highlights Rainier Valley Cultural Melting Pot</a></li>
          <li><i class="fa-solid fa-newspaper"></i><a class="press-link" href="https://crosscut.com/2016/03/seattle-weekend-things-to-do-march-24-28">Seattle weekend things to do: March 24-28</a></li>
          <li><i class="fa-solid fa-newspaper"></i><a class="press-link" href="https://www.thestranger.com/food-and-drink/2016/03/16/23716602/a-world-of-cuisines-awaits-you-from-the-othello-light-rail-station">A World of Cuisines Awaits You from the Othello Light Rail Station</a></li>
        </ul>
      </div>

      <div className="year-group">
        <h2>Plate of Nations Media 2015</h2>
        <ul>
          <li><i class="fa-solid fa-camera"></i><a class="press-link" href="http://sallyreps.blogspot.com/2015/02/seattle-food-photographer-alex-hayden.html">Seattle Food Photographer - Alex Hayden</a></li>
          <li><i class="fa-solid fa-newspaper"></i><a class="press-link" href="https://mynorthwest.com/90845/plate-of-nations-showcases-immigrant-family-run-restaurants-in-seattles-rainier-valley/">Plate of Nations Showcases Immigrant Family-Run Restaurants in Seattle's Rainier Valley</a></li>
          <li><i class="fa-solid fa-newspaper"></i><a class="press-link" href="https://seattle.eater.com/2015/3/10/8179977/what-to-eat-at-plate-of-nations-first-fully-green-event">What to Eat at Plate of Nations' First Fully Green Event</a></li>
          <li><i class="fa-solid fa-newspaper"></i><a class="press-link" href="https://www.thestranger.com/music/2015/03/25/21950164/the-high-list-recommended-events-for-stoners">The High List: Recommended Events for Stoners</a></li>
          <li><i class="fa-solid fa-newspaper"></i><a class="press-link" href="https://crosscut.com/2015/03/the-weekend-list-native-art-weekend-plate-of-nations-shaprece-caspar-babypants">The Weekend List: Native Art Weekend, Plate of Nations, Shaprece, Caspar Babypants</a></li>
          <li><i class="fa-solid fa-newspaper"></i><a class="press-link" href="https://www.trumba.com/badaspx.html?aspxerrorpath=/t.aspx">Plate of Nations on Trumba</a></li>
          <li><i class="fa-solid fa-newspaper"></i><a class="press-link" href="https://southseattleemerald.com/2015/04/08/traveling-worlds-of-flavor-via-olympic-express/">Traveling Worlds of Flavor via Olympic Express</a></li>
          <li><i class="fa-solid fa-newspaper"></i><a class="press-link" href="https://southseattleemerald.com/2015/04/04/plate-of-nations-south-seattles-global-buffet/">Plate of Nations: South Seattle's Global Buffet</a></li>
          <li><i class="fa-solid fa-newspaper"></i><a class="press-link" href="https://rainiervalleypost.com/plate-of-nations-goes-green-for-5th-anniversary/">Plate of Nations Goes Green for 5th Anniversary</a></li>
          <li><i class="fa-solid fa-newspaper"></i><a class="press-link" href="http://solvedhadoop.com/life/food-drink/news-you-can-eat-marination-plans-a-columbia-city-spot-a-chick-fil-a-delay-and-more/">News You Can Eat: Marination Plans a Columbia City Spot, a Chick-fil-A Delay, and More!</a></li>
          <li><i class="fa-solid fa-newspaper"></i><a class="press-link" href="https://www.seattletimes.com/entertainment/11-fun-events-from-mlb-opening-day-to-plate-of-nations/">11 Fun Events: From MLB Opening Day to Plate of Nations</a></li>
          <li><i class="fa-solid fa-newspaper"></i><a class="press-link" href="https://seattletransitblog.com/2015/04/01/link-excuse-of-the-week-plate-of-nations/">LINK Excuse of the Week: Plate of Nations</a></li>
          <li><i class="fa-solid fa-newspaper"></i><a class="press-link" href="http://pugetsoundoff.org/blog/join-seattle-plate-nations">Join Seattle Plate of Nations</a></li>
          <li><i class="fa-solid fa-newspaper"></i><a class="press-link" href="http://www.traycreative.com/">Tray Creative</a></li>
          <li><i class="fa-solid fa-newspaper"></i><a class="press-link" href="https://www.seattlemet.com/arts-and-culture/2015/04/the-top-things-to-do-this-weekend-april-8-12-2015">The Top Things to Do This Weekend: April 8-12, 2015</a></li>
          <li><i class="fa-solid fa-newspaper"></i><a class="press-link" href="https://www.seattlemet.com/arts-and-culture/2015/03/cheap-week-seattle-march-30-april-5">Cheap Week Seattle: March 30-April 5</a></li>
        </ul>
      </div>
      <div className="year-group">
        <h2>Plate of Nations 2013</h2>
        <ul>
          <li class = "utube">{embedYouTubeVideo("kwlDNeaShz0")}</li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Press;
