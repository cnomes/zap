import styled from "styled-components"

const Section = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: ${({ direction }) => direction || "column"};

  position: relative;
  scroll-snap-align: start;

  background-color: ${({ color }) => color};
`
export default Section
