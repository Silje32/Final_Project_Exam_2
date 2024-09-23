import ViewAllProfilesButton from "../buttons/ViewAllProfilesButton";
import PostList from "../posts/PostList";
import ProfileFilter from "../searchbar/ProfileFilter";
import { StyledHomeCard, StyledFlex } from "./StyledCard.styles";


function HomeCard() {

    return (  
       <>
         <StyledHomeCard>
          <StyledFlex>
           <ViewAllProfilesButton />
              <ProfileFilter />
              <PostList />        
          </StyledFlex>   
         </StyledHomeCard>
       </>
    );
}

export default HomeCard;