import styled from 'styled-components'
import { TextField } from '../Form'
import { Grid, Button as ButtonComponent } from 'components'
import theme from 'styles/theme/theme'

export const Section = styled.section`
  background-color: ${theme.colors.secondary};
  padding: 2.5rem 0;
`

export const Title = styled.h2`
  font-family: ${theme.font.family.titleFont};
  font-size: ${theme.font.sizes.h2};
  color: ${theme.colors.white};
  text-align: center;
  margin-bottom: ${theme.spacings.mb2};
`

export const Subtitle = styled.div`
  text-align: center;
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacings.mb25};
`

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  background-color: ${theme.colors.input};
  padding: 0.5rem;
`

export const Input = styled(TextField)`
  width: 70%;
  padding-right: 0.5rem;
  background-color: transparent;
  color: ${theme.colors.text};
  font-weight: ${theme.font.weights.semiBold};

  ::placeholder {
    color: ${theme.colors.text};
  }
`

export const GridContainer = styled(Grid)`
  grid-template-columns: repeat(2, max-content);
  justify-content: center;
`

export const PlaceCard = styled.div`
  position: relative;
  overflow: ${theme.image.hidden};
  height: 180px;
  min-height: 180px;

  @media screen and (min-width: 320.99px) {
    height: 220px;
    min-height: 220px;
  }

  @media screen and (min-width: 375.99px) {
    height: 260px;
    min-height: 260px;
  }

  @media screen and (min-width: 425.99px) {
    height: 280px;
    min-height: 280px;
  }

  &:hover img {
    transform: ${theme.image.scale};
  }

  ::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    background: ${theme.colors.overlayShadowStrong};
    height: 50%;
    width: 100%;
  }
`

export const Image = styled.img`
  height: 100%;
  transition: ${theme.image.transition};
`

export const PlaceCardItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${theme.colors.white};
  padding: 0.75rem 0.75rem 1rem;
  z-index: 1;
`

export const PlaceRating = styled.span`
  display: flex;
  align-self: flex-end;
  align-items: center;
  background: ${theme.colors.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 32px;
`

export const PlaceCardIcon = styled.i`
  font-size: ${theme.font.sizes.smaller};
  margin-right: ${theme.spacings.mb025};
`

export const PlaceRatingNumber = styled.span`
  font-size: ${theme.font.sizes.small};
  font-weight: ${theme.font.weights.bold};
`

export const PlaceInfo = styled.div``

export const PlaceTitle = styled.h3`
  font-size: ${theme.font.sizes.h3};
  font-weight: ${theme.font.weights.bold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacings.mb025};
`

export const PlaceSubtitle = styled.span`
  display: block;
  font-size: ${theme.font.sizes.smaller};
  margin-bottom: ${theme.spacings.mb125};
`

export const PlacePrice = styled.span`
  display: block;
  font-weight: ${theme.font.weights.bold};
`

export const Button = styled(ButtonComponent)``

export const ButtonIcon = styled.i``
