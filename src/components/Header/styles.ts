import styled from 'styled-components'
import theme, { hueColor } from '../../styles/theme/theme'

interface IContainerProps {
  showBackground: boolean
}

export const Container = styled.div<IContainerProps>`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${theme.layers.fixed};
  background-color: ${(props) =>
    props.showBackground ? theme.colors.body : 'transparent'};
  box-shadow: ${(props) =>
    props.showBackground
      ? `0 0 4px hsla(${hueColor}, 65%, 20%, .30)`
      : 'unset'};
  transition: 0.2s;

  nav > a {
    color: ${(props) =>
      props.showBackground ? theme.colors.title : theme.colors.white};
  }
  nav div:last-child {
    color: ${(props) =>
      props.showBackground ? theme.colors.title : theme.colors.white};
  }
`
