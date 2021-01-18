import Categories from "./Categories/Categories";
import Cart from './Cart/Cart';
import './MainContent.css';

const MainContent = (props) => {
      const {restoData,cartData,setCart} = props;
    return (
        <div className='MainContent'>
            <Categories restoData = {restoData} cartData = {cartData} setCart = {setCart}/>
            <Cart cartData = {cartData} setCart = {setCart}/>
        </div>  
    )
}

export default MainContent;