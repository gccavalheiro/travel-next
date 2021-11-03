import { Container } from 'components'

import ImageWrapper from 'assets/img/home1.jpg'
import ImageOverlay from 'assets/img/home2.jpg'

import * as S from './styles'

interface ISocialIconProps {
  icon: string
  url?: string
  target?: string
}

const SocialIcons: ISocialIconProps[] = [
  {
    icon: 'ri-facebook-box-fill',
    url: 'https://www.facebook.com.br',
    target: '_blank',
  },
  {
    icon: 'ri-instagram-fill',
    url: 'https://www.instagram.com.br',
    target: '_blank',
  },
  {
    icon: 'ri-twitter-fill',
    url: 'https://www.twitter.com.br',
    target: '_blank',
  },
]

export function Home() {
  return (
    <S.Section id="home">
      <S.ImageWrapper src={ImageWrapper.src} />
      <Container>
        <S.GridContainer>
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
            {SocialIcons.map((socialIcon) => (
              <S.SocialItem
                href={socialIcon.url || ''}
                target={socialIcon.target}>
                <S.SocialIcon className={socialIcon.icon} />
              </S.SocialItem>
            ))}
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
        </S.GridContainer>
      </Container>
    </S.Section>
  )
}
