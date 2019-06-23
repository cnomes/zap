import React from "react"
import styled from "styled-components"
import debounce from "lodash.debounce"

const Main = styled.main`
  flex: 1;

  overflow-y: auto;
  overflow-x: hidden;

  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
`
const SectionContext = React.createContext()
const useSection = () => {
  const context = React.useContext(SectionContext)

  if (!context)
    throw Error(
      "useSection is only available for children of a SectionContext provider"
    )

  return context
}

const useSectionList = () => {
  const [sections, setSections] = React.useState({})
  const registerSection = ({ id, node }) =>
    setSections(prevSections => ({ ...prevSections, [id]: node }))

  return { sections, registerSection }
}

const MainContainer = props => {
  const mainRef = React.useRef(null)
  const { sections, registerSection } = useSectionList()

  const setScrollToHash = () => {
    const id = window.location.hash.substring(1)
    if (sections[id]) sections[id].scrollIntoView()
  }

  const setHashToScroll = () => {
    const inViewSection = Object.keys(sections).find(
      v => sections[v] && sections[v].getBoundingClientRect().top === 0
    )
    if (inViewSection) window.location.hash = `#${inViewSection}`
  }
  const debouncedSetHashToScroll = debounce(setHashToScroll, 100)

  React.useEffect(setScrollToHash)
  if (typeof window !== "undefined") window.onhashchange = setScrollToHash

  return (
    <SectionContext.Provider value={{ registerSection }}>
      <Main ref={mainRef} onScroll={debouncedSetHashToScroll} {...props} />
    </SectionContext.Provider>
  )
}

export default MainContainer
export { useSection }
