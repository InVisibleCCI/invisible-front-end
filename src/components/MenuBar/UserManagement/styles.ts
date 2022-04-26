import styled from "styled-components";
import { colors } from "utils/styles";

export const UserManagementWrapper = styled.div`
span{
    margin-left : 10px;
}
#profil-link{
    height:40px;
    width:40px;
    margin-left:10px;
}
#user-management div{
    display: flex;
    justify-content: flex-end;
    font-size: 20px;
    align-items:center;
}
&> div {
    a {
        text-decoration:none;
        color:${colors.textColor} 
    } 
}

@media (max-width : 500px){
    #user-management div{
        display: flex;
        flex-direction: column-reverse;
        font-size: 12px;
        align-items:center;
        justify-content:space-around;
    }
    #user-management{
        height:80px;
    }
    #profil-link{
        height:40px;
        width:40px;
        margin-left:0px;
        margin-top:10px;
    }
    span{
        margin-left : 0px;
    }
}

`