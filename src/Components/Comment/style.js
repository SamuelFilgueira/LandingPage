import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    max-width: 980px;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    margin-top: 60px;
    padding: 20px;

    > form {
        width: 50%;

        @media (max-width: 684px){
            width: 100%;
            padding: 10px;
        }

        > h2 {
            color: #fff;
            padding-bottom: 12px;
        }
    }
`;

