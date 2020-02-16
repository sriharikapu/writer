import React from 'react'
import styled from 'styled-components'
import { Route } from 'react-router-dom'

const StyledPage = styled.div`
  flex-grow: 1;
`

export default function Page ({ children, path, exact = false, render }) {
  return (
    <Route
      path={path} exact={exact} render={props => (
        <StyledPage>
          <main>
            {typeof render === 'function' ? render(props) : children}
          </main>
        </StyledPage>
      )}
    />
  )
}
