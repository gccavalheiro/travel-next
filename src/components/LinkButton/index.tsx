import * as S from './styles'
import { ReactNode } from 'react'

interface ILinkButtonProps {
  href: string
  target?: string
  onClick?: () => void
  dFlex?: boolean
  withBackground?: boolean
  children: ReactNode
}

export const LinkButton = ({
  href,
  target,
  onClick,
  dFlex = false,
  withBackground = false,
  children,
  ...rest
}: ILinkButtonProps) => {
  return (
    <S.Container
      href={href}
      target={target}
      dFlex={dFlex}
      onClick={onClick}
      {...rest}
      withBackground={withBackground}>
      {children}
    </S.Container>
  )
}
