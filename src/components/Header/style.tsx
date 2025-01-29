/* eslint-disable no-unused-vars */
import styled from "styled-components";

export const Container = styled.div`
    overflow-y: hidden;

header {
    width: 100vw;
    background-color: #ffffff;
    padding: 10px 200px;
    height: 60px;
    display: flex;
    justify-content: space-between;

    .header-logo {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        img {
            width: auto;
            height: 100%;
        }

        h1 {
            font-size: 20px;
            font-family: "Abyssinica SIL";
            color: #000000;
        }
    }

    .header-menu {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 20px;

        ul {
            display: flex;
            list-style: none;
            gap: 20px;

            li {
                font-size: 17px;
                color: #000000;
                cursor: pointer;
            }
        }
    }
}

`;

