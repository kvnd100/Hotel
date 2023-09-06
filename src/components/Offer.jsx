import "./Offer.css";
const OfferCard = ({ title, image, description }) => (
  <div className="offer-card">
    <div className="offer-card-inner">
      <img src={image} alt={title} className="offer-image" />
      <h3 className="offer-title-h3">{title}</h3>
      <h2 className="offer-title-h1">Bed & Breakfast</h2>
      <p className="offer-description">{description}</p>
      <p className="offer-text">
        From <span>LKR 91,205.70</span> Average Per Night
      </p>
      <a href="#" className="offer-link">
        Learn More
      </a>
    </div>
  </div>
);

const Offer = () => {
  const offersData = [
    {
      title: "Rooms & Suites",
      image:
        "https://sitecore-cd-imgr.shangri-la.com/MediaFiles/B/B/4/%7BBB49205C-F858-4B25-9FCF-3B7828AEBD0B%7D230901_SLCB_SeptMembersDay.jpg?w=360&h=175&mode=crop&scale=both",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Offer 2",
      image:
        "https://sitecore-cd-imgr.shangri-la.com/MediaFiles/B/B/4/%7BBB49205C-F858-4B25-9FCF-3B7828AEBD0B%7D230901_SLCB_SeptMembersDay.jpg?w=360&h=175&mode=crop&scale=both",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      title: "Offer 3",
      image:
        "https://sitecore-cd-imgr.shangri-la.com/MediaFiles/B/B/4/%7BBB49205C-F858-4B25-9FCF-3B7828AEBD0B%7D230901_SLCB_SeptMembersDay.jpg?w=360&h=175&mode=crop&scale=both",
      description: "Nunc cursus arcu sit amet nulla venenatis dapibus.",
    },
  ];

  return (
    <section className="offers-section">
      <h2 className="section-title">Special Offers</h2>
      <div className="offer-cards">
        {offersData.map((offer, index) => (
          <OfferCard
            key={index}
            title={offer.title}
            image={offer.image}
            description={offer.description}
          />
        ))}
      </div>
      <a href="#" className="offer-all">
        View All
      </a>
    </section>
  );
};

export default Offer;
