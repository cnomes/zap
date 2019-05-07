import React from "react"
import styled from "styled-components"

const ItemWrapper = styled.li`
  display: block;
  text-decoration: none;
  margin-right: 10px;
`
// TODO seperate component
const ItemButton = styled.a`
  display: block;

  box-sizing: border-box;
  width: 40px;
  height: 40px;
  padding: 10px;
  border-radius: 50%;

  background-color: #d3d3d3;
  color: #fafafa;

  box-shadow: rgba(0, 0, 0, 0.2) 0 2px 2px;

  &:hover {
    background-color: #c4c4c4;
  }

  &:active {
    box-shadow: rgba(0, 0, 0, 0.2) 0 2px 2px inset;
  }
`

const Item = ({ href = "", children }) => (
  <ItemWrapper>
    <ItemButton href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </ItemButton>
  </ItemWrapper>
)

export default Item
