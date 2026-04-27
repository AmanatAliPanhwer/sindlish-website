'use client';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import Image from 'next/image';

import Container from 'components/shared/container';
import SectionLabel from 'components/shared/section-label';
import databaseIcon from 'icons/home/database.svg';
import databricksIcon from 'icons/home/databricks.svg';
import bgNoise from 'images/pages/home/backed-by/bg-noise.jpg';
import { cn } from 'utils/cn';


const ITEMS = [
  {
    icon: databaseIcon,
    title: '30M+',
    description: 'Sindhi speakers worldwide getting access to modern coding.',
    className: 'w-[216px] xl:w-48',
  },
  {
    icon: databricksIcon,
    title: 'Community',
    description: 'A growing movement of developers preserving their heritage.',
    className: 'w-64 xl:w-[220px]',
  },
];

const BackedBy = () => (
  <LazyMotion features={domAnimation}>
    <m.section
      id="backed-by-giants"
      className="backed-by relative overflow-hidden bg-[#151617] pt-40 safe-paddings pb-[168px] text-white xl:py-[136px] lg:py-[88px] md:py-14"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <Container className="z-10" size="1344">
        <div className="relative z-10 flex gap-16 xl:gap-[108px] lg:gap-8 md:gap-5 md:p-0 sm:flex-col sm:gap-20">
          <div className="flex-1 border-l border-gray-new-20 px-8 xl:pr-0 xl:pl-6 lg:pl-[18px] sm:border-none sm:pl-0">
            <SectionLabel theme="white" className="mb-5 md:mb-4">Our Foundation</SectionLabel>
            <h2
              className={cn(
                'text-[44px] leading-dense tracking-tighter text-gray-new-70',
                'xl:text-[36px] lg:text-2xl md:text-xl',
                '[&>strong]:font-bold [&>strong]:text-white'
              )}
            >
              <strong>Preserving Culture through Code.</strong> Sindlish is built on the belief that
              programming should be inclusive. By bringing Sindhi to the tech world, we are empowering
              a new generation of software creators.
            </h2>
            <ul className="mt-[216px] flex gap-[92px] xl:mt-[136px] xl:gap-16 lg:gap-8 md:gap-5 sm:mt-9 xs:flex-col xs:gap-7">
              {ITEMS.map(({ icon, title, description, className }) => (
                <li className={cn(className, 'lg:w-40 sm:w-[220px]')} key={title}>
                  <Image
                    className="mb-5 opacity-80 xl:mb-4 lg:mb-3.5 lg:size-7 md:size-6 sm:size-5"
                    src={icon}
                    width={32}
                    height={32}
                    alt=""
                  />
                  <h3 className="text-4xl font-bold leading-dense tracking-tighter xl:text-[36px] lg:text-[28px] md:text-[24px]">
                    {title}
                  </h3>
                  <p className="mt-1.5 tracking-extra-tight text-gray-new-50 xl:text-sm xl:leading-snug lg:mt-1 sm:text-balance">
                    {description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={cn(
              'flex w-[480px] flex-col justify-between border-l border-gray-new-20 px-8',
              'xl:w-[340px] xl:pr-0 xl:pl-5 lg:w-64 lg:pl-[18px] sm:w-full sm:border-none sm:pl-0'

            )}
          >
            <SectionLabel theme="white" className="md:mb-4">Why it matters</SectionLabel>
            <div className="mt-8 space-y-8">
              <p className="text-xl leading-snug tracking-tight text-gray-new-60">
                &quot;Language is the key to identity. Sindlish ensures our language thrives in the digital age.&quot;
              </p>
              <div className="h-px w-12 bg-[#E02424]" />
              <p className="text-sm font-medium uppercase tracking-widest text-[#E02424]">
                Mission First
              </p>
            </div>
          </div>
        </div>
        </Container>
      <Image
        className="pointer-events-none absolute top-0 -right-[10%] h-full opacity-20 2xl:-right-[20%] sm:-right-1/2"
        src={bgNoise}
        alt=""
        width={1175}
        height={927}
        quality={100}
      />
    </m.section>
  </LazyMotion>
);

export default BackedBy;
