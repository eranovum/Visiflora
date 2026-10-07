/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Play, ArrowRight, X } from 'lucide-react';
import { BRIDGE_CONTENT } from './data/bridgeContent';

// Import hero image via ES module so Vite bundles it into dist/assets/ for production publish
import heroImageUrl from './assets/images/eye_health_editorial_hero_1791369263491.jpg';

const DEFAULT_HOPLINK =
  'https://getvisiflora.com/affiliates/download/native-prelanders/1/#hoplink';

export default function App() {
  const copy = BRIDGE_CONTENT.en.meta_safe;
  const hopLink = DEFAULT_HOPLINK;

  const [activeLegalModal, setActiveLegalModal] = useState<
    'privacy' | 'terms' | 'editorial' | null
  >(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F2] text-[#18181B]">
      {/* SECTION 1: #header (Preserves original #header Advertisement Notice + Clean Editorial Top Bar) */}
      <section id="header" className="bg-white border-b border-[#E4E2DD]">
        {/* Advertorial Disclosure Strip */}
        <div className="bg-[#F2EFE9] border-b border-[#E4E2DD] py-1.5 px-4 text-center">
          <p className="text-xs text-[#52525B] tracking-wide font-normal">
            {copy.advertorialNotice}
          </p>
        </div>

        {/* Strict 3-Zone Top Bar Contract */}
        <header className="max-w-[920px] mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#editorial-report"
            className="font-editorial text-2xl sm:text-[26px] tracking-tight text-[#18181B] whitespace-nowrap shrink-0"
          >
            {copy.publicationName}
          </a>

          {/* Zone 2: Clean Text Navigation Links */}
          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-[#52525B]">
            <a
              href="#editorial-report"
              className="hover:text-[#18181B] hover:underline underline-offset-4 transition-colors whitespace-nowrap"
            >
              {copy.navLinks.report}
            </a>
            <a
              href={hopLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#18181B] hover:underline underline-offset-4 transition-colors whitespace-nowrap"
            >
              Video Presentation
            </a>
            <a
              href="#footer"
              className="hover:text-[#18181B] hover:underline underline-offset-4 transition-colors whitespace-nowrap"
            >
              {copy.navLinks.disclaimers}
            </a>
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="flex items-center shrink-0">
            <a
              href={hopLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-[#1E3A8A] hover:bg-[#172554] rounded-lg transition-colors whitespace-nowrap"
            >
              <span>Watch Briefing</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </header>
      </section>

      {/* SECTION 2: #body (Preserves exact single-container prelander structure) */}
      <section id="body" className="flex-1 py-6 sm:py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[920px] mx-auto">
          {/* Main Prelander Container */}
          <main
            id="editorial-report"
            className="container bg-white border border-[#E4E2DD] rounded-xl p-5 sm:p-8 lg:p-12"
          >
            {/* Clean Unboxed Editorial Metadata with Typographic Separators */}
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs sm:text-[13px] text-[#52525B] mb-4 text-center">
              <span className="font-semibold text-[#9A3412]">{copy.kicker}</span>
              <span aria-hidden="true">·</span>
              <span>{copy.authorName}</span>
              <span aria-hidden="true">·</span>
              <span>{copy.updatedDate}</span>
              <span aria-hidden="true">·</span>
              <span>{copy.readTime}</span>
            </div>

            {/* Main Headline (<h1>) */}
            <h1
              className="font-editorial text-3xl sm:text-4xl lg:text-[46px] leading-[1.13] text-[#18181B] text-center max-w-3xl mx-auto mb-4"
              style={{ textWrap: 'balance' }}
            >
              {copy.headlinePart1}
              <span className="italic text-[#9A3412] underline decoration-[#9A3412]/30 underline-offset-4">
                {copy.headlineHighlight}
              </span>
              {copy.headlinePart2}
            </h1>

            {/* Editorial Subheadline / Deck */}
            <p
              className="text-center text-[16px] sm:text-[17px] text-[#52525B] max-w-2xl mx-auto mb-7 leading-relaxed"
              style={{ textWrap: 'balance' }}
            >
              {copy.subheadline}
            </p>

            {/* Clickable Featured Image / Video Briefing Preview (<a> wrapping <img>) */}
            <div className="mb-8 max-w-3xl mx-auto">
              <a
                href={hopLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative rounded-xl overflow-hidden border border-[#E4E2DD] bg-[#0F172A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A8A]"
              >
                <div className="aspect-video w-full relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]">
                  <img
                    src={heroImageUrl}
                    alt={copy.videoCaption}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-90 group-hover:scale-[1.015] group-hover:opacity-100 transition-all duration-200"
                  />
                  {/* Measured Scrim Overlay for guaranteed 4.5:1 contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Center Play Affordance Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#1E3A8A]/95 group-hover:bg-[#1E3A8A] text-white flex items-center justify-center shadow-lg transition-transform duration-150 group-hover:scale-105">
                      <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
                    </div>
                  </div>

                  {/* Bottom Video Bar */}
                  <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 flex items-center justify-between text-white text-xs sm:text-sm">
                    <span className="font-medium tracking-wide">
                      {copy.videoPreviewBadge}
                    </span>
                    <span className="font-mono tabular-nums text-white/90">
                      {copy.videoDuration}
                    </span>
                  </div>
                </div>
              </a>
              <p className="text-xs font-serif italic text-[#71717A] mt-2.5 text-center">
                {copy.videoCaption}
              </p>
            </div>

            {/* Core Editorial Story (.text__holder) */}
            <div className="text__holder max-w-[65ch] mx-auto space-y-5 text-[17px] sm:text-[18px] leading-[1.72] text-[#27272A]">
              {/* Paragraph 1 */}
              <p className="first-letter:text-5xl first-letter:font-editorial first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none first-letter:text-[#18181B]">
                {copy.paragraphs.p1Prefix}
                <a
                  href={hopLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1E3A8A] font-semibold underline decoration-[#1E3A8A]/40 underline-offset-4 hover:text-[#172554] transition-colors"
                >
                  {copy.paragraphs.p1LinkText}
                </a>
              </p>

              {/* Paragraph 2 */}
              <p>
                {copy.paragraphs.p2Prefix}
                <strong className="font-semibold text-[#18181B]">
                  {copy.paragraphs.p2Bold}
                </strong>
              </p>

              {/* Editorial Pull Quote */}
              <blockquote className="my-7 pl-5 border-l-2 border-[#9A3412] py-1">
                <p className="font-editorial italic text-2xl sm:text-[26px] leading-[1.35] text-[#18181B] mb-2">
                  {copy.pullQuote.quote}
                </p>
                <footer className="text-xs font-sans not-italic text-[#71717A]">
                  {copy.pullQuote.attribution}
                </footer>
              </blockquote>
            </div>

            {/* Primary CTA Button Section (Preserves original .d-flex .justify-content-center .btn-primary .btn-lg) */}
            <div className="mt-9 pt-6 border-t border-[#E4E2DD] text-center">
              <div className="flex flex-col items-center justify-center">
                <a
                  href={hopLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-w-[300px] inline-flex items-center justify-center gap-2.5 px-8 py-4 text-lg sm:text-xl font-semibold text-white bg-[#1E3A8A] hover:bg-[#172554] active:translate-y-px rounded-lg shadow-xs transition-all duration-150 whitespace-nowrap"
                >
                  <span>{copy.primaryCtaButton}</span>
                  <ArrowRight className="w-5 h-5 shrink-0" />
                </a>
                <p className="text-xs text-[#71717A] mt-3">{copy.ctaSubtext}</p>
              </div>
            </div>
          </main>
        </div>
      </section>

      {/* SECTION 3: #footer (Preserves all 4 legal/compliance paragraphs from original HTML) */}
      <section
        id="footer"
        className="bg-[#ECEAE4] border-t border-[#DCD9D0] py-12 px-4 sm:px-6 lg:px-8 mt-8"
      >
        <div className="max-w-3xl mx-auto text-center space-y-4 text-xs text-[#52525B] leading-relaxed">
          <p className="font-semibold text-[#27272A] tracking-wide">
            {copy.footer.advertorialHeader}
          </p>

          <p>
            <strong className="text-[#27272A]">{copy.footer.disclaimerTitle}</strong>
            <br />
            {copy.footer.disclaimerBody}
          </p>

          <p>{copy.footer.trademarkBody}</p>

          <div className="pt-4 border-t border-[#DCD9D0] flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-[#52525B]">
            <span>{copy.footer.copyright}</span>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => setActiveLegalModal('privacy')}
              className="hover:text-[#18181B] underline underline-offset-2 cursor-pointer"
            >
              {copy.footer.privacyLink}
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => setActiveLegalModal('terms')}
              className="hover:text-[#18181B] underline underline-offset-2 cursor-pointer"
            >
              {copy.footer.termsLink}
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => setActiveLegalModal('editorial')}
              className="hover:text-[#18181B] underline underline-offset-2 cursor-pointer"
            >
              {copy.footer.contactLink}
            </button>
          </div>
        </div>
      </section>

      {/* Compliance Legal Links Modal (Privacy, Terms, Editorial Standards required by Meta Ads) */}
      {activeLegalModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white border border-[#E4E2DD] rounded-xl max-w-lg w-full p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-[#E4E2DD] pb-3">
              <h3 className="font-editorial text-2xl text-[#18181B]">
                {activeLegalModal === 'privacy'
                  ? copy.footer.privacyLink
                  : activeLegalModal === 'terms'
                  ? copy.footer.termsLink
                  : copy.footer.contactLink}
              </h3>
              <button
                type="button"
                onClick={() => setActiveLegalModal(null)}
                className="p-1 text-[#71717A] hover:text-[#18181B] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="text-xs text-[#52525B] space-y-3 leading-relaxed max-h-[60vh] overflow-y-auto">
              <p>
                In compliance with Meta Ads advertising policies and consumer protection standards, this portal operates as an independent editorial publication (Advertorial).
              </p>
              <p>{copy.footer.disclaimerBody}</p>
              <p>{copy.footer.trademarkBody}</p>
            </div>
            <div className="pt-2 text-right">
              <button
                type="button"
                onClick={() => setActiveLegalModal(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#18181B] rounded-lg cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
