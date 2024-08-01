const MenuDetails = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={image} alt="food" />
        </figure>
        <p className="absolute right-0 mr-4 mt-4 px-2 bg-slate-900 text-white">
          $ {price}{" "}
        </p>
        <div  className="card-body items-center text-center bg-slate-50">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button className="btn btn-outline bg-slate-200 border-0 border-b-4 text-yellow-600">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDetails;
