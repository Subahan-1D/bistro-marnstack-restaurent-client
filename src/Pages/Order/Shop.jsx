import { Helmet } from "react-helmet";
import MenuCover from "../../Routes/Shared/MenuCover/MenuCover";
import img from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import MenuDetails from "../../Routes/Shared/MenuDetails";
import { useParams } from "react-router-dom";
import ShopTab from "./ShopTab";
const Shop = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drink"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro Restaurant | Shop</title>
      </Helmet>
      <MenuCover img={img} title="order food"></MenuCover>
      <Tabs
        className="my-10"
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList className="uppercase text-center">
          <Tab>salad</Tab>
          <Tab>pizza</Tab>
          <Tab>soup</Tab>
          <Tab>dessert</Tab>
          <Tab>drinks</Tab>
        </TabList>
        <TabPanel>
          <ShopTab items={salad}></ShopTab>
        </TabPanel>
        <TabPanel>
          <ShopTab items={pizza}></ShopTab>
        </TabPanel>
        <TabPanel>
          <ShopTab items={soup}></ShopTab>
        </TabPanel>
        <TabPanel>
          <ShopTab items={desserts}></ShopTab>
        </TabPanel>
        <TabPanel>
          <ShopTab items={drinks}></ShopTab>
        </TabPanel>
      </Tabs>
    
    </div>
  );
};

export default Shop;
