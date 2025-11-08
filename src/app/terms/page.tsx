import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Pix",
  description: "Terms of service for Pix - the protocol for tactical divination.",
};

export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 pt-20">
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-normal text-pink-500 mb-8 tracking-wider">
          TERMS OF SERVICE
        </h1>

        <div className="prose prose-pink max-w-none space-y-6 text-gray-900">
          <section>
            <h2 className="text-2xl text-pink-700 mb-4">Service Description</h2>
            <p>
              Pix provides I-Ching oracle readings and divination tools for educational and
              entertainment purposes. This is not professional advice—financial, legal,
              medical, or otherwise.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-pink-700 mb-4">Acceptable Use</h2>
            <p>
              By accessing this site, you agree to use it responsibly. Any readings or
              interpretations provided are meant as contemplative tools, not directives.
              Make your own informed decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-pink-700 mb-4">No Warranties</h2>
            <p>
              The service is provided "as is" without warranties of any kind. We make no
              guarantees about accuracy, reliability, or suitability for any particular
              purpose. The patterns revealed are for reflection, not prediction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-pink-700 mb-4">Limitation of Liability</h2>
            <p>
              Digital Rain Studios and Pix are not liable for any decisions made based on
              divination readings or content provided through this service. Use your
              own judgment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-pink-700 mb-4">Intellectual Property</h2>
            <p>
              All content, imagery, and branding on this site is owned by Digital Rain
              Studios unless otherwise noted. The I-Ching itself is ancient public domain
              wisdom.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-pink-700 mb-4">Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of
              the site constitutes acceptance of updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-pink-700 mb-4">Contact</h2>
            <p>
              Questions about these terms? Reach out via{" "}
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
