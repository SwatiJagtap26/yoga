import "./Blog.css";
import Advertise from "../Customs/advertise";
const Blog = () => {
  return (
    <div>
      <Advertise />
      <div className="Blog-main">
        <div className="Main-Blog-flex">
          <div className="Blog-Card">
            <div className="blog-entry">
              <i class="fa-solid fa-calendar-days"> oct 25 2022</i>
            </div>
            <img className="blog-img" src="./images/img1.webp" alt="" />

            <h4>Treat Your Body Like A Temple</h4>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className="Blog-Card">
          <div className="blog-entry">
              <i class="fa-solid fa-calendar-days"> oct 25 2022</i>
            </div>
            <img className="blog-img" src="./images/img2.webp" alt="" />

            <h4>Treat Your Body Like A Temple</h4>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className="Blog-Card">
          <div className="blog-entry">
              <i class="fa-solid fa-calendar-days"> oct 25 2022</i>
            </div>
            <img className="blog-img" src="./images/img3.webp" alt="" />

            <h4>Treat Your Body Like A Temple</h4>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
        {/* Main blog2 */}

        <div className="Main-Blog-flex">
          <div className="Blog-Card">
          <div className="blog-entry">
              <i class="fa-solid fa-calendar-days"> oct 25 2022</i>
            </div>
            <img className="blog-img" src="./images/img4.webp" alt="" />

            <h4>Treat Your Body Like A Temple</h4>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className="Blog-Card">
          <div className="blog-entry">
              <i class="fa-solid fa-calendar-days"> oct 25 2022</i>
            </div>
            <img className="blog-img" src="./images/img5.webp" alt="" />

            <h4>Treat Your Body Like A Temple</h4>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className="Blog-Card">
          <div className="blog-entry">
              <i class="fa-solid fa-calendar-days"> oct 25 2022</i>
            </div>
            <img className="blog-img" src="./images/img6.webp" alt="" />

            <h4>Treat Your Body Like A Temple</h4>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
