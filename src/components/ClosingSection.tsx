import { useMemo } from "react";
import { motion } from "framer-motion";

const Petal = ({ delay, left, duration, emoji }: { delay: number; left: number; duration: number; emoji: string }) => (
  <motion.div
    initial={{ y: "-5%", x: 0, opacity: 0.8, rotate: 0 }}
    animate={{ y: "110vh", x: [0, 25, -20, 10], opacity: [0.8, 0.6, 0.3, 0], rotate: 720 }}
    transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
    className="absolute pointer-events-none select-none"
    style={{ left: `${left}%`, fontSize: "1.2rem" }}
  >
    {emoji}
  </motion.div>
);

const ClosingSection = () => {
  const petals = useMemo(
    () => Array.from({ length: 20 }, (_, i) => ({
      id: i,
      delay: Math.random() * 5,
      left: Math.random() * 100,
      duration: 5 + Math.random() * 5,
      emoji: i % 3 === 0 ? "🌺" : i % 3 === 1 ? "🌸" : "✨",
    })),
    []
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,hsl(var(--saffron)/0.18)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,hsl(var(--gold)/0.1)_0%,transparent_50%)]" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {petals.map((p) => (
          <Petal key={p.id} delay={p.delay} left={p.left} duration={p.duration} emoji={p.emoji} />
        ))}
      </div>

      <div className="relative z-10 max-w-md mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="font-body text-accent/70 text-xl md:text-2xl italic leading-loose mb-12">
            मंगलम् भगवान विष्णु,<br />
            मंगलम् गरुड़ध्वजः,<br />
            मंगलम् पुण्डरीकाक्षः,<br />
            मंगलाय तनो हरिः
          </p>

          <div className="w-20 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent mx-auto mb-12" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="glass-card rounded-3xl p-8 mb-12 border border-accent/15"
          >
            <p className="font-heading text-accent text-xl md:text-2xl tracking-[0.2em] mb-5">🥁 बाल मनुहार 🥁</p>
            <p className="font-body text-foreground/70 text-lg md:text-xl italic leading-relaxed mb-5">
              "छोटे छोटे पाँव हमारे, कैसे आये बुलाने को,<br />
              मेली दीदी की शादी में भूल न जाना आने को......"
            </p>
            <p className="font-body text-foreground/50 text-base md:text-lg leading-relaxed">
              सोनाक्षी, राधिका, अनन्या, आरोही, पिया, तनिष्का, अंकुर, अंकित,
              अभिषेक, प्रिंस, अरुण, आयुष, पियुष, आदित्य, अयान
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.p
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-6xl mb-6"
            >
              🙏
            </motion.p>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-5">
              आपका हार्दिक स्वागत है
            </h2>
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex justify-center gap-2 mt-4 text-2xl"
            >
              <span>🪔</span>
              <span style={{ color: "#e53e3e" }}>❤</span>
              <span>🪔</span>
            </motion.div>
            <div className="w-24 h-px gold-shimmer mx-auto mt-6" />
            <motion.p
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="font-heading text-accent/50 text-lg md:text-xl mt-6"
            >
              ॥ शुभम् भवतु ॥
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClosingSection;
