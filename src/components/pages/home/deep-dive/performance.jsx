'use client';
import { m, LazyMotion, domAnimation, AnimatePresence, useScroll } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Container from 'components/shared/container';
import SectionLabel from 'components/shared/section-label';
const PERF_CONTEXTS = [
  {
    title: 'Bytecode VM',
    metric: '1.2ms',
    label: 'Mean Dispatch Time',
    description: 'Optimized for rapid instruction processing and complex logic.',
  },
  {
    title: 'Native Objects',
    metric: '0.8ms',
    label: 'Property Lookup',
    description: 'Protocol-based dispatch for ultra-fast object interaction.',
  },
  {
    title: 'Memory Mgmt',
    metric: '99.9%',
    label: 'Safety Rate',
    description: 'Native memory system preventing leaks in long-running processes.',
  },
];
const Performance = () => {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (latest < 0.33) setActiveTab(0);
      else if (latest < 0.66) setActiveTab(1);
      else setActiveTab(2);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);
  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={containerRef}
        id="performance"
        className="performance relative h-[300vh] border-t border-gray-new-10"
      >
        <div className="sticky top-0 h-screen w-full flex items-center justify-center pt-20">
          <Container
            className="relative grid grid-cols-[224px_1fr] items-center gap-x-32 xl:grid-cols-1 xl:gap-y-12"
            size="1600"
          >
            <div className="xl:hidden" /> {/* Spacer for TOC */}
            <div className="flex flex-col gap-y-12 w-full">
              <div className="max-w-2xl">
                <SectionLabel theme="white" className="mb-4">Performance & VM</SectionLabel>
                <h2 className="text-5xl font-bold tracking-tight text-white xl:text-4xl lg:text-3xl">
                  The Speed of <span className="text-[#E02424]">Modern Engineering</span>.
                </h2>
              </div>
              <div className="grid grid-cols-[1.2fr_1fr] gap-12 xl:gap-8 lg:grid-cols-1 items-stretch min-h-[400px]">
                <div className="flex flex-col gap-y-3">
                  {PERF_CONTEXTS.map((item, i) => (
                    <div
                      key={i}
                      className={`relative p-6 text-left transition-all duration-700 border rounded-none ${
                        i === activeTab 
                          ? 'bg-[#0A0A0B] border-[#E02424]/40 shadow-[0_0_50px_-10px_rgba(224,36,36,0.15)] scale-[1.02] z-10' 
                          : 'border-gray-new-10 opacity-20 grayscale'
                      }`}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h3 className={`text-xl font-bold transition-colors ${i === activeTab ? 'text-white' : 'text-gray-new-40'}`}>
                          {item.title}
                        </h3>
                        <span className={`text-xs font-mono transition-colors ${i === activeTab ? 'text-[#E02424]' : 'text-gray-new-20'}`}>
                          0{i+1}
                        </span>
                      </div>
                      <p className={`transition-colors text-sm leading-relaxed ${i === activeTab ? 'text-gray-new-60' : 'text-gray-new-20'}`}>
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="bg-[#0A0A0B] border border-gray-new-20 p-8 flex flex-col justify-center items-center relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#E02424]/10 to-transparent" />
                  
                  <AnimatePresence mode="wait">
                    <m.div
                      key={activeTab}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="flex flex-col items-center text-center relative z-10 w-full"
                    >
                      <span className="text-[100px] font-black leading-none text-white italic tracking-tighter xl:text-[80px] lg:text-[60px]">
                        {PERF_CONTEXTS[activeTab].metric}
                      </span>
                      <span className="mt-4 text-xs font-bold uppercase tracking-[0.4em] text-[#E02424]">
                        {PERF_CONTEXTS[activeTab].label}
                      </span>
                    </m.div>
                  </AnimatePresence>
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                       style={{ backgroundImage: 'radial-gradient(#E02424 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </LazyMotion>
  );
};
export default Performance;