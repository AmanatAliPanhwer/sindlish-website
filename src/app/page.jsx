import CTA from 'components/pages/home/cta';
import Features from 'components/pages/home/features';
import Hero from 'components/pages/home/hero';
import WhySindlish from 'components/pages/home/why-sindlish';
import TocWrapper from 'components/pages/home/toc-wrapper';
import Layout from 'components/shared/layout';
import SEO_DATA from 'constants/seo-data';
import getMetadata from 'utils/get-metadata';

// Deep-dive sections
import Syntax from 'components/pages/home/deep-dive/syntax';
import IDE from 'components/pages/home/deep-dive/ide';
import Performance from 'components/pages/home/deep-dive/performance';

export const metadata = getMetadata(SEO_DATA.index);

const Homepage = () => (
  <Layout isHeaderSticky isHeaderStickyOverlay>
    <Hero />
    <TocWrapper>
      <WhySindlish />
      <Syntax />
      <IDE />
      <Performance />
      <Features />
    </TocWrapper>
    <CTA />
  </Layout>
);


export default Homepage;

export const revalidate = false;
