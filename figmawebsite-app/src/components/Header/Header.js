import { Fragment,useState } from "react";
import Cart from "../Cart/Cart";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";


import InviteBand from '../invite-band/InviteBand'
const Header = props =>{
    const [isCartVisible, setIsCartVisible] = useState(false)
    const onShowCart = () => {
      setIsCartVisible(true);
    };
    const onHideCart = () => {
      setIsCartVisible(false);
    };
    return(<div>
     
       
        {isCartVisible && <Cart hideCart={onHideCart}/>}
     <HeaderCartButton onClick={onShowCart}/>
   
     <InviteBand />
    </div>);
};
export default Header;