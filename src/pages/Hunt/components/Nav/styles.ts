import styled from 'styled-components';

export const Header = styled.div`
  div {
    width: 720px;
  }
`;

export const Nav = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;

  .nav-title {
    img {
      float: left;
      width: 75px;
      height: 75px;
    }
    div {
      float: right;
      margin-left: 10px;
    }
  }

  .nav-btn {
    display: flex;
    justify-content: space-between;
    button {
      width: 136px;
      height: 60px;
      padding: 6px 12px;
      img {
        width: 14px;
        height: 14px;
      }
      span {
        font-size: 24px;
      }
    }
  }
`;

export const NavTitle = styled.div`
  img {
    float: left;
    width: 75px;
    height: 75px;
  }
  div {
    float: right;
    margin-left: 10px;
  }
`;
