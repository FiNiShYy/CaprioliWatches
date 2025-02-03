/* eslint-disable no-unused-vars */
import styled from "styled-components"

export const Container = styled.div`
  overflow-y: hidden;

  .banner {
    width: 100vw;

    img {
      width: 100%;
      height: auto;
    }
  }

  .info-banner {
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
    align-items: center;
    background-color: #F4F4F4;

    .info-banner-content {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;

      img {
        width: 50px;
        height: auto;
      }

      p {
        font-size: 20px;
        color: #000000;
        line-height: 20px;
      }
    }
  }

  .section-favorito {

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .favorito-images {
      display: flex;
      flex-direction: row;
      gap: 40px;
      align-items: center;
      justify-content: center;

      img {
        width: 300px;
      }
    }
  }

`
