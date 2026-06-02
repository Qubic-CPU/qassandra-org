export const metadata = {
  title: "Qassandra White Paper | QUBIC-Native Forecasting Infrastructure",
  description:
    "Qassandra is QUBIC-native forecasting and oracle-settlement infrastructure for agent-readable markets.",
  openGraph: {
    title: "Qassandra White Paper",
    description:
      "QUBIC-native forecasting and oracle-settlement infrastructure for agent-readable markets.",
    url: "https://qassandra.org/whitepaper",
    siteName: "Qassandra",
    type: "article",
  },
};

export default function WhitepaperPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <article className="mx-auto max-w-4xl px-6 py-16">
        <a href="/" className="text-sm text-purple-300 hover:text-purple-200">
          ← Back to Qassandra
        </a>

        <p className="mt-12 text-sm font-semibold uppercase tracking-[0.35em] text-purple-300">
          Qassandra White Paper
        </p>

        <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
          QUBIC-Native Forecasting and Oracle-Settlement Infrastructure
        </h1>

        <p className="mt-8 text-lg leading-8 text-white/70">
          Qassandra is designed as QUBIC-native infrastructure for forecasting
          markets, oracle settlement, and agent-readable market context.
        </p>

        <div className="mt-10">
          <a
            href="/Qassandra-Whitepaper.pdf"
            className="inline-flex rounded-full border border-purple-300 px-6 py-3 text-sm font-semibold text-purple-200 transition hover:bg-purple-300 hover:text-black"
          >
            Download PDF
          </a>
        </div>

        <div className="mt-16 space-y-12 text-white/80">
          <section>
            <h2 className="text-2xl font-semibold text-white">
              1. Executive Summary
            </h2>
            <p className="mt-4 leading-8">
              Qassandra is QUBIC-native forecasting and oracle-settlement
              infrastructure. It organizes market context, verification rules,
              time windows, and settlement logic so humans and agents can
              interact with forecasting markets through structured,
              machine-readable rails.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              2. Core Thesis
            </h2>
            <p className="mt-4 leading-8">
              $QUBIC is the exclusive asset for settlement, fees, rewards,
              oracle use, dispute bonds, agent access, burns, and protocol
              rewards. QDRA is only a protocol-alignment asset and is not a
              settlement asset.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              3. Market Context Architecture
            </h2>
            <p className="mt-4 leading-8">
              Forecasting markets require more than user interfaces and price
              feeds. They need structured context, typed market rules,
              deterministic settlement logic, and oracle-compatible verification
              paths. Qassandra is designed to make this context readable for
              both humans and agents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              4. QUBIC-Native Settlement
            </h2>
            <p className="mt-4 leading-8">
              Qassandra keeps settlement, fees, rewards, oracle usage, dispute
              bonds, agent access, burns, and protocol rewards denominated in
              $QUBIC. This keeps the protocol aligned with Qubic-native economic
              activity instead of depending on external settlement assets.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              5. Agent-Compatible Infrastructure
            </h2>
            <p className="mt-4 leading-8">
              Qassandra is context-first, not agent-first. Agents, models, and
              frameworks will change. The durable layer is structured market
              context: measurable signals, time windows, verification rules, and
              settlement logic that strong agents can safely interpret.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
