'use client';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import Image from 'next/image';

import Container from 'components/shared/container';
import SectionLabel from 'components/shared/section-label';
import boltIcon from 'icons/home/features/bolt-lightning.svg';
import chartIcon from 'icons/home/features/chart.svg';
import clockIcon from 'icons/home/features/clock.svg';
import connectionsIcon from 'icons/home/features/connections.svg';
import { cn } from 'utils/cn';


const ITEMS = [
  {
    icon: connectionsIcon,
    title: 'Community First.',
    description: 'A growing, collaborative ecosystem for Sindhi developers and educators.',
  },
  {
    icon: chartIcon,
title: 'Rich Docs.',
    description: 'Comprehensive tutorials and references directly in Roman Sindhi.',
  },
  {
    icon: boltIcon,
    title: 'Modern Tooling.',
    description: 'VS Code integration and native error handling for smooth dev experience.',
  },
  {
    icon: clockIcon,
    title: 'Fast Execution.',
    description: 'Custom bytecode VM designed for performance and reliability.',
  },
];


const Features = () => (
    <LazyMotion features={domAnimation}>
    <m.section
      id="features"
      className="features relative scroll-mt-20 overflow-hidden py-40 safe-paddings xl:py-32 lg:py-24 md:py-20 border-t border-gray-new-10"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20%' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
       <Container
        className="relative grid grid-cols-[224px_1fr] items-start gap-x-32 xl:grid-cols-1 xl:gap-y-12 md:gap-y-8"
        size="1600"
      >
        <div className="xl:hidden" /> {/* Spacer for TOC */}
        <div className="flex flex-col gap-y-16 lg:gap-y-12 md:gap-y-8">
          <div>
            <SectionLabel theme="white" className="mb-6 italic opacity-80 md:mb-4">Global Impact</SectionLabel>
            <h2 className="flex flex-col items-start gap-y-4 md:gap-y-2">
              <span className="text-xl font-medium uppercase tracking-[0.2em] text-[#E02424] md:text-lg">
                Built for everyone
              </span>
              <span className="text-5xl font-bold tracking-tight text-white xl:text-4xl lg:text-3xl md:text-2xl max-w-4xl leading-[1.1]">
                Empowering the community with <br className="sm:hidden" />
                modern software development tools.
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-1 md:gap-4">
            {ITEMS.map(({ icon, title, description, gradient }, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                className={cn(
                  'group relative flex flex-col p-10 bg-[#0A0A0B] border border-gray-new-20 rounded-none transition-all duration-300',
                  'hover:border-[#E02424]/30 hover:shadow-[0_0_40px_-15px_rgba(224,36,36,0.2)]',
                  'md:p-8 sm:p-6'
                )}
              >
                <div className={cn(
                  'absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100',
                  gradient
                )} />
                <div className="relative z-10">
                  <div className="mb-8 flex size-12 items-center justify-center bg-[#E02424]/10 text-[#E02424] transition-colors duration-300 group-hover:bg-[#E02424]/20 group-hover:shadow-[0_0_20px_rgba(224,36,36,0.2)]">
                    <Image
                      className="opacity-90 transition-transform duration-300 group-hover:scale-110"
                      src={icon}
                      width={24}
                      height={24}
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[#E02424]">
                    {title}
                  </h3>
                  <p className="mt-4 text-lg text-gray-new-50 leading-relaxed tracking-tight group-hover:text-gray-new-70 transition-colors">
                    {description}
                  </p>
                </div>
              </m.div>
            ))}
          </div>
        </div>
    </Container>
    </m.section>
  </LazyMotion>
);

export default Features;
