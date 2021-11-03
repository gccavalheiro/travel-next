import { Footer, Header, Sponsor, Subscribe } from 'components'
import { About } from './About'
import { Discover } from './Discover'
import { Home } from './Home'
import { Places } from './Places'

import * as S from './styles'

const Main = () => {
  return (
    <S.Container>
      <Header />
      <Home />
      <About />
      <Discover />
      <Places />
      <Subscribe />
      <Sponsor />
      <Footer />
    </S.Container>
  )
}

export default Main
