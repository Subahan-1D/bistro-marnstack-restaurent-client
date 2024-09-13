
import { Link } from "react-router-dom";
import MenuItem from "../../Routes/Shared/MenuItem";
import MenuCover from "../../Routes/Shared/MenuCover/MenuCover";

const MenuCategory = ({ items ,title ,image}) => {
  return (
    <div>
      {title && <MenuCover img={image} title={title}></MenuCover>}
      <div className="grid  grid-cols-1 md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center font-lato">
        <Link to={`/shop/${title}`}>
          <button className="btn btn-outline text-2xl border-0 mb-10  border-b-4 mt-6">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
