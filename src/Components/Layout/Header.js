import { Fragment } from "react";
import mealsimg from '../../assets/Meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";
const Header= props=>{
    return <Fragment>
        <header className={classes.header}>
            <h1>Crunchy Meals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsimg} alt="MealsImage" />
        </div>
    </Fragment>
};
export default Header;