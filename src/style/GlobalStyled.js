import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const Colors = {
  pointColor: "#FF5C00",
};

export const PaddingValue = {
  pcWrap: "4.17%",
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
<<<<<<< HEAD
    width: 100%;
    /* overflow-x: hidden; */
=======
>>>>>>> 6ccea8e8b0d4aedbbceb2c5c469edf5c2a56ae12
}

ul, li{
    list-style: none;
}

a{
    text-decoration: none;
    color: white;
}
`;
