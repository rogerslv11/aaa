export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Engenharia de Conversão',
      description: "Analisamos o comportamento do seu público-alvo para traçar a rota mais direta e persuasiva até o fechamento de vendas e contratos."
    },
    {
      number: '02',
      title: 'Design de Elite & Copywriting',
      description: 'Criamos uma interface visual imponente acompanhada por textos de vendas que comunicam prestígio e autoridade em cada pixel.'
    },
    {
      number: '03',
      title: 'Performance Extrema & Código Puro',
      description: 'Desenvolvemos em arquitetura moderna com React e Vite para garantir carregamento instantâneo em 0.28s e nota 99+ no Google.'
    },
    {
      number: '04',
      title: 'Lançamento & Domínio em 72h',
      description: 'Em apenas 72 horas seu novo site vai ao ar, pronto para captar leads qualificados, agendar consultas e superar seus concorrentes.'
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
                Metodologia Ágil • Passo a Passo
              </div>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tighter leading-none">
                Do briefing ao ar <br />
                <span className="text-zinc-500">em até 72 horas.</span>
              </h2>
              <p className="text-lg sm:text-xl text-zinc-400 max-w-sm leading-relaxed">
                Um fluxo cirúrgico sem reuniões desnecessárias. Economizamos o seu tempo para entregar máxima autoridade digital.
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
