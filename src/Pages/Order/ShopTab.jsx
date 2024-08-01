import MenuDetails from "../../Routes/Shared/MenuDetails";


const ShopTab = ({items}) => {
    return (
      <div>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16">
          {items.map((item) => (
            <MenuDetails key={item._id} item={item}></MenuDetails>
          ))}
        </div>
      </div>
    );
};

export default ShopTab;