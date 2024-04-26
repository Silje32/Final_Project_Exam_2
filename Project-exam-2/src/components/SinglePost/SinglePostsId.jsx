import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { NEW_URL } from "../../constants/Api";
import SinglePostIdCard from "./SinglePostsIdCard";


function SinglePostId() {

    const params = useParams();
    const { id }  = params

    const [postid, setPostid] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [isError, setisError] = useState(false);


    useEffect(() => {
        async function getData(id) {
          console.log(id);
          
          const options = {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify(),
          };


          try {
            setisLoading(true);
            setisError(false);

            const response = await fetch(`${NEW_URL}/social/posts/${id}`, options);

            if (response.ok) {
              const json = await response.json();
              return setPostid(json);
            }

            throw new Error();
          } catch (Error) {
            console.log(Error);
            setisError(true);
          } finally {
            setisLoading(false);    
          } 
        } 
        
        
         getData();
       }, [id]); 

       if (isLoading) {
        return <div>Loading single post...</div>;
      }
  
       if (isError) {
        return <div>Error loading single post</div>;
      }
    

      return (
        <>
          <div>Individual post page: {params.id}</div>
          {postid.map((post, id) => (
            <SinglePostIdCard key={id} post={post}  />
          ))}
        </>
      );
}

export default SinglePostId;  