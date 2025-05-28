import styled from 'styled-components'

export const Container = styled.header`
  background-color: #282c34;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.h1`
  color: white;
  font-size: 24px;
`

export const Nav = styled.nav`
  a {
    color: white;
    margin-left: 25px;
    font-weight: 600;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`
