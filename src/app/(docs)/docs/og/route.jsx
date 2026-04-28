import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';

export async function GET(request) {
  try {
    const { searchParams } = request.nextUrl;

    const hasTitle = searchParams.has('title');
    const title = searchParams.get('title');
    const ogTitle = hasTitle && Buffer.from(title, 'base64').toString('utf-8');

    const hasBreadcrumb = searchParams.has('breadcrumb');
    const breadcrumb = searchParams.get('breadcrumb');
    const hasCategory = searchParams.has('category');
    const category = searchParams.get('category');
    const ogCategory = hasCategory && Buffer.from(category, 'base64').toString('utf-8');
    const ogBreadcrumbs = hasBreadcrumb
      ? Buffer.from(breadcrumb, 'base64').toString('utf-8')
      : hasCategory && `Docs${ogCategory ? ` / ${ogCategory}` : ''}`;

    return new ImageResponse(
      <div
        style={{
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
          backgroundColor: '#0A0B0D',
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '60px 80px',
          justifyContent: 'center',
        }}
      >
        {/* Sindlish branding in corner */}
        <div
          style={{
            position: 'absolute',
            top: '60px',
            left: '80px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div style={{ fontSize: 28, fontWeight: 700, color: '#E8453C' }}>سنڌلش</div>
          <div style={{ fontSize: 28, fontWeight: 700, color: 'white' }}>Sindlish</div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '40px',
          }}
        >
          {ogBreadcrumbs && (
            <div
              style={{
                fontSize: 24,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: '#9CA3AF',
                marginBottom: '16px',
                fontWeight: 500,
              }}
            >
              {ogBreadcrumbs}
            </div>
          )}
          <div
            style={{
              fontSize: 80,
              fontWeight: 700,
              color: 'white',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              whiteSpace: 'pre-wrap',
            }}
          >
            {ogTitle}
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            left: '80px',
            fontSize: 20,
            color: '#6B7280',
            fontWeight: 500,
          }}
        >
          sindlish.org
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
