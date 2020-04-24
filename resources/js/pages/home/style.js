import styled from 'styled-components'


export const HomeWrapper = styled.div`
  width : 80%;
  margin : auto;
  overflow : hidden;

`;

export const HomeLeft = styled.div`
  float : left;
  width 70%;
  padding-right : 50px;

  .homeBanner{
    display : block;
    width : 100%;
    border-radius : 5px;
  }
`;

export const HomeRight = styled.div`

`;


/* for post list component */
export const ListCategory = styled.div`
  overflow : hidden;
  width : 100%;
  padding: 16px 24px;
  border: 1px solid #eee;
  box-shadow : 0 0 3px rgba(0, 0, 0, .2);
  border-radius : 5px;
  margin-top : 5px;
  margin-bottom : 5px;
  margin-right : 18px;
`;

export const CategoryItem  = styled.span`
  line-height : 20px;
  font-size : 15px;
  text-align : center;
  margin-right : 18px;
  cursor: default;
  :hover{
    color:#1890ff;
  }
`;

export const ListContent = styled.div`
  border: 1px solid #eee;
  border-radius : 5px;
  box-shadow : 0 0 3px rgba(0, 0, 0, .2);
`;

export const ListOrder = styled.div`
  width : 100%;
  overflow : hidden;
  padding-top : 20px;
  margin-left : -12px;
  .buttonOrder{
    margin-left:12px;
  }
`;

