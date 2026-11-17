const Hero = ({ data }) => {
  return (
    <section className="hero">
      <div className="container">
        <div>
          <h1>{data.restaurant.name}</h1>
          <p>{data.restaurant.description}</p>
        </div>
        <img src={data.restaurant.picture} alt="image Le Pain Quotidien" />
      </div>
    </section>
  );
};

export default Hero;
