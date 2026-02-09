import { motion } from 'framer-motion';
import { Headphones, Users, Camera } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const SolutionBlock = ({ data, icon: Icon, reverse, isDark }) => {
  const bgClass = isDark ? 'bg-aurele-noir' : 'bg-aurele-cream';
  const textClass = isDark ? 'text-white' : 'text-foreground';
  const subTextClass = isDark ? 'text-white/70' : 'text-secondary';
  const pillBg = isDark
    ? 'bg-white/10 border-white/10 text-white/70'
    : 'bg-aurele-warm border-faint/30 text-secondary';
  const feelingPill = isDark
    ? 'bg-aurele-gold/15 border-aurele-gold/30 text-aurele-gold'
    : 'bg-aurele-gold/10 border-aurele-gold/20 text-aurele-gold';
  const placeholderClass = isDark ? 'image-placeholder-dark' : 'image-placeholder';

  const ease = [0.16, 1, 0.3, 1];

  return (
    <section className={`py-16 md:py-28 ${bgClass}`}>
      <div className="container-luxe">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">
          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease }}
            className={reverse ? 'lg:order-2' : ''}
          >
            <div className={`${placeholderClass} aspect-[4/3] w-full rounded-2xl flex flex-col items-center justify-center gap-3`}>
              <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl ${isDark ? 'bg-aurele-gold/15' : 'bg-aurele-gold/10'} flex items-center justify-center`}>
                <Icon className="w-7 h-7 md:w-8 md:h-8 text-aurele-gold" />
              </div>
              <span className={`text-sm font-medium ${isDark ? 'text-white/40' : 'text-muted'}`}>Coming soon</span>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.12, ease }}
            className={reverse ? 'lg:order-1' : ''}
          >
            {/* Feeling pill */}
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-medium mb-4 ${feelingPill}`}
            >
              <Icon className="w-4 h-4" />
              {data.feeling}
            </motion.span>

            <h2 className={`font-display text-2xl sm:text-3xl md:text-4xl mb-4 leading-[1.1] ${textClass}`}>
              {data.headline}
            </h2>

            <p className={`text-base md:text-lg mb-6 leading-relaxed ${subTextClass}`}>
              {data.body}
            </p>

            {/* Detail pills — staggered */}
            <div className="flex flex-wrap gap-2">
              {data.details.map((detail, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                  className={`px-3 py-1.5 rounded-full border text-sm ${pillBg}`}
                >
                  {detail}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Solutions = () => {
  const { translations: t } = useLanguage();

  const blocks = [
    { data: t.solutions.soundtrack, icon: Headphones, reverse: false, isDark: false },
    { data: t.solutions.concert, icon: Users, reverse: true, isDark: true },
    { data: t.solutions.witness, icon: Camera, reverse: false, isDark: false },
  ];

  return (
    <div id="solutions">
      {blocks.map((block, index) => (
        <SolutionBlock
          key={index}
          data={block.data}
          icon={block.icon}
          reverse={block.reverse}
          isDark={block.isDark}
        />
      ))}
    </div>
  );
};

export default Solutions;
