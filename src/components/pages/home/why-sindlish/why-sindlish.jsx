'use client';
import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Container from 'components/shared/container';
import boltIcon from 'icons/home/features/bolt-lightning.svg';
import clockIcon from 'icons/home/features/clock.svg';
import connectionsIcon from 'icons/home/features/connections.svg';
import GitHubIcon from 'icons/github.inline.svg';
import { runSindlish } from 'lib/sindlish-interpreter';
import { cn } from 'utils/cn';
const Keyword = ({ children }) => <span className="text-[#E02424] font-bold">{children}</span>;
const String = ({ children }) => <span className="text-[#FFED9C]">{children}</span>;
const Punctuation = ({ children }) => <span className="text-white">{children}</span>;
const Function = ({ children }) => <span className="text-[#F7B983]">{children}</span>;
const ReasonContent = ({ code, children }) => {
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState('idle');
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
    <div className="flex flex-col gap-4">
      <div className="rounded-none border border-gray-new-20 bg-[#0A0A0B] p-6 shadow-2xl relative group/card">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex gap-2">
            <div className="size-3 rounded-none bg-[#E02424]/40" />
            <div className="size-3 rounded-none bg-[#984A45]/40" />
            <div className="size-3 rounded-none bg-[#1B3A5C]/40" />
          </div>
          <button 
            onClick={handleRun}
            disabled={status === 'running'}
            className="text-[10px] font-bold uppercase tracking-widest text-gray-new-40 opacity-0 group-hover/card:opacity-100 transition-opacity hover:text-[#E02424] disabled:opacity-50"
          >
            {status === 'running' ? 'Running...' : 'Run →'}
          </button>
        </div>
        <pre className="text-sm leading-relaxed text-gray-new-80">
          <code>{children}</code>
        </pre>
      </div>
      
      <AnimatePresence>
        {result && (
          <m.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="rounded-none border border-green-500/20 bg-green-500/5 p-4 mt-2">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-green-500">Output</span>
                <button onClick={() => setResult(null)} className="text-[10px] text-gray-new-40 hover:text-white uppercase font-bold">Clear</button>
              </div>
              <pre 
                className="text-xs font-mono text-green-400 whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: result }}
              />
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};
const REASONS = [
  {
    title: 'Code in Sindhi',
    subtitle: 'Write in your tongue',
    description:
      'Sindlish uses Roman Sindhi keywords like likh (print) and agar (if). Write your logic in the language you think in, removing the cognitive overhead of translating thought to code.',
    icon: connectionsIcon,
    content: (
      <ReasonContent code={`kaam salam() {\n  likh("Bhale Kare Aya!")\n}\n\nagar (sach) {\n  salam()\n}`}>
        <Keyword>kaam</Keyword> <Function>salam</Function><Punctuation>()</Punctuation> &#123;{'\n'}
        {'  '}<Keyword>likh</Keyword><Punctuation>(</Punctuation><String>&quot;Bhale Kare Aya!&quot;</String><Punctuation>)</Punctuation>{'\n'}
        &#125;{'\n'}
        {'\n'}
        <Keyword>agar</Keyword> <Punctuation>(</Punctuation>sach<Punctuation>)</Punctuation> &#123;{'\n'}
        {'  '}<Function>salam</Function><Punctuation>()</Punctuation>{'\n'}
        &#125;
      </ReasonContent>
    ),
  },
  {
    title: 'Learn & Teach',
    subtitle: 'Education first',
    description:
      'Designed explicitly for education. Sindlish removes the English barrier from programming, making advanced software concepts accessible to Sindhi-speaking students globally.',
    icon: clockIcon,
    content: (
      <div className="flex flex-col gap-4 rounded-none border border-gray-new-20 bg-[#0A0A0B] p-8 shadow-2xl">
        <div className="flex items-center justify-between border-b border-gray-new-20 pb-4">
          <span className="text-xs font-semibold uppercase text-gray-new-50 tracking-widest">English</span>
          <span className="text-xs font-semibold uppercase text-[#E02424] tracking-widest">Sindlish</span>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between group cursor-default">
            <span className="text-sm text-gray-new-70 italic transition-colors group-hover:text-gray-new-90">print(&quot;Hi&quot;)</span>
            <div className="h-px flex-1 mx-4 bg-gray-new-10" />
            <span className="text-sm font-bold text-white group-hover:text-[#E02424] transition-colors">likh(&quot;Hi&quot;)</span>
          </div>
          <div className="flex items-center justify-between group cursor-default">
            <span className="text-sm text-gray-new-70 italic transition-colors group-hover:text-gray-new-90">if (condition)</span>
            <div className="h-px flex-1 mx-4 bg-gray-new-10" />
            <span className="text-sm font-bold text-white group-hover:text-[#E02424] transition-colors">agar (faislo)</span>
          </div>
          <div className="flex items-center justify-between group cursor-default">
            <span className="text-sm text-gray-new-70 italic transition-colors group-hover:text-gray-new-90">return x</span>
            <div className="h-px flex-1 mx-4 bg-gray-new-10" />
            <span className="text-sm font-bold text-white group-hover:text-[#E02424] transition-colors">wapas x</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Open Source',
    subtitle: 'Built for the community',
    description:
      'Sindlish is fully open source. Built with a high-performance bytecode VM, a native object model, and seamless integration through a dedicated VS Code extension.',
    icon: boltIcon,
    content: (
      <div className="rounded-none border border-gray-new-20 bg-[#0A0A0B] p-0 shadow-2xl overflow-hidden group">
        <div className="p-6 border-b border-gray-new-20 bg-gray-new-10/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <GitHubIcon className="size-5 text-white" />
            <span className="text-sm font-bold text-white">AmanatAliPanhwer / <span className="text-[#E02424]">Sindlish</span></span>
          </div>
          <div className="px-2 py-0.5 border border-gray-new-20 text-[10px] font-bold text-gray-new-50 uppercase tracking-tighter">Public</div>
        </div>
        <div className="p-6 space-y-6">
          <p className="text-xs text-gray-new-50 leading-relaxed italic">
            &quot;The first Roman Sindhi programming language. Empowering 30M+ speakers.&quot;
          </p>
          <div className="flex gap-6">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white group-hover:text-[#E02424] transition-colors">33</span>
              <span className="text-[10px] text-gray-new-50 uppercase tracking-widest font-bold">Commits</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white group-hover:text-[#E02424] transition-colors">1</span>
              <span className="text-[10px] text-gray-new-50 uppercase tracking-widest font-bold">Star</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white group-hover:text-[#E02424] transition-colors">30+</span>
              <span className="text-[10px] text-gray-new-50 uppercase tracking-widest font-bold">Files</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-[11px] font-bold tracking-tighter text-gray-new-60 uppercase">
              <span>Main Language</span>
              <span className="text-white">Python 98.5%</span>
            </div>
            <div className="h-1.5 w-full bg-gray-new-10 rounded-none overflow-hidden flex">
              <div className="h-full bg-[#E02424]" style={{ width: '98.5%' }} />
              <div className="h-full bg-[#1B3A5C]" style={{ width: '1.5%' }} />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {['interpreter', 'vscode-extension', 'bytecode-vm', 'sindhi-grammar'].map(tag => (
              <span key={tag} className="px-2 py-1 bg-gray-new-10 border border-gray-new-20 text-[10px] text-gray-new-70 font-mono">
                {tag}
              </span>
            ))}
          </div>
          <div className="pt-4 mt-2 border-t border-gray-new-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-none bg-green-500 animate-pulse" />
              <span className="text-[10px] font-bold text-gray-new-40 uppercase tracking-widest">Active Development</span>
            </div>
            <span className="text-[11px] font-bold text-[#E02424] group-hover:underline cursor-pointer">View Repo →</span>
          </div>
        </div>
      </div>
    ),
  },
];
const WhySindlish = () => (
  <LazyMotion features={domAnimation}>
    <m.section 
      id="why-sindlish"
      className="why-sindlish safe-paddings py-32 xl:py-24 lg:py-20 md:py-16 scroll-mt-20"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20%' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <Container
        className="relative grid grid-cols-[224px_1fr] items-center gap-x-32 xl:grid-cols-1 xl:gap-y-12 pt-[180px] pb-20"
        size="1600"
      >
        <div className="xl:hidden" /> {/* Spacer for TOC */}
        <div className="flex flex-col gap-y-24">
          <div className="text-left">
            <span className="text-sm font-medium uppercase tracking-wider text-[#E02424]">
              Cho Sindlish?
            </span>
            <h2 className="mt-3 text-[52px] leading-tight font-bold tracking-tighter xl:text-4xl lg:text-[32px] sm:text-[28px]">
              Why Sindlish?
            </h2>
            <p className="mt-4 max-w-xl text-xl leading-snug tracking-extra-tight text-gray-new-60 lg:text-lg">
              Sindlish brings programming to 30+ million Sindhi speakers by letting them write code
              in their mother tongue.
            </p>
          </div>
          <div className="space-y-40 xl:space-y-32 lg:space-y-24 md:space-y-20">
            {REASONS.map(({ title, subtitle, description, icon, content }, index) => (
              <m.div
                className={cn(
                  'flex items-center gap-x-24 xl:gap-x-16 lg:gap-x-12 md:flex-col md:items-start md:gap-y-12',
                  index % 2 !== 0 && 'flex-row-reverse md:flex-col'
                )}
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex-1">
                  <div className="mb-6 flex size-12 items-center justify-center rounded-none bg-[#E02424]/10 transition-colors group-hover:bg-[#E02424]/20">
                    <Image
                      className="opacity-90"
                      src={icon}
                      width={24}
                      height={24}
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <h3 className="text-4xl font-bold leading-dense tracking-tighter text-white xl:text-3xl sm:text-2xl">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm font-medium uppercase tracking-widest text-[#E02424]">
                    {subtitle}
                  </p>
                  <p className="mt-6 text-xl leading-snug tracking-extra-tight text-gray-new-60 lg:text-lg">
                    {description}
                  </p>
                </div>
                <div className="flex-1 xl:w-full">
                  <div className="relative group">
                    <div className="absolute -inset-4 rounded-none bg-[#E02424]/5 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_50px_-12px_rgba(224,36,36,0.3)]">
                      {content}
                    </div>
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </Container>
    </m.section>
  </LazyMotion>
);
export default WhySindlish;