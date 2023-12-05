import { styled } from "styled-components";
import { Colors, PaddingValue } from "../style/GlobalStyled";

export const SHeader = styled.header`
  width: 100%;
  padding: 20px ${PaddingValue.pcWrap};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 900;
  /* @media screen and (max-width: 530px) {
    overflow: hidden;
  } */
`;

export const LeftWrap = styled.div`
  display: flex;
`;

export const Logo = styled.h3`
  font-size: 40px;
  font-weight: 700;
  color: ${Colors.pointColor};
  margin-right: 85px;
  @media screen and (max-width: 1024px) {
    margin-right: 70px;
  }
  @media screen and (max-width: 890px) {
    margin-right: 40px;
    font-size: 32px;
  }
  @media screen and (max-width: 530px) {
    margin-right: 0;
  }
`;

export const MenuWrap = styled.ul`
  display: flex;
  position: relative;

  li {
    display: flex;

    align-items: center;
    font-size: 20px;
    font-weight: 500;
    margin-right: 50px;
    cursor: pointer;
    @media screen and (max-width: 890px) {
      p {
        display: none;
      }
      margin-right: 0;
    }
    @media screen and (max-width: 530px) {
      display: none;
    }
  }
`;

export const HeaderIcon = styled.h3`
  font-size: 22px;
  margin-right: 10px;
  cursor: pointer;
  @media screen and (max-width: 890px) {
    margin-right: 25px;
  }
  @media screen and (max-width: 530px) {
    display: none;
  }
`;

export const RightWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  li {
    margin-left: 50px;
    font-size: 16px;
    color: ${Colors.gray};
    @media screen and (max-width: 890px) {
      font-size: 14px;
      margin-left: 35px;
    }
    @media screen and (max-width: 530px) {
      display: none;
    }
  }
`;

export const MobileMenu = styled.div`
  display: none;
  @media screen and (max-width: 530px) {
    display: block;
    font-size: 22px;
    cursor: pointer;
  }
`;

export const MovileSlideMenu = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #313131;
  padding: 20px 8%;
  position: fixed;
  left: ${(props) => props.$left};
  top: 0;
  transition: 0.3s;
  overflow: scroll;
  z-index: 10;
  display: ${(props) => props.$display};
`;
export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const MHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  margin-bottom: 10px;
`;
export const MLogo = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: ${Colors.pointColor};
`;
export const Out = styled.div`
  font-size: 20px;
`;
export const Section1 = styled.div`
  h3 {
    font-size: 18px;
    line-height: 1.3;
    b {
      color: ${Colors.pointColor};
    }
    margin-bottom: 30px;
  }
`;
export const Btn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
`;
export const Login = styled.div`
  width: 120px;
  height: 40px;
  border: 1px solid none;
  border-radius: 40px;
  line-height: 34px;
  background-color: ${Colors.pointColor};
  margin-right: 20px;
`;
export const SignUp = styled.div`
  width: 120px;
  height: 40px;
  border: 1px solid ${Colors.pointColor};
  color: ${Colors.pointColor};
  border-radius: 40px;
  line-height: 34px;
`;
export const Section2 = styled.div`
  padding: 40px 0;
  display: flex;
  flex-direction: column;
`;
export const HomeTap = styled.div`
  position: relative;
  align-items: center;
  font-size: 20px;
  display: flex;
  margin-left: 0;
  padding: 15px 0;
  border-bottom: 0.5px solid #bcbcbc;
  color: ${Colors.pointColor};
  p {
    font-size: 16px;
    color: white;
    margin-left: 20px;
  }
  z-index: 20;
`;
export const SearchTap = styled.div`
  position: relative;
  align-items: center;
  font-size: 20px;

  display: flex;
  margin-left: 0;
  padding: 15px 0;
  border-bottom: 0.5px solid #bcbcbc;
  color: ${Colors.pointColor};
  p {
    font-size: 16px;
    color: white;
    margin-left: 20px;
  }
  z-index: 20;
`;
export const MovieTap = styled.div`
  position: relative;
  align-items: center;
  font-size: 20px;
  /* overflow: hidden; */
  display: flex;
  margin-left: 0;
  padding: 15px 0;
  border-bottom: 0.5px solid #bcbcbc;
  color: ${Colors.pointColor};
  cursor: pointer;
  p {
    font-size: 16px;
    color: white;
    margin-left: 20px;
  }
  z-index: 20;
`;
export const Left = styled.div`
  display: flex;
`;
export const Right = styled.div`
  color: ${Colors.gray};
  font-size: 16px;
  position: absolute;
  right: 0;
`;

export const Wrap = styled.div`
  position: absolute;
  top: ${(props) => props.$top};
  opacity: ${(props) => props.$opacity};
  width: 83%;
  background-color: #313131;
  /* padding: 30px 40px; */
  transition: 0.5s;
  z-index: 0;
`;

export const GenreList = styled.ul`
  li {
    padding: 15px 12%;
    display: block !important;
    font-size: 16px !important;
    cursor: pointer;
    &:last-child {
      margin-bottom: 0;
    }
    & a {
      color: ${Colors.gray};
    }
  }
  li:hover {
    background-color: #3c3c3c;
  }
`;
