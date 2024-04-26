import { useState, useEffect } from 'react';
import { StyledDeletePostButton } from "./StyledDeleteButton";
import { NEW_URL } from "../../constants/Api";


function DeletePostButton() {

  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

  useEffect(() => {    
      async function getData() {
          console.log(data);
      
      const options = {
        headers: { "Content-Type": "application/json" },
        method: "DELETE",
      };

      try {
        setisLoading(true);
        setisError(false);

        const response = await fetch(`${NEW_URL}/social/posts/${id}`, options);
        const json = await response.json();

        setData(json);
      } catch (error) {
        console.log(error);
        setisError(true);
      } finally {
        setisLoading(false);    
      } 
    } 
      
      getData();
    }, [id]); 


    if (isLoading) {
      return <div>Delete this post...</div>;
    }
  
    if (isError) {
      return <div>Deleting this post was not possible</div>;
    }

    function onButtonClick() {

      if (id) {

      }
            
    }

    return (
      <>
        <StyledDeletePostButton onClick={onButtonClick}>
           DELETE
        </StyledDeletePostButton>
      </>       
    );
}

export default DeletePostButton;