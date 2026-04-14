import { motion } from "framer-motion";
import shivParvatiImg from "@/assets/shiv-parvati.png";
import mandalaBg from "@/assets/mandala-bg.jpg";

const FloatingDiya = ({ left, delay }: { left: string; delay: number }) => (
  <motion.div
    animate={{ y: [0, -8, 0], opacity: [0.5, 1, 0.5] }}
    transition={{ duration: 3, repeat: Infinity, delay }}
    className="absolute bottom-20 text-2xl pointer-events-none"
    style={{ left }}
  >
    🪔
  </motion.div>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Mandala background */}
      <div className="absolute inset-0 z-0">
        <img src={mandalaBg} alt="" className="w-full h-full object-cover opacity-[0.08]" loading="eager" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
      </div>

      {/* Golden ambient glows */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,hsl(var(--gold)/0.3)_0%,transparent_55%)]"
      />
      <motion.div
        animate={{ opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,hsl(var(--saffron)/0.15)_0%,transparent_50%)]"
      />

      {/* Floating diyas */}
      <FloatingDiya left="8%" delay={0} />
      <FloatingDiya left="88%" delay={1.5} />

      <div className="relative z-10 flex flex-col items-center text-center max-w-sm mx-auto">
        {/* Shiv Parvati with rotating ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          className="mb-8 relative"
        >
          {/* Rotating golden ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-6 rounded-full border border-accent/20 border-dashed"
          />
          <motion.img
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            src={shivParvatiImg}
            alt="भगवान शिव एवं माता पार्वती"
            width={220}
            height={220}
            className="glow-gold"
            decoding="async"
          />
          <motion.div
            animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -inset-10 bg-[radial-gradient(circle,hsl(var(--gold)/0.25)_0%,transparent_70%)] rounded-full pointer-events-none"
          />
        </motion.div>

        {/* Shubh Vivah */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0em" }}
          animate={{ opacity: 1, letterSpacing: "0.5em" }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="font-heading text-accent text-xl md:text-2xl uppercase mb-6"
        >
          शुभ विवाह
        </motion.p>

        {/* Couple Names */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="font-heading text-5xl md:text-8xl font-bold text-foreground leading-tight mb-3"
        >
          आयु. कु. खुशी
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="my-4"
        >
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-4xl inline-block"
            style={{ color: "#e53e3e" }}
          >
            ❤
          </motion.span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2 }}
          className="font-heading text-5xl md:text-8xl font-bold text-foreground leading-tight"
        >
          चि. विमलेश
        </motion.h1>

        {/* Date with sparkle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.8 }}
          className="mt-10"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px hsl(38 75% 55% / 0.1)",
                "0 0 50px hsl(38 75% 55% / 0.3)",
                "0 0 20px hsl(38 75% 55% / 0.1)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="glass-card rounded-full px-10 py-4 inline-block border border-accent/20"
          >
            <p className="font-body text-accent text-xl md:text-2xl tracking-wider font-semibold">
              शुक्रवार, 08 मई 2026
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 sm:bottom-10"
      >
        <div className="rounded-full border border-accent/20 bg-background/40 px-4 py-2 backdrop-blur-sm">
          <p className="font-heading text-[11px] text-accent/80 tracking-[0.18em] whitespace-nowrap">
            नीचे स्क्रॉल करें
          </p>
        </div>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-accent/70 text-sm">↓</span>
          <div className="h-10 w-px bg-gradient-to-b from-accent/70 to-transparent sm:h-12" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
