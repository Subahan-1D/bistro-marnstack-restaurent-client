import { Helmet } from "react-helmet-async";
import MenuCover from "../../Routes/Shared/MenuCover/MenuCover";
import img from "../../assets/menu/banner3.jpg";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle";
import MenuCategory from "./MenuCategory";
import MenuDesserts from "./MenuDesserts";
import MenuPizza from "./MenuPizza";
import MenuSalad from "./MenuSalad";
import MenuSoups from "./MenuSoups";
const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Restaurant | menu</title>
      </Helmet>
      <MenuCover img={img} title="OUR MENU"></MenuCover>
      <SectionTitle
        subHeading="---Don't miss---"
        heading="TODAY'S OFFER"
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuDesserts items={desserts}></MenuDesserts>
      <MenuPizza items={pizza}></MenuPizza>
      <MenuSalad items={salad}></MenuSalad>
      <MenuSoups items={soup}></MenuSoups>
      
    </div>
  );
};

export default Menu;
