import {
  Container,
  Experience,
  IExperienceContentProps,
  Video,
} from 'components'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper'

import DiscoverImage from 'assets/img/discover1.jpg'
import DiscoverImage2 from 'assets/img/discover2.jpg'
import DiscoverImage3 from 'assets/img/discover3.jpg'
import DiscoverImage4 from 'assets/img/discover4.jpg'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import * as S from './styles'

SwiperCore.use([EffectCoverflow, Pagination])

interface ICardContentProps {
  cardImage: string
  cardTitle: string
  cardDescription: string
}

const CardContents: ICardContentProps[] = [
  {
    cardImage: DiscoverImage.src,
    cardTitle: 'Bali',
    cardDescription: '24 tuors disponíveis',
  },
  {
    cardImage: DiscoverImage2.src,
    cardTitle: 'Hawaii',
    cardDescription: '15 tuors disponíveis',
  },
  {
    cardImage: DiscoverImage3.src,
    cardTitle: 'Hvar',
    cardDescription: '18 tuors disponíveis',
  },
  {
    cardImage: DiscoverImage4.src,
    cardTitle: 'Whitehaven',
    cardDescription: '32 tuors disponíveis',
  },
]

const ExperiencesContent: IExperienceContentProps[] = [
  {
    number: '20+',
    description: 'Anos de Experiência',
  },
  {
    number: '150+',
    description: 'Tuors Completos',
  },
  {
    number: '650+',
    description: 'Destinos Turísticos',
  },
]

export function Discover() {
  return (
    <>
      <S.Section className="section" id="discover">
        <Container>
          <S.GridContainer>
            <S.Content>
              <S.Title>Explore os lugares mais atrativos.</S.Title>
              <S.CardContainer>
                <Swiper
                  effect={'coverflow'}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={2}
                  loop={true}
                  spaceBetween={24}
                  coverflowEffect={{
                    rotate: 0,
                  }}
                  className="swaper-container">
                  {CardContents.map((cardContent, index) => (
                    <SwiperSlide key={index}>
                      <S.Card>
                        <S.CardImage src={cardContent.cardImage} />
                        <S.CardContent>
                          <S.CardContentText>
                            <S.CardTitle>{cardContent.cardTitle}</S.CardTitle>
                            <S.CardDescription>
                              {cardContent.cardDescription}
                            </S.CardDescription>
                          </S.CardContentText>
                        </S.CardContent>
                      </S.Card>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </S.CardContainer>
            </S.Content>
          </S.GridContainer>
        </Container>
      </S.Section>
      <Experience
        title="Iremos atendê-lo com toda nossa experiência"
        contents={ExperiencesContent}
      />
      <Video
        src="/video/video.mp4"
        title="Video Tour"
        description="Saiba mais com nossos vídeos dos lugares mais bonitos
        e agradáveis para você e sua família."
      />
    </>
  )
}
