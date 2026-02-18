import { motion } from 'framer-motion';
import { Headphones, Users, Camera } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const SolutionBlock = ({ data, icon: Icon, reverse, isDark, image }) => {
  const bgClass = isDark ? 'bg-aurele-noir' : 'bg-aurele-cream';
  const textClass = isDark ? 'text-white' : 'text-foreground';
  const subTextClass = isDark ? 'text-white/70' : 'text-secondary';
  const pillBg = isDark
    ? 'bg-white/10 border-white/10 text-white/70'
    : 'bg-aurele-warm border-faint/30 text-secondary';
  const feelingPill = isDark
    ? 'bg-aurele-gold/15 border-aurele-gold/30 text-aurele-gold'
    : 'bg-aurele-gold/10 border-aurele-gold/20 text-aurele-gold';
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
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden relative">
              <img
                src={image}
                alt={data.headline}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 ${isDark ? 'bg-aurele-noir/20' : 'bg-aurele-cream/10'}`} />
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
    { data: t.solutions.soundtrack, icon: Headphones, reverse: false, isDark: false, image: '/images/lifestyle/smart-glasses-1.jpg' },
    { data: t.solutions.concert, icon: Users, reverse: true, isDark: true, image: '/images/lifestyle/smart-glasses-3.jpg' },
    { data: t.solutions.witness, icon: Camera, reverse: false, isDark: false, image: '/images/lifestyle/smart-glasses-5.jpg' },
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
          image={block.image}
        />
      ))}
    </div>
  );
};

export default Solutions;
