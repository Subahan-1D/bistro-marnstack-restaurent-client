import { Helmet } from "react-helmet-async";
import MenuCover from "../../Routes/Shared/MenuCover/MenuCover";
import PopularMenu from "../PopularMenu";
import img from '../../assets/menu/banner3.jpg'
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Restaurant | menu</title>
      </Helmet>
      <MenuCover img={img} title="OUR MENU"></MenuCover>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;
