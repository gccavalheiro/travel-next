import { Container } from 'components'

import ImageWrapper1 from 'assets/img/experience1.jpg'
import ImageWrapper2 from 'assets/img/experience2.jpg'

import * as S from './styles'

export interface IExperienceContentProps {
  number: string
  description: string
}

interface IExperienceProps {
  title: string
  contents: IExperienceContentProps[]
}

export const Experience = ({ title, contents, ...rest }: IExperienceProps) => {
  return (
    <S.Section className="section">
      <Container>
        <S.GridContainer>
          <S.Title>{title}</S.Title>
          <S.GridContent>
            {contents.map((content, index) => (
              <S.ExperienceContent key={index}>
                <S.ExperienceNumber>{content.number}</S.ExperienceNumber>
                <S.ExperienceDescription>
                  {content.description}
                </S.ExperienceDescription>
              </S.ExperienceContent>
            ))}
          </S.GridContent>
          <S.ExperienceImageGrid>
            <S.ExperienceOverlay>
              <S.ExperienceImage src={ImageWrapper1.src} />
            </S.ExperienceOverlay>
            <S.ExperienceOverlay>
              <S.ExperienceImage src={ImageWrapper2.src} />
            </S.ExperienceOverlay>
          </S.ExperienceImageGrid>
        </S.GridContainer>
      </Container>
    </S.Section>
  )
}
