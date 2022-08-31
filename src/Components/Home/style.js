import styled from "styled-components";

export const Container = styled.div`
  max-width: 980px;
  margin: auto;

  .headset-container{
    display: flex;
    justify-content: space-around ;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 70px;

    @media (max-width: 966px){
      > img {
        max-width: 100%;
      }
    }

    @media (max-width: 684px){
      img {
        margin-bottom: 32px;

      }
    }
  };

  .headsetText {
    text-align: end;
    font-size: 1.7rem;
  }

`;

export const Description = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 70px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 966px) {
    justify-content: center;
    margin-bottom: 120px;
    padding: 20px;

    > img {
      max-width: 100%;
    }
  }

  > img {
    width: 450px;
    padding-right: 10px;
  }

  .description-text {
    max-width: 500px;
    font-size: 1.5rem;

    .description-title {
      margin-bottom: 30px;
      color: #e00e31;
    }
  }
`;
