import Following from "../following/Following";
import { StyledFollowingCard } from "./StyledCard.styles";


function FollowingCard() {

    return (  
       <>
         <StyledFollowingCard>
            <h3>FOLLOW</h3>      
            <Following />  
         </StyledFollowingCard>
       </>
    );
}

export default FollowingCard;