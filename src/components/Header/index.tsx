import { useCallback, useEffect, useState } from 'react'
import { Menu } from 'components'

import * as S from './styles'

export const Header = () => {
  const scrollY = 100
  const [showBackground, setShowBackground] = useState<boolean>(false)

  function handleNavigation() {
    const scrollTop = window.document.scrollingElement?.scrollTop

    if (scrollTop && scrollTop > scrollY) {
      setShowBackground(true)
    } else {
      setShowBackground(false)
    }
  }

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
