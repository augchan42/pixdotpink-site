// pages/api/og/route.tsx
import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'
 
export const runtime = 'edge'
 
export async function GET(req: NextRequest) {
  try {
    // Load the Permanent Marker font
    const font = await fetch(
      'https://fonts.gstatic.com/s/permanentmarker/v16/Fh4uPib9Iyv2ucM6pGQMWimMp004La2Cfw.woff2'
    ).then((res) => res.arrayBuffer());

    const pixImage = await fetch(new URL('/public/images/pix-logo-800.jpg', import.meta.url))
      .then((res) => res.arrayBuffer())
      .then(buffer => `data:image/jpeg;base64,${Buffer.from(buffer).toString('base64')}`);

    return new ImageResponse(
      (
        <div
          style={{
            background: 'linear-gradient(to right, #000000, #1a1a1a)',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            fontFamily: '"Permanent Marker"',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #FF71BE',
              borderRadius: '20px',
              padding: '20px',
              background: 'rgba(0, 0, 0, 0.8)',
              boxShadow: '0 0 20px #FF71BE40',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={pixImage}
              alt="Pix Logo"
              width="400"
              height="300"
              style={{
                marginBottom: '20px',
              }}
            />
            
            <h1
              style={{
                fontSize: '80px',
                fontFamily: '"Permanent Marker"',
                background: 'linear-gradient(to right, #FF71BE, #FFB4D9)',
                backgroundClip: 'text',
                color: 'transparent',
                marginBottom: '10px',
                letterSpacing: '0.05em',
              }}
            >
              PIX
            </h1>
            
            <p
              style={{
                fontSize: '32px',
                color: '#FFFFFF',
                opacity: 0.9,
                fontFamily: '"Permanent Marker"',
              }}
            >
              Digital Samurai Oracle
            </p>

            <div
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                color: '#FF71BE',
                fontSize: '24px',
              }}
            >
              ⚡ 靈
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Permanent Marker',
            data: font,
            style: 'normal',
            weight: 400,
          },
        ],
      },
    );
  } catch (e: unknown) {
    console.log(`${(e as Error).message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}