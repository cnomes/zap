import React from "react"
import styled from "styled-components"
import profile1 from "../../images/profile-1-square.jpg"
import profile2 from "../../images/profile-2-square.jpg"

const clippath = `
clip-path: polygon(
  50% 0%,
  83% 12%,
  100% 43%,
  94% 78%,
  68% 100%,
  32% 100%,
  6% 78%,
  0% 43%,
  17% 12%
);
`
const ColorOverlay = styled.div`
  background-color: rgba(244, 215, 90, 0.2);
  z-index: 1;
`

const Image = styled.div`
  background-image: url(${profile1});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  filter: saturate(17%) brightness(105%) contrast(215%);

  ${clippath};
`

const Wrapper = styled.div`
  position: relative;
  > * {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  margin: 20px;

  width: ${({ size }) => size};
  height: ${({ size }) => size};

  ${clippath};
`

const ProfileImage = ({ size = "150px", ...props }) => (
  <Wrapper size={size} {...props}>
    <ColorOverlay />
    <Image />
  </Wrapper>
)

export default ProfileImage
