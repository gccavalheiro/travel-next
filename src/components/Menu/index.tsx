import { useState } from 'react'
import { Container } from 'components'

import * as S from './styles'

interface IMenuItemsProps {
  title: string
  url: string
  target?: string
  onClick?: () => void
}

const MenuItems: IMenuItemsProps[] = [
  {
    title: 'Início',
    url: '#home',
  },
  {
    title: 'Sobre',
    url: '#about',
  },
  {
    title: 'Explore',
    url: '#discover',
  },
  {
    title: 'Lugares',
    url: '#places',
  },
]

export const Menu = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)

  return (
    <Container>
      <S.NavContainer>
        <S.NavLogo>Travel</S.NavLogo>

        <S.NavMenu openMenu={openMenu}>
          <S.NavList>
            {MenuItems.map((menuItem, index) => (
              <S.NavItem key={index}>
                <S.NavLink
                  href={menuItem.url}
                  onClick={() => setOpenMenu(false)}>
                  {menuItem.title}
                </S.NavLink>
              </S.NavItem>
            ))}
          </S.NavList>

          <S.NavClose
            onClick={() => setOpenMenu(false)}
            className="ri-close-line"
            title="Fechar Menu"
          />
        </S.NavMenu>

        <S.NavToggle onClick={() => setOpenMenu(true)}>
          <S.MenuIcon className="ri-function-line" title="Menu" />
        </S.NavToggle>
      </S.NavContainer>
    </Container>
  )
}
