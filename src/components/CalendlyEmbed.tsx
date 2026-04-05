import { siteConfig } from '@/data/site-config';

interface Props {
  url?: string;
}

export default function BookingEmbed({ url }: Props) {
  const bookingUrl = url || siteConfig.contact.bookingUrl;

  return (
    <div>
      <iframe
        src={bookingUrl}
        style={{ width: '100%', minHeight: '660px', border: 'none', borderRadius: '12px' }}
        title="Book a consultation"
        loading="lazy"
      />
      <noscript>
        <p>
          <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
            Book a consultation
          </a>
        </p>
      </noscript>
    </div>
  );
}
