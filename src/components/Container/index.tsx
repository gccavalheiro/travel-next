import { ReactNode } from 'react'

import * as S from './styles'

interface IContainerProps {
  children: ReactNode
}

export const Container = ({ children, ...rest }: IContainerProps) => {
  return <S.Container {...rest}>{children}</S.Container>
}
