import styled from 'styled-components';
import { colors } from 'utils/styles';

export const CommentSectionWrapper = styled.div`
  #add-comment {
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
  }
`;

export const AvatarWrapper = styled.div`
  overflow: hidden;
  height: 60px;
  width: 60px;
  min-height: 60px;
  min-width: 60px;
  border-radius: 30px;
  
  img {
    width: 60px;
    filter: invert(100%);
  }
`;

export const CommentHeadWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  
  h6 {
     margin: 0;
     margin-top: 20px;
     margin-right: 10px;
     display: inline-block;
  }
  
`;

export const CommentBodyWrapper = styled.div`
  display: flex;
  p {
    margin-left: 10px;
  }
`;

export const CommentWrapper = styled.div`
  position: relative;
  padding: 10px 50px
  
  hr {
    margin: 0;
  }
  margin-bottom: 15px;
`;

export const ReviewMarkWrapper = styled.div`
  position: absolute;
  bottom: -10px;
  right: 20px;
  display: flex;
  margin-right: 5px;
`;
