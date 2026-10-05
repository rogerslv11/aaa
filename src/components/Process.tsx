export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Conversion Architecture',
      description: "We analyze your target market's purchasing triggers to establish the shortest, most persuasive route to closed deals."
    },
    {
      number: '02',
      title: 'Bespoke Design & Copywriting',
      description: 'We craft an imposing visual layout accompanied by sales psychology copy that radiates prestige in every single pixel.'
    },
    {
      number: '03',
      title: 'Extreme Performance Engineering',
      description: 'We code with cutting-edge React/Vite frameworks to guarantee sub-second load times and flawless Google PageSpeed scores.'
    },
    {
      number: '04',
      title: 'Launch & Market Dominance in 72h',
      description: 'In just 72 hours, your new site goes live, ready to capture qualified leads, schedule consultations, and outperform competitors.'
    }
  ];

  return (
    <section id="process" className="py-24 lg:py-32 bg-zinc-950 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Header Column */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <div className="inline-block px-4 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-6">
                Execution Methodology
              </div>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tighter leading-none">
                How We <br />
                <span className="text-zinc-500">Deliver in 72h.</span>
              </h2>
              <p className="text-lg sm:text-xl text-zinc-400 max-w-sm leading-relaxed">
                A surgical, battle-tested workflow designed to eliminate friction and deliver digital authority in record time.
              </p>
            </div>
          </div>

          {/* Steps Column */}
          <div className="lg:col-span-7 relative">
            {/* Timeline Line */}
            <div className="absolute left-[27px] top-4 bottom-4 w-[2px] bg-zinc-800 -z-0 hidden sm:block" />

            <div className="space-y-12 sm:space-y-16 relative z-10">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="flex flex-col sm:flex-row gap-6 sm:gap-10 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-900 border-2 border-zinc-800 flex items-center justify-center text-lg font-black text-white group-hover:border-white transition-colors">
                      {step.number}
                    </div>
                  </div>
                  <div className="sm:pt-1">
                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
