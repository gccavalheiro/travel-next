import { Container } from 'components'

import * as S from './styles'

interface ISocialProps {
  icon: string
  url: string
  alt?: string
}

const SocialItems: ISocialProps[] = [
  {
    icon: 'ri-facebook-box-fill',
    url: 'https://www.facebook.com.br',
    alt: 'Facebook',
  },
  {
    icon: 'ri-twitter-fill',
    url: 'https://www.twitter.com.br',
    alt: 'Twitter',
  },
  {
    icon: 'ri-instagram-fill',
    url: 'https://www.instagram.com.br',
    alt: 'Instagram',
  },
  {
    icon: 'ri-youtube-fill',
    url: 'https://www.youtube.com.br',
    alt: 'Youtube',
  },
]

interface MenuItem {
  title: string
  url: string
  alt?: string
}

interface MenuCategories {
  title: string
  menuItem: MenuItem[]
}

const MenuList: MenuCategories[] = [
  {
    title: 'Sobre',
    menuItem: [
      {
        title: 'Sobre Nós',
        url: '',
        alt: '',
      },
      {
        title: 'Recursos',
        url: '',
        alt: '',
      },
      {
        title: 'Notícias & Blog',
        url: '',
        alt: '',
      },
    ],
  },
  {
    title: 'Empresa',
    menuItem: [
      {
        title: 'Time',
        url: '',
        alt: '',
      },
      {
        title: 'Planos e Preços',
        url: '',
        alt: '',
      },
      {
        title: 'Trabalhe Conosco',
        url: '',
        alt: '',
      },
    ],
  },
  {
    title: 'Suporte',
    menuItem: [
      {
        title: 'FAQs',
        url: '',
        alt: '',
      },
      {
        title: 'Central de Suporte',
        url: '',
        alt: '',
      },
      {
        title: 'Fale Conosco',
        url: '',
        alt: '',
      },
    ],
  },
]

export const Footer = () => {
  return (
    <S.Section className="section">
      <Container>
        <S.GridContainer>
          <S.Content>
            <S.Info>
              <S.Title>Travel</S.Title>
              <S.Description>
                Escolha seu destinos,
                <br />
                nós oferecemos a experiência.
              </S.Description>

              <S.Social>
                {SocialItems.map((socialItem, index) => (
                  <S.SocialItem
                    key={index}
                    href={socialItem.url}
                    target="_blank">
                    <S.SocialIcon className={socialItem.icon} />
                  </S.SocialItem>
                ))}
              </S.Social>
            </S.Info>

            {MenuList.map((menuList, index) => (
              <S.Info key={index}>
                <S.Subtitle key={index}>{menuList.title}</S.Subtitle>
                <S.List>
                  {menuList.menuItem.map((menuItem) => (
                    <S.Item key={index}>
                      <S.ItemLink href={menuItem.url} title={menuItem.alt}>
                        {menuItem.title}
                      </S.ItemLink>
                    </S.Item>
                  ))}
                </S.List>
              </S.Info>
            ))}
          </S.Content>
          <S.Rights>
            <S.Copy>&#169; 2021. Todos os direitos reservados.</S.Copy>
            <S.Terms>
              <S.TermsLink href="#" target="_blank">
                Termos e Acordos
              </S.TermsLink>
              <S.TermsLink href="#" target="_blank">
                Política de Privacidade
              </S.TermsLink>
            </S.Terms>
          </S.Rights>
        </S.GridContainer>
      </Container>
    </S.Section>
  )
}
