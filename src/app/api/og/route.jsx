import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';

export async function GET(request) {
  try {
    const { searchParams } = request.nextUrl;
    const title = searchParams.get('title');
    const hasTitle = searchParams.has('title');
    const ogTitle = hasTitle && Buffer.from(title, 'base64').toString('utf-8');

    return new ImageResponse(
      <div
        style={{
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontStyle: 'normal',
          position: 'relative',
          backgroundColor: '#0A0B0D',
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px 80px',
        }}
      >
        {/* Sindlish branding */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: '#E8453C',
              letterSpacing: '-0.02em',
            }}
          >
            سنڌلش
          </div>
          <div
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: 'white',
              letterSpacing: '-0.02em',
            }}
          >
            Sindlish
          </div>
        </div>

        {/* Page title */}
        {ogTitle && (
          <div
            style={{
              fontSize: 56,
              fontWeight: 600,
              color: 'white',
              lineHeight: 1.2,
              letterSpacing: '-0.03em',
              textAlign: 'center',
              maxWidth: '90%',
            }}
          >
            {ogTitle}
          </div>
        )}

        {/* Tagline */}
        <div
          style={{
            fontSize: 24,
            lineHeight: 1.4,
            marginTop: '32px',
            letterSpacing: '-0.02em',
            color: '#9CA3AF',
            textAlign: 'center',
          }}
        >
          The First Sindhi Programming Language
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
