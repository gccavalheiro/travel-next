import { Container } from 'components'

import ImageAbout from 'assets/img/about1.jpg'
import ImageAbout2 from 'assets/img/about2.jpg'

import * as S from './styles'

export function About() {
  return (
    <S.Section className="section" id="about">
      <Container>
        <S.Container>
          <S.Content>
            <S.Title>
              Mais informações sobre
              <br /> as melhores praias
            </S.Title>
            <S.Description>
              você pode encontrar os lugares mais bonitos e agradáveis com os
              melhores preços e descontos especiais, você escolhe o lugar que
              nós o guiaremos até o fim.
            </S.Description>
            <S.LinkButton href="#" withBackground>
              Reserve seu lugar
            </S.LinkButton>
          </S.Content>
          <S.AboutImage>
            <S.AboutImageOverlay>
              <S.Image src={ImageAbout.src} />
            </S.AboutImageOverlay>
            <S.AboutImageOverlay>
              <S.ImageSecond src={ImageAbout2.src} />
            </S.AboutImageOverlay>
          </S.AboutImage>
        </S.Container>
      </Container>
    </S.Section>
  )
}
