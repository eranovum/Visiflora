import { BRIDGE_CONTENT, ComplianceMode, Language } from '../data/bridgeContent';

export interface ExportConfig {
  hopLink: string;
  language: Language;
  mode: ComplianceMode;
  metaPixelId: string;
  heroImageSrc: string;
}

export function generateStandaloneBridgeHtml(config: ExportConfig): string {
  const copy = BRIDGE_CONTENT[config.language][config.mode];
  const safeHopLink =
    config.hopLink.trim() ||
    'https://getvisiflora.com/affiliates/download/native-prelanders/1/#hoplink';
  const pixelSnippet = config.metaPixelId.trim()
    ? `<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${config.metaPixelId.trim()}');
fbq('track', 'PageView');
function trackBridgeClick() {
  if (window.fbq) { fbq('track', 'Lead'); }
}
</script>
<!-- End Meta Pixel Code -->`
    : `<script>
function trackBridgeClick() {}
</script>`;

  return `<!DOCTYPE html>
<html lang="${config.language}">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noimageindex, nofollow, nosnippet">
  <title>${copy.publicationName} - ${copy.kicker}</title>
  <meta name="description" content="${copy.subheadline}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  ${pixelSnippet}
  <style type="text/css">
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      color: #18181B;
      background-color: #F7F6F2;
      line-height: 1.65;
      -webkit-font-smoothing: antialiased;
    }
    #header {
      background-color: #F2EFE9;
      border-bottom: 1px solid #E4E2DD;
      padding: 0.5rem 1rem;
      text-align: center;
    }
    #header p {
      font-size: 12px;
      color: #52525B;
      letter-spacing: 0.04em;
      margin: 0;
    }
    #body {
      background-color: #F7F6F2;
      padding: 2rem 1rem 4rem;
    }
    #body .container {
      max-width: 900px;
      margin: 0 auto;
      background-color: #FFFFFF;
      border: 1px solid #E4E2DD;
      border-radius: 12px;
      padding: 2.75rem 2.25rem;
    }
    .meta-row {
      font-size: 13px;
      color: #52525B;
      text-align: center;
      margin-bottom: 1rem;
    }
    .meta-row .kicker {
      color: #9A3412;
      font-weight: 600;
    }
    h1 {
      font-family: 'Instrument Serif', Georgia, serif;
      font-size: clamp(2rem, 4.2vw, 2.875rem);
      line-height: 1.13;
      font-weight: 400;
      text-align: center;
      color: #18181B;
      max-width: 760px;
      margin: 0 auto 1rem;
      text-wrap: balance;
    }
    h1 .highlight {
      color: #9A3412;
      font-style: italic;
      text-decoration: underline;
      text-decoration-color: rgba(154, 52, 18, 0.3);
      text-underline-offset: 4px;
    }
    .subheadline {
      text-align: center;
      font-size: 17px;
      color: #52525B;
      max-width: 660px;
      margin: 0 auto 1.75rem;
    }
    .video-wrapper {
      max-width: 760px;
      margin: 0 auto 2rem;
    }
    .video-preview-link {
      display: block;
      position: relative;
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid #E4E2DD;
      text-decoration: none;
      background: #0F172A;
      aspect-ratio: 16 / 9;
    }
    .video-preview-link img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      opacity: 0.9;
      transition: transform 0.2s ease, opacity 0.2s ease;
    }
    .video-preview-link:hover img {
      transform: scale(1.015);
      opacity: 1;
    }
    .video-scrim {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, transparent 100%);
    }
    .video-play-btn-wrap {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .video-play-btn {
      width: 76px;
      height: 76px;
      border-radius: 50%;
      background-color: rgba(30, 58, 138, 0.95);
      color: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 10px 25px rgba(0,0,0,0.35);
      transition: transform 0.15s ease, background-color 0.15s ease;
    }
    .video-preview-link:hover .video-play-btn {
      transform: scale(1.06);
      background-color: #1E3A8A;
    }
    .video-bottom-bar {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 16px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #FFFFFF;
      font-size: 13px;
      font-weight: 500;
    }
    .video-duration {
      font-family: 'JetBrains Mono', monospace;
    }
    .video-caption {
      font-family: Georgia, serif;
      font-style: italic;
      font-size: 12px;
      color: #71717A;
      text-align: center;
      margin-top: 10px;
    }
    .text__holder {
      max-width: 65ch;
      margin: 0 auto;
    }
    .text__holder p {
      font-size: 18px;
      line-height: 1.72;
      margin-bottom: 1.25rem;
      color: #27272A;
    }
    .text__holder a {
      color: #1E3A8A;
      font-weight: 600;
      text-decoration: underline;
      text-underline-offset: 4px;
    }
    .pull-quote {
      border-left: 2px solid #9A3412;
      padding: 0.25rem 0 0.25rem 1.25rem;
      margin: 1.75rem 0;
    }
    .pull-quote p {
      font-family: 'Instrument Serif', Georgia, serif;
      font-size: 26px;
      font-style: italic;
      color: #18181B;
      line-height: 1.35;
      margin-bottom: 0.5rem;
    }
    .pull-quote footer {
      font-size: 12px;
      color: #71717A;
    }
    .cta-wrapper {
      text-align: center;
      margin-top: 2.25rem;
      padding-top: 1.5rem;
      border-top: 1px solid #E4E2DD;
    }
    .btn-primary-cta {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      background-color: #1E3A8A;
      color: #FFFFFF;
      font-size: 20px;
      font-weight: 600;
      padding: 1rem 2.5rem;
      border-radius: 8px;
      text-decoration: none;
      transition: background-color 0.15s ease;
    }
    .btn-primary-cta:hover {
      background-color: #172554;
    }
    .cta-subtext {
      font-size: 12px;
      color: #71717A;
      margin-top: 0.75rem;
    }
    #footer {
      background-color: #ECEAE4;
      border-top: 1px solid #DCD9D0;
      padding: 3rem 1rem;
    }
    #footer .container {
      max-width: 760px;
      margin: 0 auto;
      text-align: center;
    }
    #footer p {
      font-size: 12px;
      color: #52525B;
      line-height: 1.6;
      margin-bottom: 1rem;
    }
    @media (max-width: 640px) {
      #body .container { padding: 1.5rem 1.15rem; }
      .btn-primary-cta { width: 100%; font-size: 18px; padding: 0.95rem 1.25rem; }
    }
  </style>
</head>
<body>
  <section id="header">
    <div class="container">
      <p>${copy.advertorialNotice}</p>
    </div>
  </section>

  <section id="body">
    <div class="container">
      <div class="meta-row">
        <span class="kicker">${copy.kicker}</span> &middot; <span>${copy.authorName}</span> &middot; <span>${copy.updatedDate}</span> &middot; <span>${copy.readTime}</span>
      </div>

      <h1>
        ${copy.headlinePart1}<span class="highlight">${copy.headlineHighlight}</span>${copy.headlinePart2}
      </h1>

      <p class="subheadline">${copy.subheadline}</p>

      <div class="video-wrapper">
        <a class="video-preview-link" href="${safeHopLink}" onclick="trackBridgeClick()">
          <img src="${config.heroImageSrc}" alt="${copy.videoCaption}" referrerpolicy="no-referrer">
          <div class="video-scrim"></div>
          <div class="video-play-btn-wrap">
            <div class="video-play-btn">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" style="margin-left:3px"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
            </div>
          </div>
          <div class="video-bottom-bar">
            <span>${copy.videoPreviewBadge}</span>
            <span class="video-duration">${copy.videoDuration}</span>
          </div>
        </a>
        <p class="video-caption">${copy.videoCaption}</p>
      </div>

      <div class="text__holder">
        <p>${copy.paragraphs.p1Prefix}<a href="${safeHopLink}" onclick="trackBridgeClick()">${copy.paragraphs.p1LinkText}</a></p>

        <p>${copy.paragraphs.p2Prefix}<strong>${copy.paragraphs.p2Bold}</strong></p>

        <blockquote class="pull-quote">
          <p>${copy.pullQuote.quote}</p>
          <footer>${copy.pullQuote.attribution}</footer>
        </blockquote>
      </div>

      <div class="cta-wrapper">
        <a class="btn-primary-cta" href="${safeHopLink}" onclick="trackBridgeClick()">
          <span>${copy.primaryCtaButton}</span>
        </a>
        <p class="cta-subtext">${copy.ctaSubtext}</p>
      </div>
    </div>
  </section>

  <section id="footer">
    <div class="container">
      <p><strong>${copy.footer.advertorialHeader}</strong></p>
      <p><strong>${copy.footer.disclaimerTitle}</strong><br>${copy.footer.disclaimerBody}</p>
      <p>${copy.footer.trademarkBody}</p>
      <p>${copy.footer.copyright}</p>
    </div>
  </section>
</body>
</html>`;
}
