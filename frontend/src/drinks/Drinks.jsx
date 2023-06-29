import { useContext } from "react";                     
import { AppContext } from "../AppContextProvider";
import DrinkItem from "./DrinkItem";            
import PostFormDrink from "./PostFormDrink";
import styles from './Drinks.module.css';


const Drinks = () => {

    // Grab our drinkList and FastAPI greeting from our context provider
    // We are using a context provider so that we can pass the data from 
    // a POST request to the drinkList without passing up via props
    const { drinkList, fastApiGreeting } = useContext(AppContext);

    return (
        <div>
            <div className={styles.flexbox}>  
                <div className={styles.component}>
                    <h2>Consider these beverages</h2>
                    {drinkList.map(drink => <DrinkItem key={drink.id} drinkObj={drink}/>)}
                </div>

                <div className={styles.banner}>
                    <h1 className={styles.fastApi}>{fastApiGreeting}</h1>
            </div>
        </div>  
            <hr />
            <PostFormDrink />   {/* Our form to allow POST requests to the server */}
        </div>
    )
}

export default Drinks;