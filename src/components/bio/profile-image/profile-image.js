import React from "react"
import styled from "styled-components"
import profile1 from "../../../images/profile-1-square.jpg"
import profile2 from "../../../images/profile-2-square.jpg"

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

const Image = styled.div`
  width: 100%;
  height: 100%;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  background-image: url(${profile1});
  &:hover {
    background-image: url(${profile2});
  }

  ${clippath}
`

const Wrapper = styled.div`
  width: 150px;
  height: 150px;

  background-color: #fafafa;
  padding: 10px;

  ${clippath}
`

const ProfileImage = ({ image }) => (
  <Wrapper>
    <Image />
  </Wrapper>
)

export default ProfileImage
