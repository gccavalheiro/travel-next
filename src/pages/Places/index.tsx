import { Container } from 'components'

import ImagePlace1 from 'assets/img/place1.jpg'
import ImagePlace2 from 'assets/img/place2.jpg'
import ImagePlace3 from 'assets/img/place3.jpg'
import ImagePlace4 from 'assets/img/place4.jpg'
import ImagePlace5 from 'assets/img/place5.jpg'

import * as S from './styles'

interface CardItem {
  image: string
  rating: string
  title: string
  subtitle: string
  price: string
}

const CardItems: CardItem[] = [
  {
    image: ImagePlace1.src,
    rating: '4,8',
    title: 'Bali',
    subtitle: 'Indonesia',
    price: 'R$ 2499,00',
  },
  {
    image: ImagePlace2.src,
    rating: '4,8',
    title: 'Bora Bora',
    subtitle: 'Polinesia',
    price: 'R$ 1500,00',
  },
  {
    image: ImagePlace3.src,
    rating: '5,0',
    title: 'Hawaii',
    subtitle: 'Indonesia',
    price: 'R$ 2499,00',
  },
  {
    image: ImagePlace4.src,
    rating: '4,9',
    title: 'EE.UU',
    subtitle: 'Australia',
    price: 'R$ 2499,00',
  },
  {
    image: ImagePlace5.src,
    rating: '5,0',
    title: 'Hvar',
    subtitle: 'Croacia',
    price: 'R$ 1999,00',
  },
]

export function Places() {
  return (
    <S.Section className="section" id="places">
      <Container>
        <S.Title> Escolha seu lugar </S.Title>
        <S.GridContainer>
          {CardItems.map((cardItem, index) => (
            <S.PlaceCard key={index}>
              <S.Image src={cardItem.image} />
              <S.PlaceCardItem>
                <S.PlaceRating>
                  <S.PlaceCardIcon className="ri-star-line" />
                  <S.PlaceRatingNumber>{cardItem.rating}</S.PlaceRatingNumber>
                </S.PlaceRating>

                <S.PlaceInfo>
                  <S.PlaceTitle>{cardItem.title}</S.PlaceTitle>
                  <S.PlaceSubtitle>{cardItem.subtitle}</S.PlaceSubtitle>
                  <S.PlacePrice>{cardItem.price}</S.PlacePrice>
                </S.PlaceInfo>

                <S.Button dFlex>
                  <S.ButtonIcon className="ri-arrow-right-line" />
                </S.Button>
              </S.PlaceCardItem>
            </S.PlaceCard>
          ))}
        </S.GridContainer>
      </Container>
    </S.Section>
  )
}
