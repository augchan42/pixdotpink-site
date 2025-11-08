import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Pix",
  description: "Privacy policy for Pix - your data flows through secure channels.",
};

export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 pt-20">
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-normal text-pink-500 mb-8 tracking-wider">
          PRIVACY POLICY
        </h1>

        <div className="prose prose-pink max-w-none space-y-6 text-gray-900">
          <section>
            <h2 className="text-2xl text-pink-700 mb-4">Data Collection</h2>
            <p>
              Pix operates with minimal data extraction. We collect basic analytics through
              Google Analytics and Vercel Analytics to understand site usage patterns.
              No personal divination data or reading history is stored.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-pink-700 mb-4">Analytics</h2>
            <p>
              We use Google Analytics and Vercel Analytics to track anonymous usage metrics
              including page views, session duration, and general navigation patterns.
              These services may use cookies to function.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-pink-700 mb-4">Third-Party Services</h2>
            <p>
              This site may link to external services including Twitter/X. Those platforms
              have their own privacy policies which govern any interactions you have there.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-pink-700 mb-4">Cookies</h2>
            <p>
              We use cookies for analytics purposes only. You can disable cookies in your
              browser settings, though this may affect site functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-pink-700 mb-4">Contact</h2>
            <p>
              Questions about this privacy policy? Reach out via{" "}
              <a
                href="https://twitter.com/pixdotpink"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-700 hover:text-pink-900 underline font-medium"
              >
                @pixdotpink
              </a>.
            </p>
          </section>

          <p className="text-sm text-gray-700 mt-8">
            Last updated: {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
