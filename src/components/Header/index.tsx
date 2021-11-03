import * as S from './styles'
import { Menu } from '../Menu'
import { useCallback, useEffect, useState } from 'react'

export const Header = () => {
  const scrollY = 100
  const [showBackground, setShowBackground] = useState<boolean>(false)

  const handleNavigation = useCallback(() => {
    const scrollTop = window.document.scrollingElement?.scrollTop

    if (scrollTop && scrollTop > scrollY) {
      setShowBackground(true)
    } else {
      setShowBackground(false)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', () => handleNavigation())

    return () => {
      window.removeEventListener('scroll', () => handleNavigation())
    }
  }, [handleNavigation])

  return (
    <S.Container showBackground={showBackground}>
      <Menu />
    </S.Container>
  )
}
