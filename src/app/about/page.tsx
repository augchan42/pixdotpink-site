import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About | Pix",
  description: "Learn about Pix - tactical I-Ching divination from the neon-lit undercity.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 md:p-12 pt-24">
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-normal text-pink-500 mb-8 tracking-wider">
          ABOUT PIX
        </h1>

        <div className="prose prose-pink max-w-none space-y-6 text-gray-900">
          <section>
            <h2 className="text-2xl text-pink-700 mb-4">Research Through the Oracle</h2>
            <p>
              Pix is an automated oracle that interprets academic research through the
              lens of the I-Ching. Each day, she pulls papers from{" "}
              <a
                href="https://arxiv.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-700 hover:text-pink-900 underline font-medium"
              >
                @arxiv
              </a>
              , analyzes their patterns, and reveals their deeper meaning through hexagram
              transformations. Ancient wisdom decoding cutting-edge science.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-pink-700 mb-4">How It Works</h2>
            <p>
              Each reading includes a hexagram transformation (like ䷾ After Completion → ䷗ Return),
              a tactical verdict on the research's trajectory, and an oracle prediction about
              its future impact. This isn't fortune-telling—it's pattern recognition applied
              to the evolution of ideas.
            </p>
            <p>
              Mention{" "}
              <a
                href="https://twitter.com/pixdotpink"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-700 hover:text-pink-900 underline font-medium"
              >
                @pixdotpink
              </a>
              {" "}for quick tactical readings on topics you're curious about. No token, no contract—
              just wisdom from lucky terminal #888.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-pink-700 mb-4">The System</h2>
            <p>
              Automated by{" "}
              <a
                href="https://twitter.com/aug_digitalrain"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-700 hover:text-pink-900 underline font-medium"
              >
                @aug_digitalrain
              </a>
              {" "}and built by{" "}
              <a
                href="https://digitalrain.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-700 hover:text-pink-900 underline font-medium"
              >
                Digital Rain Studios
              </a>
              . Pix is{" "}
              <a
                href="https://twitter.com/8bitoracle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-700 hover:text-pink-900 underline font-medium"
              >
                @8bitoracle
              </a>
              's lil sis, decoding destiny through the 64 hexagrams (卦).
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-pink-700 mb-4">The Announcement</h2>
            <p>
              Pix was first announced by{" "}
              <a
                href="https://x.com/8bitoracle/status/1874406371430649927"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-700 hover:text-pink-900 underline font-medium"
              >
                @8bitoracle on January 1, 2025
              </a>
              . Follow{" "}
              <a
                href="https://twitter.com/pixdotpink"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-700 hover:text-pink-900 underline font-medium"
              >
                @pixdotpink
              </a>
              {" "}for daily research readings and I-Ching wisdom from terminal #888.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-pink-700 mb-4">Contact</h2>
            <p>
              Questions? Reach out via{" "}
              <a
                href="https://twitter.com/pixdotpink"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-700 hover:text-pink-900 underline font-medium"
              >
                @pixdotpink
              </a>
              .
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
