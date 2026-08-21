export default function Stats() {
  const stats = [
    { value: "500+", label: "Successful Projects" },
    { value: "10+", label: "Country Presence" },
    { value: "5+", label: "Years of Experience" },
    { value: "100000+", label: "People Empowered" },
  ];

  return (
    <section className="w-full bg-dark-blue flex items-center justify-center py-16 px-6 lg:h-[245px]">
      <div className="max-w-[1360px] w-full mx-auto flex flex-wrap lg:flex-nowrap items-center justify-center gap-10 md:gap-20 lg:gap-24 px-6 xl:px-0">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center justify-center text-center px-4 w-[45%] lg:w-auto">
            <h2
              className="text-4xl sm:text-5xl md:text-[64px] font-semibold text-white mb-2"
              style={{ textShadow: "0px 0px 30px #78AFFD" }}
            >
              {stat.value}
            </h2>
            <p
              className="text-base sm:text-lg md:text-[24px] font-medium text-white leading-tight"
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
