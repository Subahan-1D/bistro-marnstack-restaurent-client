import Bitro from "../components/Bitro";
import MenuCard from "../Routes/Shared/MenuCard";
import MenuDetails from "../Routes/Shared/MenuDetails";
import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Bitro></Bitro>
            <PopularMenu></PopularMenu>
            <MenuCard></MenuCard>
            <Featured></Featured>
        </div>
    );
};

export default Home;