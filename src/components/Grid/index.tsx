import { ReactNode } from 'react'

import * as S from './styles'

interface IGridProps {
  children: ReactNode
}

export const Grid = ({ children, ...rest }: IGridProps) => {
  return <S.Grid {...rest}>{children}</S.Grid>
}
