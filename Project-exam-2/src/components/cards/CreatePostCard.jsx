import CreatePost from "../posts/CreatePost";
import PublishButton from "../buttons/PublishButton";
import CloseButton from "../buttons/CloseButton";
import { StyledCreatePostListCard } from "../posts/CreatePostList.styles";

function CreatePostCard() {

    return (  
        <>
          <StyledCreatePostListCard>
               <div>
                  <h2>CREATE A POST</h2>
                  <CreatePost />
               </div> 
               <div>
                <PublishButton />
                <CloseButton />
              </div>
          </StyledCreatePostListCard>
        </>
    );
}

export default CreatePostCard;