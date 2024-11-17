import { Helmet } from "react-helmet";
import Bitro from "../components/Bitro";
import MenuCard from "../Routes/Shared/MenuCard";
import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
      <div>
        <Helmet>
          <title>Delicious Restaurant | Home</title>
        </Helmet>
        <Banner></Banner>
        <Category></Category>
        <Bitro></Bitro>
        <PopularMenu></PopularMenu>
        <MenuCard></MenuCard>
        <Featured></Featured>
        <Testimonials></Testimonials>
      </div>
    );
};

export default Home;