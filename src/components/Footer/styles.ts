import styled from 'styled-components'
import theme from 'styles/theme/theme'
import { Grid } from 'components'

export const Section = styled.section`
  padding: 2.5rem 0;
`

export const GridContainer = styled(Grid)`
  row-gap: 5rem;
`

export const Content = styled(Grid)`
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  row-gap: 2rem;
  justify-items: center;
  text-align: center;
`

export const Info = styled.div``

export const Title = styled.h3`
  font-size: ${theme.font.sizes.h3};
  margin-bottom: ${theme.spacings.mb05};
  font-weight: ${theme.font.weights.bold};
`

export const Description = styled.p`
  margin-bottom: ${theme.spacings.mb2};
`

export const Social = styled.div``

export const SocialItem = styled.a`
  font-size: 1.25rem;
  color: ${theme.colors.title};
  margin-right: ${theme.spacings.mb125};

  &:hover {
    color: ${theme.colors.text};
  }
`

export const SocialIcon = styled.i``

export const Subtitle = styled.h3`
  font-size: ${theme.font.sizes.h3};
  margin-bottom: ${theme.spacings.mb1};
  font-weight: ${theme.font.weights.bold};
`

export const List = styled.ul``

export const Item = styled.li`
  margin-bottom: ${theme.spacings.mb075};
`

export const ItemLink = styled.a`
  color: ${theme.colors.text};

  &:hover {
    color: ${theme.colors.title};
  }
`

export const Rights = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  text-align: center;
`

export const Copy = styled.p`
  font-size: ${theme.font.sizes.small};
  color: ${theme.colors.textLight};
`

export const Terms = styled.div`
  display: flex;
  column-gap: 1.5rem;
  justify-content: center;
`

export const TermsLink = styled.a`
  font-size: ${theme.font.sizes.small};
  color: ${theme.colors.textLight};
  transition: ${theme.image.transition};

  &:hover {
    color: ${theme.colors.title};
  }
`
