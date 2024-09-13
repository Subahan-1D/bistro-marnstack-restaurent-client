import { Helmet } from "react-helmet-async";
import MenuCover from "../../Routes/Shared/MenuCover/MenuCover";
import img from "../../assets/menu/banner3.jpg";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle";
import MenuCategory from "./MenuCategory";
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"
import { Link } from "react-router-dom";
const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div className="font-lato">
      <Helmet>
        <title>Bistro Restaurant | Menu</title>
      </Helmet>
      <MenuCover img={img} title="OUR MENU"></MenuCover>
      <SectionTitle
        subHeading="---Don't miss---"
        heading="TODAY'S OFFER"
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      {/* desserts menu items */}
      <MenuCategory items={desserts}title={"desserts"}image={dessertImg}  ></MenuCategory>
      {/* pizza menu items */}
      <MenuCategory items={pizza} title={"pizzas"} image={pizzaImg}></MenuCategory>
      {/* salad menu items */}
      <MenuCategory
        items={salad}title={"salads"} image={saladImg} ></MenuCategory>
      {/* soups menu items */}
      <MenuCategory items={soup} title={"soups"} image={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
