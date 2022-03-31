import styled from "styled-components";
import { colors } from "utils/styles";

export const UserManagementWrapper = styled.div`
span{
    margin-left : 10px;
}
#user-management div{
    width: 240px; 
    display: flex;
    justify-content: flex-end;
    font-size: 20px;
    align-items:center;
}
.avatar-user{
    width: 40px; 
    height: 40px;
    margin-left:10px;
    img{
        width:100%;
        height:100%; 
        border-radius: 50%
    }
}
&> div {
    a {
        text-decoration:none;
        color:${colors.textColor} 
    } 
}

`