'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';

declare global {
  interface Window {
    ym?: (
      counterId: number,
      action: string,
      ...args: (string | Record<string, boolean>)[]
    ) => void;
  }
}

const counterId = 102424313;

export function Metrika() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.ym) {
      const url = `${pathname}${searchParams.toString() ? `?${searchParams}` : ''}`;
      window.ym(counterId, 'hit', url);
    }
  }, [pathname, searchParams, counterId]);

  return (
    <>
      <Script id="yandex-metrica" strategy="afterInteractive">
        {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(${counterId}, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
   });`}
      </Script>
      <noscript>
        <div>
          <img
            src="https://mc.yandex.ru/watch/102424313"
            style={{ position: 'absolute', left: -9999 }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
}
