import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const Colors = {
  pointColor: "#FF5C00",
  gray: "#e0e0e0",
};

export const PaddingValue = {
  pcWrap: "4.17%",
  pcInnerWrap: "6.25%",
};

export const GlobalStyled = createGlobalStyle`
${reset}

*{
    box-sizing: border-box;
}

body{
    background-color: #1d1d1d;
    color: white;
    font-family: 'Noto Sans KR', sans-serif;
    width: 100%;

}

ul, li{
    list-style: none;
}

a{
    text-decoration: none;
    color: white;
}
`;
