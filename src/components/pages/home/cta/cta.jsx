'use client';
import { m, LazyMotion, domAnimation } from 'framer-motion';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import VmAnimation from './vm-animation';
import LINKS from 'constants/links';

const CTA = () => (
  <LazyMotion features={domAnimation}>
    <m.section
      className="cta relative bg-[#0A0A0B] safe-paddings overflow-hidden min-h-[600px] flex flex-col"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Animated Technical Background */}
      <VmAnimation />

      <div className="relative z-20 flex-1 flex flex-col pt-24 pb-20 xl:pt-20 xl:pb-16 lg:pt-16 md:pt-12 md:pb-10 bg-gradient-to-t from-[#0A0A0B] via-transparent to-[#0A0A0B]">
        <Container className="flex h-full flex-col justify-between" size="1920">
          <h2 className="text-[80px] leading-none tracking-tighter xl:text-[64px] lg:text-[44px] md:text-[36px] text-white font-bold drop-shadow-2xl">
            Start coding in <br /> <span className="text-[#E02424]">Sindhi</span> today.
          </h2>

          <div className="mt-32 flex items-end justify-between gap-x-14 lg:mt-24 lg:flex-col lg:items-start lg:gap-y-8 md:mt-16">
            <p className="max-w-[860px] text-[32px] leading-tight tracking-tighter xl:max-w-[480px] xl:text-[24px] lg:max-w-[520px] lg:text-[20px] md:text-[18px] text-gray-new-50 drop-shadow-md">
              Join the movement. <br className="xs:hidden" /> Download Sindlish and build your first native application.
            </p>
            <div className="flex items-center gap-5 xl:gap-4 lg:mb-0 md:w-full md:flex-col md:items-stretch md:gap-y-3">
              <m.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button theme="white-filled" size="new" to={LINKS.download}>
                  Download Interpreter
                </Button>
              </m.div>
              <m.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className="bg-[#0A0A0B]/80 backdrop-blur-md border border-gray-new-20 hover:border-[#E02424]/50"
                  theme="white-outline"
                  size="new"
                  to={LINKS.docsHome}
                >
                  Read the docs
                </Button>
              </m.div>
            </div>
          </div>
        </Container>
      </div>
    </m.section>
  </LazyMotion>
);

export default CTA;
