import styled from "styled-components";
import { PageProps } from "./styleTypes";

export const SIDEBAR_WIDTH = 400;

export const InputField = styled.input`
  font-family: "Inter";
  outline: none;
  background-color: inherit;
  border: none;
  color: #fff;
  font-size: 18px;
  width: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 4px 0;
`;

export const InputContainer = styled.div`
  background-color: #131313;
  padding: 12px 16px;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
`;

export const InputLabel = styled.label`
  display: block;
  color: #8f8f8f;
  font-size: 14px;
  margin: 4px 0;
`;

export const Button = styled.button`
  width: 100%;
  outline: none;
  border: none;
  font-family: "Inter";
  font-size: 16px;
  background-color: #2b09ff;
  color: #fff;
  padding: 25px;
  border-radius: 10px;
  font-weight: 500;
  transition: 250ms background-color ease;
  transition: 500ms border ease;
  border: 2px solid #2b09ff;
  &:hover {
    cursor: pointer;
    background-color: #3415ff;
  }
  &:focus {
    background-color: #4f34ff;
    border: 2px solid #fff;
  }
  &:active {
    background-color: #3a1cff;
  }
`;

export const Page = styled.div<PageProps>`
  height: 100%;
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  background-color: #1a1a1a;
`;

export const ConversationSidebarStyle = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${SIDEBAR_WIDTH}px;
  background-color: #1a1a1a;
  border-right: 1px solid #5454543d;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ConversationSidebarHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: ${SIDEBAR_WIDTH}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  box-sizing: border-box;
  background-color: #151515;
  height: 100px;
  border-bottom: 1px solid #5454543d;
  & h1 {
    font-weight: 400;
  }
`;

export const ConversationChannelPageStyle = styled.div`
  height: 100%;
  margin-left: ${SIDEBAR_WIDTH}px;
`;

export const ConversationPanelStyle = styled.div`
  height: 100%;
  margin-left: ${SIDEBAR_WIDTH}px;
`;

export const ConversationSidebarContainer = styled.div`
  margin-top: 100px;
`;

export const ConversationSidebarItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 15px 34px;
  box-sizing: border-box;
  border-bottom: 1px solid #5454543d;
`;
