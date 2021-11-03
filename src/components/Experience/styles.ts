import styled from 'styled-components'
import {
  Grid as GridComponent,
  LinkButton as LinkButtonComponent,
} from 'components'
import theme from 'styles/theme/theme'

export const Section = styled.section``

export const GridContainer = styled(GridComponent)`
  position: relative;
  justify-content: center;
  justify-items: center;
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

export const GridContent = styled(GridComponent)`
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1rem;
  justify-items: center;
  padding: 0 2rem;
`

export const ExperienceContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const ExperienceNumber = styled.h2`
  font-size: ${theme.font.sizes.h2};
  font-weight: ${theme.font.weights.semiBold};
  margin-bottom: ${theme.spacings.mb05};
`

export const ExperienceDescription = styled.p``

export const ExperienceImageGrid = styled(GridComponent)`
  position: relative;
  padding-bottom: 2rem;
`

export const ExperienceImage = styled.img`
  transition: ${theme.image.transition};

  &:hover {
    transform: ${theme.image.scale};
  }
`

export const ExperienceOverlay = styled.div`
  line-height: 0;
  overflow: ${theme.image.hidden};

  :nth-child(1) {
    width: 263px;
    margin-right: 2rem;
    height: 175px;
  }

  :nth-child(2) {
    width: 120px;
    position: absolute;
    top: 2rem;
    right: 0;
  }
`

export const Subtitle = styled.span`
  font-weight: ${theme.font.weights.semiBold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacings.mb075};
`

export const Title = styled.h2`
  font-family: ${theme.font.family.titleFont};
  font-size: ${theme.font.sizes.h2};
  color: ${theme.colors.title};
  text-align: center;
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
`

export const SocialIcon = styled.i``

export const InfoContainer = styled.div`
  display: flex;
  background-color: ${theme.colors.primary};
  padding: 1.5rem 1rem;
  align-items: center;
  column-gap: 0.5rem;
  position: absolute;
  right: 0;
  bottom: 1rem;
  width: 268px;
`

export const InfoContent = styled.div``

export const InfoTitle = styled.h2`
  font-size: ${theme.font.sizes.small};
  font-weight: ${theme.font.weights.semiBold};
  margin-bottom: ${theme.spacings.mb075};
  color: ${theme.colors.white};
`

export const InfoLinkButton = styled(LinkButtonComponent)`
  font-size: ${theme.font.sizes.smaller};
`

export const InfoIconLinkButton = styled.i``

export const InfoOverlay = styled.div`
  overflow: ${theme.image.hidden};
`

export const InfoImageOverlay = styled.img`
  width: 145px;
  transition: ${theme.image.transition};

  &:hover {
    transform: ${theme.image.scale};
  }
`
