import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  padding: 20px;
  max-width: 1000px;
  transition: all 0.25s;

  .menu_button {
    cursor: pointer;
    display: none;

    @media (max-width: 684px) {
      display: flex;
    }
  }
  .active {
    display: flex;
    flex-direction: column;
    right: 0;
    padding: 20px;
    transition: all 0.25s;
    top: 70px;
    background-color: #262626;
  }
`;

export const Nav = styled.nav`
  display: flex;
  list-style: none;
  gap: 20px;

  > li > a {
    text-decoration: none;
  }

  @media (max-width: 684px) {
    display: none;
    position: absolute;
    right: -100vh;
  }
`;