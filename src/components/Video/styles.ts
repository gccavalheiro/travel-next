import styled from 'styled-components'
import { Container as ContainerComponent, Button } from 'components'
import theme from 'styles/theme/theme'

export const Section = styled.section``

export const Container = styled(ContainerComponent)`
  row-gap: 2.5rem;
`

export const Content = styled.div`
  text-align: center;
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

export const VideoContent = styled.div`
  position: relative;
`
export const VideoFile = styled.video``
export const VideoSource = styled.source``
export const VideoButton = styled(Button)`
  position: absolute;
  right: 1rem;
  bottom: -1rem;
  padding: 1rem 1.5rem;
`
export const VideoIcon = styled.i`
  font-size: 1.5rem;
`
