import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";
import littleLemonRestaurant from "./assets/lemonRestaurant.jpg";


import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <div className="annoucement">
          <section>
            <h1>Welcome to Big Lemon</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vehicula, justo ac fermentum ultrices, ex purus ultricies justo,
              nec aliquet nunc erat nec felis. Donec sit amet elit auctor,
              ultricies nisi vitae, tincidunt libero. In hac habitasse platea
              dictumst. Sed ac semper nunc. Nulla facilisi. Nullam nec nunc et
              mi tincidunt fermentum. Nulla facilisi. Nullam nec nunc et mi
              tincidunt fermentum. Nulla facilisi. Nullam nec nunc et mi
              tincidunt fermentum.
            </p>
            <button className="btn btn-primary">Reserve Your Table Now!</button>
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
              <img src="{}" alt="Meal 1"></img>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vehicula, justo ac fermentum ultrices, ex purus ultricies justo,
                nec aliquet nunc erat nec felis.
              </p>
            </div>
            <div className="service">
              <h2>Tortellini</h2>
              <img src="{}" alt="Meal 2"></img>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vehicula, justo ac fermentum ultrices, ex purus ultricies justo,
                nec aliquet nunc erat nec felis.
              </p>
            </div>
            <div className="service">
              <h2>Tortellini</h2>
              <img src="{}" alt="Meal 3"></img>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vehicula, justo ac fermentum ultrices, ex purus ultricies justo,
                nec aliquet nunc erat nec felis.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
