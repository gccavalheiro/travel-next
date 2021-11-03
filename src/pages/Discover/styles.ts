import styled from 'styled-components'
import { Grid, LinkButton as LinkButtonComponent } from 'components'
import theme from 'styles/theme/theme'

export const Section = styled.section``

export const GridContainer = styled(Grid)``

export const ImageWrapper = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 80%;
`

export const Content = styled.div``

export const Title = styled.h2`
  font-family: ${theme.font.family.titleFont};
  font-size: ${theme.font.sizes.h2};
  color: ${theme.colors.title};
  text-align: center;
  margin-bottom: ${theme.spacings.mb2};
`

export const LinkButton = styled(LinkButtonComponent)``

export const CardContainer = styled.div`
  .swaper-container {
    position: relative;
    width: 100%;
    max-width: 400px;
    overflow: ${theme.image.hidden};
    line-height: 0;
    margin-bottom: ${theme.spacings.mb025};
  }

  .swiper-pagination-bullet-active {
    background-color: ${theme.colors.white};
  }

  @media screen and (max-width: 425px) {
    .swaper-container {
      max-width: 380px;
    }
  }

  @media screen and (max-width: 375px) {
    .swaper-container {
      max-width: 330px;
    }
  }

  @media screen and (max-width: 320px) {
    .swaper-container {
      max-width: 280px;
    }
  }
`

export const Card = styled.div`
  position: relative;
  width: 100%;
  overflow: ${theme.image.hidden};
  line-height: 0;

  &:hover img {
    transform: ${theme.image.scale};
  }
`

export const CardImage = styled.img`
  transition: ${theme.image.transition};
  width: 100%;
`

export const CardContent = styled.div`
  width: 100%;
  position: absolute;
  background: ${theme.colors.overlayShadow};
  left: 0;
  height: 50%;
  bottom: 0;
`

export const CardContentText = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  line-height: normal;

  @media screen and (max-width: 320px) {
    bottom: 0.5rem;
    left: 0.5rem;
  }
`

export const CardTitle = styled.h3`
  font-size: ${theme.font.sizes.h3};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacings.mb025};
`

export const CardDescription = styled.p`
  font-size: ${theme.font.sizes.smaller};
  color: ${theme.colors.white};
`
