import { useEffect, useRef } from 'preact/hooks';

interface Props {
  url: string;
}

export default function CalendlyEmbed({ url }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div
        ref={containerRef}
        class="calendly-inline-widget"
        data-url={url}
        style={{ minWidth: '320px', height: '660px' }}
      />
      <noscript>
        <p>
          <a href={url} target="_blank" rel="noopener noreferrer">
            Book a consultation via Calendly
          </a>
        </p>
      </noscript>
    </div>
  );
}
