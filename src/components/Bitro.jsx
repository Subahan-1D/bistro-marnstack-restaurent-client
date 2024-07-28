import bgImage from "../assets/home/chef-service.jpg";
const Bitro = () => {
  return (
    <div
      className="hero min-h-screen mb-10"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-screen-sm p-8 bg-white">
          <h1 className="mb-5 text-5xl font-bold text-gray-700 uppercase">
            Bistro Boss
          </h1>
          <p className="mb-5 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bitro;
