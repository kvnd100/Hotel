import CustomSelectBox from "./CustomSelectBox";
import "./Destinations.css";
const Destinations = () => {
  return (
    <section className="destination">
      <div className="destination-header">
        <h1>Our Destinations</h1>
        <CustomSelectBox />
      </div>

      <div className="destination-content">
        <div className="destination-content-item">
          <div className="destination-main">
            <img
              className="destination-img"
              src="https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/hotel_resorts/DEST--Hikka_Tranz_715X550.jpg"
            />
            <img
              className="destination-island"
              src="https://www.cinnamonhotels.com/themes/cinnamon/images/srilanka.png"
            />
            <div className="destination-card">
              <h2 className="destination-card-header">Hikka Tranz by Cinnamon</h2>
              <p className="destination-card-text">
                Live around the endless ocean, and feel the rising sun pump adrenaline into every
                nerve of yours. Let the setting sun cover you with a sense of calmness as it
                disappears.
              </p>
              <button>Discover More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
