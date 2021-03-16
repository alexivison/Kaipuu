import React from 'react'
import styled from 'styled-components'


const PageNumber: React.FC<{ children: string }> = ({ children }) => {
  const number = `.0${children}`

  return (
    <Container>
      {number}
    </Container>
  )
}

const Container = styled.p(({ theme: { mediaQuery, ...theme } }) => `
  font-size: 48px;
  letter-spacing: 8px;
  color: rgba(255, 255, 255, 20%);

  ${mediaQuery.small} {
    font-size: 24px;
    letter-spacing: 4px;
  }
`)

export default PageNumber
