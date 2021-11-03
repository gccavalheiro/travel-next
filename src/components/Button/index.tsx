import * as S from './styles'
import { ReactNode } from 'react'

interface IButtonProps {
  children: ReactNode
  dFlex?: boolean
  onClick?: () => void
}

export const Button = ({
  dFlex = false,
  onClick,
  children,
  ...rest
}: IButtonProps) => {
  return (
    <S.Button dFlex={dFlex} {...rest} onClick={onClick}>
      {children}
    </S.Button>
  )
}
