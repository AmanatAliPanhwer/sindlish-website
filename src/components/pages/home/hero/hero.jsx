'use client';

import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import PauseableVideo from 'components/shared/pauseable-video';
import Link from 'components/shared/link';
import SectionLabel from 'components/shared/section-label';
import { runSindlish } from 'lib/sindlish-interpreter';
import LINKS from 'constants/links';
import mobileBgIllustration from 'images/pages/home/hero/bg-illustration.jpg';
import { cn } from 'utils/cn';

const Hero = () => {
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState('idle');

  const code = `likh("Salam Dunya!")

# Variables
lafz name = "Sindlish"
adad version = 1

# Conditional
agar version == 1 {
  likh("Sindlish is awesome!")
}`;

  const handleRun = async () => {
    if (status === 'running') return;
    setStatus('running');
    setResult(null);
    try {
      const output = await runSindlish(code);
      setResult(output);
      setStatus('idle');
    } catch (err) {
      setResult(`Error: ${err.message}`);
      setStatus('idle');
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <section className="hero relative mt-16 safe-paddings lg:mt-14 overflow-hidden">
        <Container
          className="relative z-30 pt-32 pb-24 xl:pt-24 xl:pb-20 lg:pt-20 lg:pb-16 md:px-5! md:pt-16 md:pb-12"
          size="1600"
        >
          <m.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <Link href="/download">
              <SectionLabel theme="white" className="hover:text-[#E02424] transition-colors">
                <span className="text-[#E02424] font-semibold mr-1">v0.1.0 Alpha</span> — Now Available
              </SectionLabel>
            </Link>
          </m.div>

          <m.h1
            className="mt-6 max-w-[890px] text-[72px] font-bold leading-[1.05] tracking-tighter xl:max-w-[760px] xl:text-[64px] lg:max-w-[640px] lg:text-[52px] md:mt-4 sm:text-[36px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Code in Your <br />
            <span className="text-[#E02424]">Mother Tongue</span>
          </m.h1>


          <m.p
            className="mt-6 max-w-xl text-xl leading-snug tracking-tight text-gray-new-60 xl:max-w-lg lg:max-w-md lg:text-lg sm:mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          >
            Write code in your mother tongue. Sindlish lets you program using Sindhi keywords,
            bringing software development to millions of Sindhi speakers worldwide.
          </m.p>
          <m.div
            className="mt-10 flex gap-x-5 lg:mt-8 lg:gap-x-4 sm:flex-col sm:gap-y-4 sm:gap-x-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
          >
            <Button theme="white-filled" size="new" to={LINKS.download} className="sm:w-full">
              Download
            </Button>
            <Button theme="outlined" size="new" to={LINKS.docsHome} className="sm:w-full">
              Read the docs
            </Button>
          </m.div>
          {/* Code example preview */}
          <div className="flex flex-col w-full max-w-2xl mt-20 lg:mt-16 sm:mt-12">
            <m.div
              className="overflow-hidden rounded-none border border-gray-new-20 bg-[#0A0A0B] group/hero-code"
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-between border-b border-gray-new-20 px-4 py-3 sm:px-3 sm:py-2.5">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="size-3 rounded-none bg-[#E02424]/60 sm:size-2" />
                    <span className="size-3 rounded-none bg-[#984A45]/60 sm:size-2" />
                    <span className="size-3 rounded-none bg-[#1B3A5C]/60 sm:size-2" />
                  </div>
                  <span className="ml-2 text-xs font-mono text-gray-new-50 uppercase tracking-widest sm:text-[10px] sm:ml-1">hello.sd</span>
                </div>
                <button
                  onClick={handleRun}
                  disabled={status === 'running'}
                  className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-new-50 opacity-0 group-hover/hero-code:opacity-100 transition-all hover:text-[#E02424] disabled:opacity-50 lg:opacity-100"
                >
                  {status === 'running' ? (
                    <span className="size-2 animate-spin rounded-full border border-current border-t-transparent" />
                  ) : (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="inline-block"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  )}
                  {status === 'running' ? 'Running...' : 'Run Code'}
                </button>
              </div>
              <div className="overflow-x-auto custom-scrollbar">
                <pre className="p-8 text-base leading-relaxed font-mono text-gray-new-80 sm:p-5 sm:text-[13px] min-w-fit">
                  <code>
                    <span className="text-[#E02424]">likh</span>(<span className="text-[#FFED9C]">&quot;Salam Dunya!&quot;</span>){'\n'}
                    {'\n'}
                    <span className="text-gray-new-50">{'# Variables'}</span>{'\n'}
                    <span className="text-[#E02424]">lafz</span> name = <span className="text-[#FFED9C]">&quot;Sindlish&quot;</span>{'\n'}
                    <span className="text-[#E02424]">adad</span> version = <span className="text-[#1B3A5C]">1</span>{'\n'}
                    {'\n'}
                    <span className="text-gray-new-50">{'# Conditional'}</span>{'\n'}
                    <span className="text-[#E02424]">agar</span> version == <span className="text-[#1B3A5C]">1</span> &#123;{'\n'}
                    {'  '}<span className="text-[#E02424]">likh</span>(<span className="text-[#FFED9C]">&quot;Sindlish is awesome!&quot;</span>){'\n'}
                    &#125;{'\n'}
                  </code>
                </pre>
              </div>
            </m.div>
            <AnimatePresence>
              {result && (
                <m.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 rounded-none border border-[#E02424]/20 bg-[#E02424]/5 p-6 shadow-xl sm:p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#E02424]">Console Output</span>
                      <button onClick={() => setResult(null)} className="text-[10px] text-gray-new-40 hover:text-white uppercase font-bold">Clear</button>
                    </div>
                    <pre
                      className="font-mono text-sm text-green-400 whitespace-pre-wrap sm:text-xs"
                      dangerouslySetInnerHTML={{ __html: result }}
                    />
                  </div>
                </m.div>
              )}
            </AnimatePresence>
          </div>
        </Container>
        <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
          <PauseableVideo
            className={cn(
              'relative left-1/2 w-[1920px] -translate-x-1/2 opacity-40',
              'xl:-top-[50px] xl:w-[1304px] lg:-top-2 lg:w-[1016px] sm:hidden'
            )}
            width={1920}
            height={832}
            poster="/images/pages/home/capture_1777192688.png"
          >
            <source
              src="/videos/pages/home/hero/hero-av1.mp4"
              type="video/mp4; codecs=av01.0.05M.08,opus"
            />
            <source src="/videos/pages/home/hero/hero.webm" type="video/webm" />
            <source src="/videos/pages/home/hero/hero.mp4" type="video/mp4" />
          </PauseableVideo>
          <Image
            className="relative left-[40%] hidden w-[752px] max-w-none -translate-x-1/2 sm:block opacity-20 contrast-125 brightness-75"
            src={mobileBgIllustration}
            width={752}
            height={326}
            quality={100}
            alt=""
            priority
            style={{ filter: 'sepia(100%) hue-rotate(-50deg) saturate(400%)' }}
          />
          <div className="hidden sm:block absolute inset-0 bg-radial-gradient from-[#E02424]/20 via-transparent to-transparent opacity-40" />
        </div>
      </section>

    </LazyMotion>
  );
};


export default Hero;
