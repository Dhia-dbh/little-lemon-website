import { useNavigate } from "react-router-dom";
import NavBar from "../navBar/navBar";
import Footer from "../footer/footer";
import littleLemonRestaurant from "../../assets/lemonRestaurant.jpg";
import meal1 from "../../assets/meal1.jpeg";
import meal2 from "../../assets/meal2.jpg";
import meal3 from "../../assets/meal3.jpg";

import "./home.css";
const Home = ({ isReserved }) => {
  const navigate = useNavigate();
  return (
    <>
      <div id="home">
        <NavBar />
        <main>
          <div className="annoucement">
            <section>
              <h1>Welcome to Big Lemon</h1>
              <h2>
                Experience the best of Italian and Indian cuisine in one place
              </h2>
              <h2>Taste your Mama Cooking</h2>
              {isReserved ? (
                <button className="btn btn-success">
                  Thank you for making a reservation!
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={() => navigate("/reservation/new")}
                >
                  Reserve your Table
                </button>
              )}
            </section>
            <section className="sideImage">
              <img
                src={littleLemonRestaurant}
                alt="Little Lemon Restaurant"
              ></img>
            </section>
          </div>
          <section className="services">
            <h2>Today's Special</h2>
            <div className="servicesListing">
              <div className="service">
                <h2>Tortellini</h2>
                <img src={meal1} alt="Meal 1"></img>
                <p>
                  Delicate tortellini pillows, filled with savory ricotta and
                  herbs, bathe in a creamy sauce. Each bite bursts with cheesy
                  goodness, a delightful dance on your taste buds.
                </p>
              </div>
              <div className="service">
                <h2>Spagetti</h2>
                <img src={meal2} alt="Meal 2"></img>
                <p>
                  Twisting strands of spaghetti, cooked to al dente perfection,
                  dance in a rich tomato sauce bursting with fragrant herbs. A
                  sprinkle of cheese adds a creamy finish for a comforting,
                  irresistible Italian embrace.
                </p>
              </div>
              <div className="service">
                <h2>Delhi Tandori</h2>
                <img src={meal3} alt="Meal 3"></img>
                <p>
                  Succulent tandoori chicken, marinated in a symphony of warm
                  spices, emerges from the clay oven with a smoky kiss. Tender
                  and juicy, it promises an explosion of flavor in every bite.
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
