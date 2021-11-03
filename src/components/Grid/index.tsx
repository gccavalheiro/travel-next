import * as S from './styles'
import { ReactNode } from 'react'

interface IGridProps {
  children: ReactNode
}

export const Grid = ({ children, ...rest }: IGridProps) => {
  return <S.Grid {...rest}>{children}</S.Grid>
}
