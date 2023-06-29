import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


export const AppContext = React.createContext({});

export function AppContextProvider({ children }) {

    // Set our two states for this page
    // 1 - our drink list which we will fetch from 'localhost:8000/drink'
    // 2 - our greeting from the root handler 'localhost:8000/'
    const [drinkList, setDrinkList] = useState([]);
    const [snackList, setSnackList] = useState([]);
    const [expressGreeting, setExpressGreeting] = useState('');
    const [fastApiGreeting, setFastApiGreeting] = useState('');

    // Axios async to populate the above states
    useEffect(() => {
        axios.get("http://localhost:8000/drinks")
        .then(res => setDrinkList(res.data))
    }, []);

    useEffect(() => {
        axios.get("http://localhost:3000/snacks")
        .then(res => setSnackList(res.data))
    }, [])

    useEffect(() => {
        axios.get("http://localhost:8000")
        .then(res => setFastApiGreeting(res.data.message));
    }, []);

    useEffect(() => {
        axios.get("http://localhost:3000")
        .then(res => setExpressGreeting(res.data));
    }, []);

    function addToDrinkList(item) {
        setDrinkList([...drinkList, item]);
    }

    function addToSnackList(item) {
        setSnackList([...snackList, item]);
    }

    const context = {
        drinkList, fastApiGreeting, addToDrinkList, snackList, expressGreeting, addToSnackList
    }

    return (
        // pass context variables as value prop
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    )
}