import styled from 'styled-components'
import theme, { hueColor } from '../../styles/theme/theme'
import { LinkButton } from '../LinkButton'

interface INavMenuProps {
  openMenu: boolean
}

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${theme.header.height};
`

export const NavLogo = styled.a`
  font-weight: ${theme.font.weights.semiBold};
  color: ${theme.colors.white};
`

export const NavMenu = styled.div<INavMenuProps>`
  position: relative;

  @media screen and (max-width: 767px) {
    position: fixed;
    background-color: ${theme.colors.body};
    top: 0;
    right: ${(props) => (props.openMenu ? 0 : '-100%')};
    width: 70%;
    height: 100%;
    box-shadow: -1px 0 4px hsl(${hueColor}, 64%, 15%, 0.15);
    padding: 3rem;
    transition: 0.4s;
  }
`

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 2.5rem;
`

export const NavItem = styled.li``

export const NavLink = styled(LinkButton)`
  color: ${theme.colors.textLight};
  font-weight: ${theme.font.weights.semiBold};
  text-transform: uppercase;

  &:hover {
    color: ${theme.colors.text};
  }
`

export const NavClose = styled.i`
  position: absolute;
  top: 0.75rem;
  right: 1rem;
  font-size: 1.5rem;
  color: ${theme.colors.title};
  cursor: pointer;
`

export const NavToggle = styled.div`
  font-size: 1.2rem;
  cursor: pointer;
  color: ${theme.colors.white};
`

export const MenuIcon = styled.i``
