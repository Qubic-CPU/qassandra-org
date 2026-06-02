export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-purple-300">
          Qassandra
        </p>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          QUBIC-native forecasting and oracle-settlement infrastructure.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
          Qassandra structures market context, verification rules, time windows,
          and settlement logic for agent-readable forecasting markets built
          around QUBIC-native rails.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/whitepaper"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-purple-200"
          >
            Read White Paper
          </a>

          <a
            href="https://github.com/Qubic-CPU/qassandra-org"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-purple-300 hover:text-purple-200"
          >
            View GitHub
          </a>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-xl font-semibold">QUBIC-native</h2>
            <p className="mt-3 text-sm leading-6 text-white/60">
              QUBIC is the exclusive asset for settlement, fees, oracle use,
              dispute bonds, agent access, burns, rewards, and protocol activity.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-xl font-semibold">Oracle-first</h2>
            <p className="mt-3 text-sm leading-6 text-white/60">
              Markets need structured rules, measurable signals, verification
              paths, and deterministic settlement logic.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-xl font-semibold">Agent-readable</h2>
            <p className="mt-3 text-sm leading-6 text-white/60">
              Qassandra is designed so strong agents can read market context,
              operate safely, and plug into structured forecasting infrastructure.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
