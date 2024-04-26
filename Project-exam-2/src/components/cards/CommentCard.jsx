import Emoji from "../emoji/Emoji";
import Comment from "../comments/Comment";
import LikesButton from "../buttons/LikesButton";
import PublishButton from "../buttons/PublishButton";
import CloseButton from "../buttons/CloseButton";
import { StyledCommentCard, StyledButtonCard } from "./StyledCard.styles";

function CommentCard() {

    return (  
        <>
          <StyledCommentCard>
              <div>
                  <Emoji />
                  <StyledButtonCard>
                     <LikesButton />
                     <CloseButton />
                  </StyledButtonCard>
              </div>
             
              <div>
                <h3>Profile Name:</h3>
                  <Comment />
              </div>

              <div>
                <h4>Write a comment:</h4>
                <Emoji />
                <PublishButton />
              </div>
          </StyledCommentCard>
        </>
    );
}

export default CommentCard;