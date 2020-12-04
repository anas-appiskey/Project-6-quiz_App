import styled, { createGlobalStyle } from "styled-components";

import bgImg from "./img/cafe-3537801_1920.jpg";

export const GStyle = createGlobalStyle`
html {
    height: 100%;
}
body{
    background-image: url(${bgImg});
    background-size: cover ;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
}
*{
    box-sizing : border-box;
    font-family : 'Catamaran', sans-serif;
}
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }
  .score {
    font-size: 2rem;
    margin: 0;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    -webkit-filter: drop-shadow(2px 2px #0085a3);
  }
  h1 {
    background-image: linear-gradient(180deg, #f2ddb7, #fff3cb);
    /* background-size: 100%; */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    /* -webkit-filter: drop-shadow(2px 2px #0085a3); */
    /* filter: drop-shadow(2px 2px #0085a3); */
    font-size: 86px;
    margin-bottom: 0px;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0px;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }
`;
