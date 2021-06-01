import styled from 'styled-components';

export const Nav = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;

  .nav-title {
    img {
      float: left;
      width: 75px;
      height: 75px;
      border-radius: 35px;
    }
    div {
      float: right;
      margin-top: 10px;
      margin-left: 5px;
      h2 {
        margin-left: 1px;
      }
      div {
        font-size: 20px;
        color: #b7bcc0;
      }
    }
  }

  .nav-btn {
    height: 75px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      height: 40px;
      margin-left: 10px;
      padding: 6px 12px;
      display: flex;
      align-items: center;
      border: none;
      border-radius: 12px;
      img {
        width: 14px;
        height: 14px;
      }
      strong {
        margin-left: 5px;
        font-size: 18px;
        line-height: 40px;
        color: #ffffff;
      }
    }
  }
`;
