import React from "react";
import styled from "styled-components";

function SideBarOption({ Icon, title, addChannelOption }) {
  return (
    <SideBarOptionContainer>
      {Icon && (
        <Icon
          fontSize="large"
          style={{
            padding: 10,
          }}
        />
      )}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SideBarOptionChannel>
          <span>#</span> {title}
        </SideBarOptionChannel>
      )}
    </SideBarOptionContainer>
  );
}

export default SideBarOption;

const SideBarOptionContainer = styled.ul`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;

  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }
`;
const SideBarOptionChannel = styled.li``;
