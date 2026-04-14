import { motion } from "framer-motion";
import mandalaBg from "@/assets/mandala-bg.jpg";

const VenueSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={mandalaBg} alt="" className="w-full h-full object-cover opacity-[0.05]" loading="lazy" decoding="async" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,hsl(var(--gold)/0.12)_0%,transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md mx-auto text-center"
      >
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="font-heading text-accent text-base md:text-lg tracking-[0.3em] mb-8"
        >
          ❖ विवाह स्थल ❖
        </motion.p>

        <motion.div
          whileHover={{ y: -5 }}
          className="glass-card rounded-3xl p-10 md:p-14 shadow-card-premium border border-accent/15"
        >
          <motion.span
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-5xl mb-4 block"
          >
            🏛️
          </motion.span>

          <h3 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-3">शिवम पैलेस</h3>
          <p className="font-heading text-accent text-xl md:text-2xl mb-8">मैरेज लॉन</p>

          <div className="w-16 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent mx-auto mb-8" />

          <p className="font-body text-foreground/70 text-lg md:text-xl leading-relaxed mb-2">
            मेन रोड, कोल्हुई बाजार
          </p>
          <p className="font-body text-foreground/50 text-base md:text-lg mb-10">
            जिला : महाराजगंज, उत्तर प्रदेश
          </p>

          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="https://maps.app.goo.gl/vnbGvrcpPKH2ULE18"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-accent-foreground font-body font-bold text-lg px-12 py-4 rounded-full transition-all duration-300 shadow-gold"
          >
            🗺️ रास्ता देखें
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default VenueSection;
