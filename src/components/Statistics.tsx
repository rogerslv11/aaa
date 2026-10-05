export default function Statistics() {
  const stats = [
    { value: '250+', label: 'Delivered Projects', sublabel: 'Within the 72h Deadline' },
    { value: '72h', label: 'Maximum Turnaround', sublabel: 'Contractually Guaranteed' },
    { value: '99%', label: 'Client Satisfaction', sublabel: '5-Star Verified Ratings' },
    { value: '24/7', label: 'Automated Sales', sublabel: 'Continuous Lead Capture' },
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
