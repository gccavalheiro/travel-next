import styled from 'styled-components'
import { Grid, LinkButton as LinkButtonComponent } from 'components'
import theme from 'styles/theme/theme'

export const Section = styled.section``

export const Container = styled(Grid)`
  position: relative;
  height: calc(100vh - ${theme.header.height});
  align-content: center;
  row-gap: 3rem;
`

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

export const Subtitle = styled.span`
  font-weight: ${theme.font.weights.semiBold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacings.mb075};
`

export const Title = styled.h1`
  font-family: ${theme.font.family.titleFont};
  font-size: ${theme.font.sizes.biggestFont};
  font-weight: ${theme.font.weights.medium};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacings.mb25};
`

export const LinkButton = styled(LinkButtonComponent)``

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
`

export const SocialItem = styled(LinkButtonComponent)`
  font-size: 1.2rem;
  width: max-content;
  color: ${theme.colors.white};
  font-weight: normal;

  &:hover {
    transform: translateY(-2px);
  }
`

export const SocialIcon = styled.i``

export const InfoContainer = styled.div`
  display: flex;
  background-color: ${theme.colors.primary};
  padding: 1rem;
  align-items: center;
  column-gap: 0.5rem;
  position: absolute;
  right: 0;
  bottom: 1rem;
  width: 260px;
  transition: ${theme.image.transition};
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.primaryAlt};
  }

  &:hover img {
    transform: ${theme.image.scale};
  }
`

export const InfoContent = styled.div``

export const InfoTitle = styled.h2`
  font-size: ${theme.font.sizes.small};
  font-weight: ${theme.font.weights.semiBold};
  margin-bottom: ${theme.spacings.mb075};
  color: ${theme.colors.white};
`

export const InfoButton = styled.div`
  display: flex;
  align-items: center;
`

export const InfoLinkButton = styled(LinkButtonComponent)`
  font-size: ${theme.font.sizes.smaller};
  width: fit-content;
`

export const InfoIconLinkButton = styled.i`
  margin-left: 4px;
`

export const InfoOverlay = styled.div`
  overflow: ${theme.image.hidden};
  line-height: 0;
`

export const InfoImageOverlay = styled.img`
  width: 145px;
  transition: ${theme.image.transition};
`
