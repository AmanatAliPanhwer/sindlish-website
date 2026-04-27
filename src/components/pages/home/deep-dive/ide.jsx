'use client';
import { m, LazyMotion, domAnimation, AnimatePresence, useScroll } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Container from 'components/shared/container';
import SectionLabel from 'components/shared/section-label';
const SUB_CONTEXTS = [
  {
    id: 'syntax',
    title: 'Syntax Highlighting',
    description: 'Custom TextMate grammar specifically mapped to Sindlish keywords and operators.',
    content: (
      <pre className="font-mono text-lg lg:text-base leading-relaxed">
        <code>
          <span className="text-gray-new-50">{'// Syntax Highlighting'}</span>{'\n'}
          <span className="text-[#E02424]">kaam</span> Salam() &#123;{'\n'}
          {'  '}<span className="text-[#E02424]">likh</span>(<span className="text-[#F5F0E1]">&quot;Hello&quot;</span>);{'\n'}
          &#125;
        </code>
      </pre>
    ),
  },
  {
    id: 'autocomplete',
    title: 'Intelligent Autocomplete',
    description: 'Get smart suggestions for keywords like agar, lafz, and kaam.',
    content: (
      <pre className="font-mono text-lg lg:text-base leading-relaxed">
        <code>
          <span className="text-gray-new-50">{'// Autocomplete suggestions'}</span>{'\n'}
          ag<span className="bg-[#E02424]/20 border-l border-[#E02424] text-white">ar</span> <span className="text-gray-new-40 text-sm">[keyword]</span>{'\n'}
          la<span className="bg-[#E02424]/20 border-l border-[#E02424] text-white">fz</span> <span className="text-gray-new-40 text-sm">[keyword]</span>{'\n'}
          ka<span className="bg-[#E02424]/20 border-l border-[#E02424] text-white">am</span> <span className="text-gray-new-40 text-sm">[keyword]</span>
        </code>
      </pre>
    ),
  },
  {
    id: 'errors',
    title: 'Real-time Diagnostics',
    description: 'Instant red squiggles and hover information explain syntax errors.',
    content: (
      <pre className="font-mono text-lg lg:text-base leading-relaxed">
        <code>
          <span className="text-gray-new-50">{'// Error Reporting'}</span>{'\n'}
          <span className="text-white">lik</span>(<span className="text-[#F5F0E1]">&quot;Hi&quot;</span>){'\n'}
          <span className="text-[#E02424] underline decoration-wavy underline-offset-4 font-bold">^^^</span>{'\n'}
          <span className="text-[#E02424] text-sm mt-2 block">Error: Did you mean &apos;likh&apos;?</span>
        </code>
      </pre>
    ),
  },
];
const IDE = () => {
  const containerRef = useRef(null);
  const [activeSub, setActiveSub] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (latest < 0.33) setActiveSub(0);
      else if (latest < 0.66) setActiveSub(1);
      else setActiveSub(2);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);
  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={containerRef}
        id="ide"
        className="ide relative h-[300vh] border-t border-gray-new-10"
      >
        <div className="sticky top-0 h-screen w-full flex items-center justify-center pt-20">
          <Container
            className="relative grid grid-cols-[224px_1fr] items-center gap-x-32 xl:grid-cols-1 xl:gap-y-12"
            size="1600"
          >
            <div className="xl:hidden" /> {/* Spacer for TOC */}
            <div className="flex flex-col gap-y-12 w-full">
              <div className="max-w-2xl">
                <SectionLabel theme="white" className="mb-4">IDE Integration</SectionLabel>
                <h2 className="text-5xl font-bold tracking-tight text-white xl:text-4xl lg:text-3xl">
                  Professional <span className="text-[#E02424]">Developer Experience</span>.
                </h2>
              </div>
              <div className="relative grid grid-cols-[1fr_1.5fr] gap-24 xl:gap-12 lg:grid-cols-1 items-center">
                {/* Text Side */}
                <div className="flex flex-col gap-y-8">
                  <AnimatePresence mode="wait">
                    <m.div
                      key={activeSub}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 30 }}
                      transition={{ duration: 0.5 }}
                      className="flex flex-col gap-y-4"
                    >
                      <h3 className="text-4xl font-bold text-white italic tracking-tighter">
                        {SUB_CONTEXTS[activeSub].title}
                      </h3>
                      <p className="text-xl text-gray-new-50 leading-relaxed max-w-md">
                        {SUB_CONTEXTS[activeSub].description}
                      </p>
                    </m.div>
                  </AnimatePresence>
                </div>
                {/* Card Side */}
                <div className="relative group h-full flex items-center">
                  <m.div 
                    className="relative w-full aspect-video rounded-none border border-gray-new-20 bg-[#0A0A0B] overflow-hidden shadow-2xl"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute top-0 w-full h-10 bg-white/5 border-b border-gray-new-20 px-6 flex items-center gap-2">
                       <div className="size-2 bg-[#E02424]/40 rounded-none" />
                       <span className="text-[10px] font-mono text-gray-new-40 uppercase tracking-widest">IDE_Core.v1</span>
                    </div>
                    
                    <div className="p-16 xl:p-12 lg:p-8 flex items-start justify-start h-full pt-20">
                      <AnimatePresence mode="wait">
                        <m.div
                          key={activeSub}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="w-full text-white"
                        >
                          {SUB_CONTEXTS[activeSub].content}
                        </m.div>
                      </AnimatePresence>
                    </div>
                  </m.div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </LazyMotion>
  );
};
export default IDE;
