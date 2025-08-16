// components/Achievements.tsx
import React from "react";

interface Stat {
  value: string;
  label: string;
}

interface AchievementsProps {
  stats: Stat[];
}

const Achievements: React.FC<AchievementsProps> = ({ stats }) => {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold">
          What We have Achieved So Far!
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-center">
        {stats.map((stat, idx) => (
          <div key={idx}>
            <h3 className="text-3xl md:text-4xl font-bold text-[#ED9E15] leading-snug">
              {stat.value}
            </h3>
            <p className="mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
