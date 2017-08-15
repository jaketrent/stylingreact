import Caption from '../ui/caption'
import Content from '../ui/content'
import Course from '../ui/course'
import CssModules from '../ui/icons/css-modules'
import ExternalCss from '../ui/icons/external-css2'
import GlobalStyles from '../ui/global-styles'
import Head from '../ui/head'
import Header from '../ui/header'
import InlineCss from '../ui/icons/inline-css'
import Main from '../ui/main'
import Radium from '../ui/icons/radium'
import Section from '../ui/section'
import SectionBody from '../ui/section-body'
import SectionHeader from '../ui/section-header'
import Table from '../ui/table'
import Trial from '../ui/trial'
import Video from '../ui/video'

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
          <SectionHeader icon={<InlineCss />}>Inline Styles</SectionHeader>
          <SectionBody src="http://lorempixel.com/500/300/abstract/1" />
        </Section>

        <Section>
          <SectionHeader icon={<Radium />}>Radium</SectionHeader>
          <SectionBody src="http://lorempixel.com/500/300/abstract/2/" />
        </Section>

        <Section>
          <SectionHeader icon={<ExternalCss />}>
            External Stylesheet
          </SectionHeader>
          <SectionBody src="http://lorempixel.com/500/300/abstract/3" />
        </Section>

        <Section>
          <SectionHeader icon={<CssModules />}>CSS Modules</SectionHeader>
          <SectionBody src="http://lorempixel.com/500/300/abstract/4" />
        </Section>

        <Section>
          <Course />
        </Section>

        <Section>
          <Video
            src="https://www.youtube.com/embed/WhiZlvRzbrc"
            height="315"
            width="560"
          />
        </Section>

        <Section>
          <Trial />
        </Section>

        {/* <Section>
          <Table />
        </Section> */}
      </Main>
    </Content>
  </div>
