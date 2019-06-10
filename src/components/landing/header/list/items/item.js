import React from "react"
import styled from "styled-components"

import Button from "common/button"

const ItemWrapper = styled.li`
  display: block;
  text-decoration: none;
  margin-right: 10px;
`

const Item = ({ href = "", children }) => (
  <ItemWrapper>
    <Button.Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      size="40px"
    >
      {children}
    </Button.Link>
  </ItemWrapper>
)

export default Item
