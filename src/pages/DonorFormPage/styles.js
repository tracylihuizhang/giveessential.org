import styled from "styled-components";
import { Input, Label } from 'reactstrap';

export const Flex = styled.div`
  display: flex;
`;

export const RowFlex = styled(Flex)`
  align-items: center;
`;

export const ColumnFlex = styled(Flex)`
  flex-direction: column;
`;

export const Screen = styled(ColumnFlex)`
  width: 100vw;
`;

export const CenteredFlex = styled(ColumnFlex)`
  align-items: center;
`;

export const Header = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  margin-top: 48px;
  margin-bottom: 12px;
`;

export const Subtitle = styled.h1`
  font-size: 14px;
  width: 55vw;
  text-align: center;
`;

export const SubmitButton = styled.div`
  margin-top: 50px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  width: 40vw;
  height: 6vw;
  background-color: ${(props) => (props.disabled ? "#dddddd" : "#8CC9BA")};
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.h1`
  font-size: 20px;
  margin-top: 8px;
  width: 55vw;
  text-align: center;
  color: ${(props) => (props.disabled ? "#8CC9BA" : "#ffffff")};
`;


export const StyledTitle = styled.h1`
  font-family: 'Archivo', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 44px;
  text-align: center;
  & span {
    display: block;
  }
  margin-bottom: 12px;
  margin-top: 48px;
`;
export const StyledInput = styled(Input)`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  border: ${({ noBorder }) => (noBorder ? 'none' : '1px solid #8cc9ba')};
  border-radius: ${({ noBorder }) => (noBorder ? 0 : '5px')};
  border-bottom: ${({ underLine }) =>
    underLine ? '1px solid #8CC9BA' : '1px solid #8CC9BA'};
`;
export const StyledLabel = styled(Label)`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  display: flex;
  align-items: center;
  margin: 0;
`;
export const StyledText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
`;

export const StyledButton = styled.button`
  display: block;
  margin: 22px auto;
  border: none;
  border-radius: 12px;
  width: 50%;
  background-color: ${(props) => (props.disabled ? '#dddddd' : '#8CC9BA')};
  color: ${(props) => (props.disabled ? '#8CC9BA' : '#ffffff')};
  font-size: 20px;
  padding: 15px 0;
`;

export const StyledContainer = styled.div`
  flex-basis: 55%;
  margin-top: 50px;
`;