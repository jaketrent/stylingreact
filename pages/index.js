import Caption from '../ui/caption'
import Content from '../ui/content'
import GlobalStyles from '../ui/global-styles'
import Head from '../ui/head'
import Header from '../ui/header'
import Main from '../ui/main'
import Section from '../ui/section'
import SectionBody from '../ui/section-body'
import SectionHeader from '../ui/section-header'

export default _ =>
  <div>
    <Content>
      <GlobalStyles />

      <Head />

      <Header />
      <hr />
      <Caption />
      <Main>
        <Section>
          <SectionHeader>Rebel Alliance</SectionHeader>
          <SectionBody />
        </Section>
        <Section>
          <SectionHeader>Rebel Alliance</SectionHeader>
          <SectionBody />
        </Section>
        <Section>
          <SectionHeader>Rebel Alliance</SectionHeader>
          <SectionBody />
        </Section>
        <Section>
          <SectionHeader>Rebel Alliance</SectionHeader>
          <SectionBody />
        </Section>
      </Main>
    </Content>
  </div>
