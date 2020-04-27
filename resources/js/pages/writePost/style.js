import styled from 'styled-components'



export const WriteWrapper = styled.div`

  width : 70%;
  margin : 0 auto;
  border : 1px solid #eee;
  padding : 20px;
  box-shadow : 0 0 3px rgba(0, 0, 0, .2);
  overflow : hidden
  .quill{
    height : 360px;
  }

`;


export const Title = styled.div`

  font-size : 32px;
  line-height : 56px;
  padding : 5px 10px;
  box-sizing : border-box;
  border-bottom : 1px solid #eee;

`;

export const PostTitle = styled.input`

  padding : 5px 10px;
  box-sizing : border-box;
  width : 100%;
  margin-bottom : 20px;

  &placeholder{
    font-size : 24px;
  }

`;


export const  PostCategory = styled.div`

  padding : 5px 10px;
  box-sizing : border-box;
  margin-bottom : 20px;

  .dropdown{
    width : 100%;
  }
`;
