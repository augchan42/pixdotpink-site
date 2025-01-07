// pages/api/og/route.tsx
import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'
 
export const runtime = 'edge'
 
export async function GET(req: NextRequest) {
  try {
    // Load your custom image
    const pixImage = await fetch(new URL('/public/images/pix-logo.png', import.meta.url))
      .then((res) => res.arrayBuffer())
      .then(buffer => `data:image/png;base64,${Buffer.from(buffer).toString('base64')}`);

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
          }}
        >
          {/* Main container */}
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
            {/* Logo/Image */}
            <img
              src={pixImage}
              alt="Pix Logo"
              width="400"
              height="300"
              style={{
                marginBottom: '20px',
              }}
            />
            
            {/* Title */}
            <h1
              style={{
                fontSize: '60px',
                fontWeight: 'bold',
                background: 'linear-gradient(to right, #FF71BE, #FFB4D9)',
                backgroundClip: 'text',
                color: 'transparent',
                marginBottom: '10px',
              }}
            >
              PIX
            </h1>
            
            {/* Tagline */}
            <p
              style={{
                fontSize: '32px',
                color: '#FFFFFF',
                opacity: 0.9,
              }}
            >
              Digital Samurai Oracle
            </p>

            {/* Decorative elements */}
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
      },
    )
  } catch (e: unknown) {
    console.log(`${(e as Error).message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}