import bgImage from "../../assets/menu/salad-bg.jpg";
import MenuItem from "../../Routes/Shared/MenuItem";

const MenuSalad = ({items}) => {
  return (
    <div>
      <>
        <div
          className="hero bg-fixed min-h-screen mb-10"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        >
          <div className="hero-overlay  bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-screen-sm p-8 bg-black  bg-opacity-60 ">
              <h1 className="mb-5 text-5xl font-bold text-white uppercase">
                salads
              </h1>
              <p className="mb-5 text-gray-200 ">
                Lorem Ipsum has been the industry’s standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-10 my-16">
          {items.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <div className="text-center">
          <button className="btn btn-outline text-2xl border-0 mb-10  border-b-4 mt-6">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </div>
      </>
    </div>
  );
};

export default MenuSalad;
