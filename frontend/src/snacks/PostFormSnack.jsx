import React, { useState, useContext } from 'react';
import { AppContext } from '../AppContextProvider';
import axios from 'axios';

const PostFormSnack = () => {

  const { addToSnackList, snackList } = useContext(AppContext);
  const len = snackList.length + 1;

  const [item, setItem] = useState({
    id: '',
    snack_name: '',
    rating: ''
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setItem({ ...item, [name]: value, id: len });
  }

  const onSubmit = (event) => {
    event.preventDefault();

    console.log(item);
    
    axios.post("http://localhost:3000/snacks",item)
    .then(res => {
      // Add our item from the POST request to the snacksList
      if (res.status == 200) {
        addToSnackList(item);
        setItem({
          id: '',
          snack_name: '',
          rating: ''
        });
      }
    });
  }

  return (
    <>
    <h2 style={{paddingLeft: "5vw"}}>Something else?</h2>
    <form onSubmit={onSubmit}>
      {/* <label>
        ID:
        <br /> */}
        <input hidden={true} type="number" name="id" value={item.id} onChange={onChange} />
      {/* </label> */}
      <label>
        Snack name:
        <br />
        <input type="text" name="snack_name" value={item.snack_name} placeholder={"e.g. Sunflower seeds"} onChange={onChange} />
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

export default PostFormSnack;
