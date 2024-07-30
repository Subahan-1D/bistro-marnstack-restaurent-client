
import MenuItem from "../../Routes/Shared/MenuItem";

const MenuCategory = ({ items, }) => {
  return (
    <div>
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
    </div>
  );
};

export default MenuCategory;
