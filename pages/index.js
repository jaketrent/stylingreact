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
          <SectionHeader src="../static/img/fillerIcon1.png">
            Rebel Alliance
          </SectionHeader>
          <SectionBody src="http://lorempixel.com/500/320/abstract/1" />
        </Section>
        <Section>
          <SectionHeader src="../static/img/fillerIcon2.png">
            Rebel Alliance
          </SectionHeader>
          <SectionBody src="http://lorempixel.com/500/320/abstract/2/" />
        </Section>
        <Section>
          <SectionHeader src="../static/img/fillerIcon3.png">
            Rebel Alliance
          </SectionHeader>
          <SectionBody src="http://lorempixel.com/500/320/abstract/3" />
        </Section>
        <Section>
          <SectionHeader src="../static/img/fillerIcon4.png">
            Rebel Alliance
          </SectionHeader>
          <SectionBody src="http://lorempixel.com/500/320/abstract/4" />
        </Section>
      </Main>
    </Content>
  </div>
