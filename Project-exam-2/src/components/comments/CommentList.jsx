import LikesButton from "../buttons/LikesButton";
import CloseButton from "../buttons/CloseButton";
import { StyledButtonCard } from "../cards/StyledCard.styles";
import { StyledCommentList } from "./CommentList.styles";

export function CommentList({ 
    comments: { body, author } 
}) {

    return ( 
        <>
         <StyledCommentList>
            <p>{body}</p>
            <h4>{author}</h4>
            <StyledButtonCard>
                <LikesButton />
                <CloseButton />
            </StyledButtonCard>
         </StyledCommentList>
        </>
    );
}

export default CommentList;