const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex space-x-4">
      <img style={{borderRadius:"0 205px 205px 250px"}} className="w-[104px]" src={image} alt="" />
      <div>
        <h3 className="uppercase">{name}--------------</h3>
        <p className="text-gray-400">{recipe}</p>
      </div>
      <p className="text-yellow-600">${price}</p>
    </div>
  );
};

export default MenuItem;
