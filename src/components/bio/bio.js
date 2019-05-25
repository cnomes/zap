import React from "react"
import styled from "styled-components"

import Section from "../shared/section"

import ProfileImage from "./profile-image"

const Me = styled.div`
  flex: 1;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: #f4d75a;
`

const MyWork = styled.div`
  flex: 1;
`

const WaveEmoji = () => <span aria-label="image">👋</span>

const Bio = () => (
  <Section id="bio" direction="row">
    <Me>
      <ProfileImage />
      <h1>
        <WaveEmoji />
        &nbsp; Hi my name is Carlo,
      </h1>
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sapien
        tellus, fermentum eu feugiat sed, imperdiet et libero. Donec vel est id
        purus tempus sagittis.
      </h2>
    </Me>
    <MyWork />
  </Section>
)

export default Bio
