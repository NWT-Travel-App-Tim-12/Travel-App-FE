import React from "react";
import ControlledCarousel from "./HomeImg";
import LocationScreen from "./PackagesScreen";

function HomeScreen() {
  return (
    <main>
      <header className="header">
        <div className="header-img">
          <ControlledCarousel />
        </div>

        <div className="header-content">
          <div className="header-detail">
            <h1 className="content-title">
              Choose
              <br />
              Our Best Offer
            </h1>

            <p className="content-description">
              Traveling evokes a sense of liberation, freeing the spirit to
              wander and explore uncharted territories, leaving behind the
              familiar and embracing the unknown. The anticipation of travel
              fills the heart with excitement, as it opens the door to new
              experiences, cultures, and perspectives, igniting a sense of
              wonder and curiosity.
            </p>
          </div>
        </div>
      </header>
      <LocationScreen />
    </main>
  );
}
export default HomeScreen;
