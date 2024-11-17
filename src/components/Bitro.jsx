import bgImage from "../assets/home/chef-service.jpg";

const Bitro = () => {
  return (
    <div
      className="hero bg-fixed min-h-screen mb-10"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-50"></div>
      <div className="hero-content text-neutral-content flex justify-center items-center">
        <div className="max-w-screen-md p-8 md:p-12 lg:p-16 bg-white bg-opacity-80 rounded-lg shadow-lg backdrop-blur-md">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 uppercase font-mono mb-5">
           Delicious Restaurant
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-gray-700 font-serif mb-5">
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
