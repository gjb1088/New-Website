import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Burn.IT – Enterprise IT Consulting & Managed Services';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#080d1c',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(34,211,238,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.05) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            display: 'flex',
          }}
        />

        {/* Cyan glow */}
        <div
          style={{
            position: 'absolute',
            top: -120,
            left: -120,
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'rgba(34,211,238,0.07)',
            filter: 'blur(120px)',
            display: 'flex',
          }}
        />

        {/* Fuchsia glow */}
        <div
          style={{
            position: 'absolute',
            bottom: -120,
            right: -120,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'rgba(192,38,211,0.07)',
            filter: 'blur(100px)',
            display: 'flex',
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            border: '1px solid rgba(34,211,238,0.35)',
            borderRadius: 100,
            padding: '10px 28px',
            background: 'rgba(34,211,238,0.08)',
            marginBottom: 40,
          }}
        >
          <span
            style={{
              color: '#22d3ee',
              fontSize: 16,
              letterSpacing: '0.18em',
              fontFamily: 'monospace',
            }}
          >
            ENTERPRISE IT CONSULTING &amp; MANAGED SERVICES
          </span>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span
            style={{
              fontSize: 148,
              fontWeight: 800,
              color: 'white',
              letterSpacing: '-0.03em',
              lineHeight: 0.88,
              fontFamily: 'sans-serif',
            }}
          >
            BURN
          </span>
          <span
            style={{
              fontSize: 148,
              fontWeight: 800,
              color: '#22d3ee',
              letterSpacing: '-0.03em',
              lineHeight: 0.88,
              fontFamily: 'sans-serif',
            }}
          >
            THE BOATS.
          </span>
        </div>

        {/* Domain */}
        <div
          style={{
            marginTop: 52,
            color: 'rgba(34,211,238,0.45)',
            fontSize: 22,
            letterSpacing: '0.3em',
            fontFamily: 'monospace',
            display: 'flex',
          }}
        >
          burnthe.network
        </div>
      </div>
    ),
    { ...size }
  );
}
