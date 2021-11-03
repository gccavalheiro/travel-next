import styled from 'styled-components'
import theme from 'styles/theme/theme'
import { Grid } from '..'

export const Section = styled.section`
  padding: 2.5rem 0;
`

export const GridContainer = styled(Grid)`
  grid-template-columns: repeat(2, minmax(110px, 1fr));
  justify-content: center;
  justify-items: center;
  row-gap: 3.5rem;
`

export const Item = styled.div`
  &:hover img {
    filter: invert(0.5);
  }
`

export const Image = styled.img`
  width: 90px;
  filter: invert(0.7);
  transition: ${theme.image.transition};
`
