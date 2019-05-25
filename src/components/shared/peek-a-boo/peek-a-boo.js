import React from "react"
import styled from "styled-components"

const Hidden = styled.div`
  position: absolute;
  top: -60px;
  z-index: 1;

  box-sizing: border-box;
  width: 100%;
  padding: 5px;

  text-align: center;
  font-size: 50px;
`

const SeeNoEvilEmoji = () => (
  <span role="img" aria-label="See No Evil">
    🙈
  </span>
)

const HearNoEvilEmoji = () => (
  <span role="img" aria-label="Hear No Evil">
    🙉
  </span>
)

const usePeekABoo = delay => {
  const [peekABoo, setPeekABoo] = React.useState(false)

  React.useEffect(() => {
    const interval = setInterval(
      () => setPeekABoo(prevState => !prevState),
      delay
    )
    return () => clearInterval(interval)
  }, [])

  return peekABoo
}

const PeekABoo = ({ delay = 3000 }) => {
  const peekABoo = usePeekABoo(delay)
  return <Hidden>{peekABoo ? <HearNoEvilEmoji /> : <SeeNoEvilEmoji />}</Hidden>
}

export default PeekABoo
