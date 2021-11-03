import { Container } from 'components'

import Sponsor1 from 'assets/img/sponsors1.png'
import Sponsor2 from 'assets/img/sponsors2.png'
import Sponsor3 from 'assets/img/sponsors3.png'
import Sponsor4 from 'assets/img/sponsors4.png'

import * as S from './styles'

interface ISponsorItemProps {
  image: string
}

const SponsorsItems: ISponsorItemProps[] = [
  {
    image: Sponsor1.src,
  },
  {
    image: Sponsor2.src,
  },
  {
    image: Sponsor3.src,
  },
  {
    image: Sponsor4.src,
  },
]

export const Sponsor = () => {
  return (
    <S.Section className="section">
      <Container>
        <S.GridContainer>
          {SponsorsItems.map((sponsorItem, index) => (
            <S.Item key={index}>
              <S.Image src={sponsorItem.image} />
            </S.Item>
          ))}
        </S.GridContainer>
      </Container>
    </S.Section>
  )
}
