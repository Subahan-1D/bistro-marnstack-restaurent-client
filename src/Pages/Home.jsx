import Bitro from "../components/Bitro";
import Banner from "./Banner";
import Category from "./Category";
import PopularMenu from "./PopularMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Bitro></Bitro>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;