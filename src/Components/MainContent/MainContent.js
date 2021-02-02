import Categories from "./Categories/Categories";
import Cart from "./Cart/Cart";
import "./MainContent.css";

const MainContent = (props) => {
  const { restoData, cartData, setCart } = props;
  return (
    <div className="MainContent">
      <div className="MainContentInside">
        <Categories
          restoData={restoData}
          cartData={cartData}
          setCart={setCart}
        />
        <Cart cartData={cartData} setCart={setCart} />
      </div>
    </div>
  );
};

export default MainContent;
