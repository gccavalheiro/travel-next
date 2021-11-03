import { Container } from 'components'

import ImageWrapper from 'assets/img/home1.jpg'
import ImageOverlay from 'assets/img/home2.jpg'

import * as S from './styles'

export function Home() {
  return (
    <S.Section id="home">
      <S.ImageWrapper src={ImageWrapper.src} />
      <Container>
        <S.Container>
          <S.Content>
            <S.Subtitle>Descubra seu lugar</S.Subtitle>
            <S.Title>
              Explore as <strong>Praias mais Encantadoras do Mundo</strong>.
            </S.Title>
            <S.LinkButton href="#" withBackground>
              Explorar
            </S.LinkButton>
          </S.Content>
          <S.SocialContainer>
            <S.SocialItem href="https://www.facebook.com.br" target="_blank">
              <S.SocialIcon className="ri-facebook-box-fill" />
            </S.SocialItem>

            <S.SocialItem href="https://www.instagram.com.br" target="_blank">
              <S.SocialIcon className="ri-instagram-fill" />
            </S.SocialItem>

            <S.SocialItem href="https://www.twitter.com.br" target="_blank">
              <S.SocialIcon className="ri-twitter-fill" />
            </S.SocialItem>
          </S.SocialContainer>

          <S.InfoLinkButton href="#" dFlex>
            <S.InfoContainer>
              <S.InfoContent>
                <S.InfoTitle>5 lugares para visitar</S.InfoTitle>
                <S.InfoButton>
                  Mais <S.InfoIconLinkButton className="ri-arrow-right-line" />
                </S.InfoButton>
              </S.InfoContent>

              <S.InfoOverlay>
                <S.InfoImageOverlay src={ImageOverlay.src} />
              </S.InfoOverlay>
            </S.InfoContainer>
          </S.InfoLinkButton>
        </S.Container>
      </Container>
    </S.Section>
  )
}
