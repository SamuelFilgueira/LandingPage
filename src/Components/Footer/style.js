import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  padding: 12px;
  width: 100%;
  background-color: #333333;


  .footer-menu {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding: 35px;
    font-size: 13px;

    @media (max-width: 684px) {
      padding: 15px 4px;
      flex-direction: column;
      align-items: flex-start;
    }

    > ul > li {
      list-style: none;
      text-decoration: none;
    }
    > ul > li > a {
      text-decoration: none;
    }
  }

  .social {
    display: flex;
    list-style: none;
    align-items: center;

    > li {
      padding: 0 5px 0 5px;
      font-size: 1.5rem;
    }
  }
`;

