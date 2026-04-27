'use client';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Layout from 'components/shared/layout';
import GitHubIcon from 'icons/github.inline.svg';
const CreatorPage = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch('https://api.github.com/users/AmanatAliPanhwer')
      .then((res) => res.json())
      .then(setUser)
      .catch(() => {});
  }, []);
  return (
    <Layout isHeaderSticky isHeaderStickyOverlay theme="black">
      <LazyMotion features={domAnimation}>
        <section className="safe-paddings relative bg-black-pure text-white">
          <Container
            className="relative z-10 pt-40 pb-32 xl:pt-32 xl:pb-24 lg:pt-28 lg:pb-20 md:pt-24 md:pb-16"
            size="1600"
          >
            {/* Header */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-sm font-medium uppercase tracking-wider text-[#E02424]">
                The Creator
              </span>
              <h1 className="mt-3 text-[52px] font-bold leading-tight tracking-tighter xl:text-4xl lg:text-[32px] sm:text-[28px]">
                Behind Sindlish
              </h1>
            </m.div>
            {/* Profile Card */}
            {user && (
              <m.div
                className="mt-16 flex items-start gap-16 lg:flex-col lg:gap-12"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Left: Avatar + Stats Card */}
                <div className="w-[360px] shrink-0 rounded-none border border-gray-new-20 bg-[#0A0A0B] lg:w-full lg:max-w-md">
                  {/* Avatar Header */}
                  <div className="flex items-center gap-5 border-b border-gray-new-20 p-6">
                    <Image
                      src={user.avatar_url}
                      alt={`${user.name} Avatar`}
                      width={64}
                      height={64}
                      className="rounded-none border border-gray-new-20"
                    />
                    <div>
                      <h2 className="text-xl font-bold tracking-tighter">
                        {user.name || 'Amanat Ali Panhwer'}
                      </h2>
                      <span className="text-sm text-gray-new-50">@{user.login}</span>
                    </div>
                  </div>
                  {/* Stats */}
                  <div className="grid grid-cols-3 divide-x divide-gray-new-20 border-b border-gray-new-20">
                    <div className="flex flex-col items-center py-5">
                      <span className="text-2xl font-bold text-white">{user.public_repos}</span>
                      <span className="mt-1 text-[10px] font-bold uppercase tracking-widest text-gray-new-50">
                        Repos
                      </span>
                    </div>
                    <div className="flex flex-col items-center py-5">
                      <span className="text-2xl font-bold text-white">{user.followers}</span>
                      <span className="mt-1 text-[10px] font-bold uppercase tracking-widest text-gray-new-50">
                        Followers
                      </span>
                    </div>
                    <div className="flex flex-col items-center py-5">
                      <span className="text-2xl font-bold text-white">{user.following}</span>
                      <span className="mt-1 text-[10px] font-bold uppercase tracking-widest text-gray-new-50">
                        Following
                      </span>
                    </div>
                  </div>
                  {/* Details */}
                  <div className="space-y-3 p-6">
                    {user.location && (
                      <div className="flex items-center gap-3 text-sm text-gray-new-60">
                        <span className="text-gray-new-40">📍</span>
                        <span>{user.location}</span>
                      </div>
                    )}
                    {user.company && (
                      <div className="flex items-center gap-3 text-sm text-gray-new-60">
                        <span className="text-gray-new-40">🏢</span>
                        <span>{user.company}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-3 text-sm text-gray-new-60">
                      <span className="text-gray-new-40">📅</span>
                      <span>Joined {new Date(user.created_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                    </div>
                  </div>
                  {/* Action */}
                  <div className="border-t border-gray-new-20 p-6">
                    <Button
                      className="w-full justify-center gap-2"
                      to={user.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      theme="white-filled"
                      size="new"
                    >
                      <GitHubIcon className="size-4" />
                      Follow on GitHub
                    </Button>
                  </div>
                </div>
                {/* Right: Bio + Mission */}
                <div className="flex-1">
                  <p className="text-xl leading-relaxed tracking-tight text-gray-new-60 lg:text-lg">
                    {user.bio ||
                      'Python developer with 5 years of experience in AI, machine learning, and automation.'}
                  </p>
                  <div className="mt-12 space-y-10">
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-[#E02424]">
                        The Mission
                      </h3>
                      <p className="mt-3 text-lg leading-relaxed text-gray-new-50">
                        Sindlish was born from a simple question: why should programming be exclusive
                        to English speakers? The language is designed to bring software development
                        closer to 30+ million native Sindhi speakers by letting them code in their
                        mother tongue — removing the cognitive overhead of translating thought to
                        code.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-[#E02424]">
                        The Architecture
                      </h3>
                      <p className="mt-3 text-lg leading-relaxed text-gray-new-50">
                        Under the hood, Sindlish is powered by a professional-grade stack-based
                        Bytecode Virtual Machine inspired by CPython, featuring a native object model
                        with protocol-based dispatch, a hybrid typing system, and Rust-inspired error
                        handling.
                      </p>
                    </div>
                    <div className="rounded-none border border-gray-new-20 bg-[#0A0A0B] p-6">
                      <div className="flex items-center gap-3">
                        <div className="size-2 rounded-none bg-green-500 animate-pulse" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-new-40">
                          Currently Working On
                        </span>
                      </div>
                      <p className="mt-3 text-sm text-gray-new-60">
                        Sindlish v0.2.0 — Adding class definitions, inheritance, and a standard
                        module system.
                      </p>
                    </div>
                  </div>
                </div>
              </m.div>
            )}
          </Container>
        </section>
      </LazyMotion>
    </Layout>
  );
};
export default CreatorPage;
