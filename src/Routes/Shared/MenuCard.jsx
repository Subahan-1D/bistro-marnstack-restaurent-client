import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import MenuDetails from "./MenuDetails";

const MenuCard = () => {
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "dessert");
        setCard(popularItems);
      });
  }, []);
  return (
    <div>
      <section>
        <div className="max-w-screen-lg p-8 bg-black mx-auto">
          <p className="mb-5 text-white text-center">
            Call Us: +88 01786727749
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
