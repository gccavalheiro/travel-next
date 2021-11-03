import styled from 'styled-components'
import theme from '../../styles/theme/theme'

interface IContainerProps {
  dFlex?: boolean
  withBackground?: boolean
}

export const Container = styled.a<IContainerProps>`
  display: ${(props) => (props.dFlex ? 'flex' : 'inline-block')};
  align-items: ${(props) => (props.dFlex ? 'center' : 'unset')};
  column-gap: ${(props) => (props.dFlex ? '.25rem' : 'unset')};
  background-color: ${(props) =>
    props.withBackground ? theme.colors.primary : 'transparent'};
  color: ${theme.colors.white};
  padding: ${(props) => (props.withBackground ? '1rem 2rem' : 0)};
  font-weight: ${theme.font.weights.semiBold};
  transition: 0.3s;

  &:hover {
    background-color: ${(props) =>
      props.withBackground ? theme.colors.primaryAlt : 'transparent'};
  }
`
