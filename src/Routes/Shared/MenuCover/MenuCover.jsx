
import bgImage from '../../../assets/menu/banner3.jpg'
const MenuCover = () => {
    return (
      <div
        className="hero h-[700px]  bg-fixed mb-10"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="hero-overlay  bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-screen-sm p-8  bg-black bg-opacity-40 ">
            <h1 className="mb-5 text-5xl w-[620px]  font-bold text-gray-300 uppercase">
              OUR MENU
            </h1>
            <p className=''>Would you like to try a dish?</p>
          </div>
        </div>
      </div>
    );
};

export default MenuCover;