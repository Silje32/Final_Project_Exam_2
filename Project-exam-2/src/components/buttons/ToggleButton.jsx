import { StyledBaseButton } from "./Button.styles";

function ToggleButton() {

    return ( 
        <div>
            <StyledBaseButton $isActive={false} onClick={() => ToggleButton()}>
                REGISTER
            </StyledBaseButton>
        </div>        
    );
}

export default ToggleButton;