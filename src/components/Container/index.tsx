import * as S from './styles'
import { ReactNode } from 'react'

interface IContainerProps {
  children: ReactNode
}

export const Container = ({ children, ...rest }: IContainerProps) => {
  return <S.Container {...rest}>{children}</S.Container>
}
