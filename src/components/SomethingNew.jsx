import "./SomethingNew.css";
const SomethingNew = () => {
  const images = [
    {
      image:
        "https://www.hilton.com/im/en/NoHotel/15196711/shutterstock-269455079.jpg?impolicy=crop&cw=5000&ch=3259&gravity=NorthWest&xposition=0&yposition=36&rw=2048&rh=1336",
      header: "MULTIPLY YOUR POINTS ",
    },
    {
      image:
        "https://www.hilton.com/im/en/NoHotel/15196711/shutterstock-269455079.jpg?impolicy=crop&cw=5000&ch=3259&gravity=NorthWest&xposition=0&yposition=36&rw=2048&rh=1336",
      header: "MULTIPLY YOUR POINTS",
    },
    {
      image:
        "https://www.hilton.com/im/en/NoHotel/15196711/shutterstock-269455079.jpg?impolicy=crop&cw=5000&ch=3259&gravity=NorthWest&xposition=0&yposition=36&rw=2048&rh=1336",
      header: "MULTIPLY YOUR POINTS",
    },
    {
      image:
        "https://www.hilton.com/im/en/NoHotel/15196711/shutterstock-269455079.jpg?impolicy=crop&cw=5000&ch=3259&gravity=NorthWest&xposition=0&yposition=36&rw=2048&rh=1336",
      header: "MULTIPLY YOUR POINTS",
    },
    {
      image:
        "https://www.hilton.com/im/en/NoHotel/15196711/shutterstock-269455079.jpg?impolicy=crop&cw=5000&ch=3259&gravity=NorthWest&xposition=0&yposition=36&rw=2048&rh=1336",
      header: "MULTIPLY YOUR POINTS",
    },
    {
      image:
        "https://www.hilton.com/im/en/NoHotel/15196711/shutterstock-269455079.jpg?impolicy=crop&cw=5000&ch=3259&gravity=NorthWest&xposition=0&yposition=36&rw=2048&rh=1336",
      header: "MULTIPLY YOUR POINTS",
    },
  ];

  return (
    <section className="something">
      <h1 className="something-header">Experience Something New</h1>
      <p className="something-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores at porro nisi beatae
        necessitatibus, repellat facere dolorum, odit totam temporibus quae sed, tenetur cupiditate
        id quod adipisci accusantium dicta in.
      </p>
      <div className="image-grid">
        {images.map((info, index) => (
          <div className="image-item" key={index}>
            <div className="image-container">
              <img src={info.image} alt={`Image ${index}`} />
              <h2 className="image-header">{info.header}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SomethingNew;
