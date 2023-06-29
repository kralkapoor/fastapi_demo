import { useContext } from "react";                     
import { AppContext } from "../AppContextProvider";
import SnackItem from "./SnackItem";            
import PostFormSnack from "./PostFormSnack";
import styles from './Snacks.module.css';


const Snacks = () => {

    // Grab our snackList and Express greeting from our context provider
    // We are using a context provider so that we can pass the data from 
    // a POST request to the drinkList without passing up via props
    const { snackList, expressGreeting } = useContext(AppContext);

    return (
        <div>
            <div className={styles.flexbox}>  
            <div className={styles.component}>
                <h2>Consider these snacks</h2>
                {snackList.map(snack => <SnackItem key={snack.id} snackObj={snack}/>)}
            </div>

            <div className={styles.banner}>
                <h1 className={styles.express}>{expressGreeting}</h1>
            </div>
        </div>    
            <hr />
            <PostFormSnack />   {/* Our form to allow POST requests to the server */}
        </div>
    )
}

export default Snacks;