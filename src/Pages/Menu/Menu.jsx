import { Helmet } from "react-helmet-async";
import MenuCover from "../../Routes/Shared/MenuCover/MenuCover";
import PopularMenu from "../PopularMenu";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Restaurant | menu</title>
      </Helmet>
      <MenuCover></MenuCover>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;
