import { FC, JSX } from 'react';

interface Feature {
  icon: JSX.Element;
  title: string[];
  subtitle?: string;
}

const features: Feature[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
      </svg>
    ),
    title: ['Unlimited talk', 'and text globally']
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
    title: ['Unlimited data', 'in 150+ Countries'],
    subtitle: '*Subject to our Play by the Rules policy'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    ),
    title: ['Cancel', 'anytime']
  }
];

const FeatureCard: FC<Feature> = ({ icon, title, subtitle }) => (
  <div className="feature-item text-center px-4 sm:px-6">
    <div className="relative">
      <div 
        className="w-12 h-12 mx-auto bg-gray-50 rounded-full flex items-center justify-center transition-transform hover:scale-105"
        role="img"
        aria-label={title.join(' ')}
      >
        {icon}
      </div>
    </div>
    <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-2 leading-tight">
      {title.map((line, index) => (
        <span key={index}>
          {line}
          {index < title.length - 1 && <br />}
        </span>
      ))}
    </h3>
    {subtitle && (
      <p className="text-xs sm:text-sm text-gray-500 mt-2">{subtitle}</p>
    )}
  </div>
);

const Features: FC = () => {
  return (
    <section 
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
      aria-label="Features"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            subtitle={feature.subtitle}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;