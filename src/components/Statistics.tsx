export default function Statistics() {
  const stats = [
    { value: '250+', label: 'Sites Entregues', sublabel: 'No Prazo Exato de 72h' },
    { value: '72h', label: 'Prazo Máximo', sublabel: 'Garantido em Contrato' },
    { value: '99%', label: 'Satisfação Total', sublabel: 'Avaliação 5 Estrelas' },
    { value: '24/7', label: 'Máquina de Vendas', sublabel: 'Captação Ininterrupta' },
  ];

  return (
    <section className="py-12 sm:py-16 bg-zinc-950 text-white border-y border-zinc-800/80 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, i) => (
            <div 
              key={stat.label} 
              className={`text-center py-2 ${
                i % 2 === 0 ? 'border-r border-zinc-800/60 sm:border-r-0' : ''
              } lg:border-r lg:last:border-r-0 border-zinc-800/60`}
            >
              <div className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-1 sm:mb-2 tracking-tight tabular-nums">
                {stat.value}
              </div>
              <div className="text-zinc-300 font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                {stat.label}
              </div>
              <div className="text-zinc-500 font-medium text-[10px] sm:text-[11px] mt-0.5">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
