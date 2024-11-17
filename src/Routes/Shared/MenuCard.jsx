import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import MenuDetails from "./MenuDetails";

const MenuCard = () => {
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/menu")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "dessert");
        setCard(popularItems);
      });
  }, []);
  return (
    <div>
      <section>
        <div className="max-w-screen-lg p-6 bg-gradient-to-r from-gray-900 via-gray-800 to-black mx-auto rounded-lg shadow-lg">
          <p className="text-white text-center text-lg sm:text-xl md:text-2xl font-semibold">
            Call Us:{" "}
            <span className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200">
              +88 01786727749
            </span>
          </p>
        </div>

        <SectionTitle
          subHeading="---Should Try---"
          heading="CHEF RECOMMENDS"
        ></SectionTitle>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16">
          {card.map((item) => (
            <MenuDetails key={item._id} item={item}></MenuDetails>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MenuCard;
