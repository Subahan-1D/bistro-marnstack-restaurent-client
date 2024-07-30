
import { Parallax } from "react-parallax";
const MenuCover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div className="hero h-[700px]">
        <div className="hero-overlay  bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-screen-sm p-8  bg-black bg-opacity-40 ">
            <h1 className="mb-5 text-5xl w-[620px]  font-bold text-gray-300 uppercase">
              {title}
            </h1>
            <p className="">Would you like to try a dish?</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default MenuCover;
