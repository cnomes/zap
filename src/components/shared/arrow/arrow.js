import React from "react"
import styled from "styled-components"

const Link = styled.a`
  position: relative;
  height: 100px;
  width: 100px;
  overflow: hidden;

  margin: 10px;
  align-self: center;

  @keyframes shuffle {
    0%,
    100% {
      transform: translate(0, 0);
    }

    50% {
      transform: translate(0, 10px);
    }
  }

  svg {
    position: absolute;
    animation: shuffle 1s ease-in-out infinite;

    height: auto;
    width: 50px;
    left: 25px;

    color: #333333;

    &:first-child {
      top: 25px;
      animation-delay: 50ms;
    }
  }
`

const ChevronDown = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
  >
    <path
      fill="currentColor"
      d="M443.5 162.6l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L224 351 28.5 155.5c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.7 4.8-12.3.1-17z"
    />
  </svg>
)

const Arrow = props => (
  <Link {...props}>
    <ChevronDown />
    <ChevronDown />
  </Link>
)

export default Arrow
