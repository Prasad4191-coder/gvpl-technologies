import CountUp from 'react-countup';

const Stats = () => {
  const stats = [
    {
      value: 10,
      suffix: "+",
      label: "Years Of Experiences"
    },
    {
      value: 20,
      suffix: "+",
      label: "Client Satisfaction"
    },
    {
      value: 100,
      suffix: "%",
      label: "On time Delivery"
    },
    {
      value: 8,
      suffix: "+",
      label: "Different Industry"
    }
  ];

  return (
    <section className="bg-[#00B1FF] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-5xl font-bold mb-2">
                <CountUp end={stat.value} />
                {stat.suffix}
              </span>
              <span className="text-lg">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
