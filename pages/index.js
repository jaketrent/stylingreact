import Caption from '../ui/caption'
import Content from '../ui/content'
import GlobalStyles from '../ui/global-styles'
import Head from '../ui/head'
import Header from '../ui/header'

export default _ =>
  <div>
    <Content>
      <GlobalStyles />

      <Head />

      <Header />
      <hr />
      <Caption />
    </Content>
  </div>
