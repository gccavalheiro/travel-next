import styled from 'styled-components'
import { Grid, LinkButton as LinkButtonComponent } from 'components'
import theme from 'styles/theme/theme'

export const Section = styled.section``

export const Container = styled(Grid)`
  row-gap: 2.5rem;
`

export const Content = styled.div`
  text-align: center;
`

export const AboutImage = styled.div`
  display: flex;
  column-gap: 1rem;
  align-items: center;
  justify-content: center;
`
export const AboutImageOverlay = styled.div`
  overflow: ${theme.image.hidden};
  line-height: 0;
`

export const Image = styled.img`
  width: 130px;
  transition: ${theme.image.transition};

  &:hover {
    transform: ${theme.image.scale};
  }
`

export const ImageSecond = styled.img`
  width: 180px;
  transition: ${theme.image.transition};

  &:hover {
    transform: ${theme.image.scale};
  }
`

export const Description = styled.p`
  margin-bottom: ${theme.spacings.mb2};
`

export const Title = styled.h1`
  font-family: ${theme.font.family.titleFont};
  font-size: ${theme.font.sizes.h2};
  color: ${theme.colors.title};
  text-align: center;
  margin-bottom: ${theme.spacings.mb2};
`

export const LinkButton = styled(LinkButtonComponent)``
