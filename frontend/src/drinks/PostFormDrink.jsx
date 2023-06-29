import React, { useState, useContext } from 'react';
import { AppContext } from '../AppContextProvider';
import axios from 'axios';

const PostFormDrink = () => {

  const { addToDrinkList, drinkList } = useContext(AppContext);
  const len = drinkList.length + 1;

  const [item, setItem] = useState({
    id: '',
    drink_name: '',
    rating: ''
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setItem({ ...item, [name]: value, id: len });
  }

  const onSubmit = (event) => {
    event.preventDefault();

    console.log(item);

    axios.post("http://localhost:8000/drinks",item)
    .then(res => {
      // Add our item from the POST request to the drinksList
      if (res.status == 200) {
        addToDrinkList(item);
        setItem({
          id: '',
          drink_name: '',
          rating: ''
        });
      }
    });
  }

  return (
    <>
    <h2 style={{paddingLeft: '5vw'}}>Something else?</h2>
    <form onSubmit={onSubmit}>
      {/* <label> */}
        {/* ID: */}
        {/* <br /> */}
        <input hidden={true} type="number" name="id" value={drinkList.length} onChange={onChange} />
      {/* </label> */}
      <label>
        Drink name:
        <br />
        <input type="text" name="drink_name" value={item.drink_name} placeholder={"e.g. Boba"} onChange={onChange} />
      </label>
      <label>
        Rating:
        <br />
        <input type="number" name="rating" min="0" max="10" value={item.rating} placeholder={0} onChange={onChange} />
      </label>
      <button type="submit">Append</button>
    </form>
    </>
  );
}

export default PostFormDrink;
