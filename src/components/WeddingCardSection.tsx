import { motion } from "framer-motion";
import ganeshImg from "@/assets/ganesh.png";

const events = [
  { icon: "🌿", name: "मेहंदी", date: "गुरुवार, 07/05/2026" },
  { icon: "🪔", name: "हल्दी", date: "शुक्रवार, 08/05/2026" },
  { icon: "🔔", name: "शुभ विवाह", date: "शुक्रवार, 08/05/2026" },
  { icon: "🚗", name: "विदाई", date: "बुधवार, 13/05/2026", time: "सुबह 10:00 बजे" },
];

const WeddingCardSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,hsl(var(--gold)/0.12)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,hsl(var(--saffron)/0.08)_0%,transparent_40%)]" />

      <div className="relative z-10 w-full max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="glass-card rounded-3xl shadow-card-premium overflow-hidden border border-accent/10"
        >
          <div className="h-1.5 gold-shimmer" />

          <div className="p-8 md:p-12 text-center">
            {/* Ganesh with pulse */}
            <motion.div className="relative inline-block mb-5">
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -inset-4 rounded-full"
                style={{ background: "radial-gradient(circle, hsl(38 75% 55% / 0.3), transparent 70%)" }}
              />
              <motion.img
                initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1 }}
                src={ganeshImg}
                alt="श्री गणेश"
                width={90}
                height={90}
                className="relative glow-gold"
                loading="lazy"
                decoding="async"
              />
            </motion.div>

            <p className="font-heading text-accent text-xl md:text-2xl mb-2 tracking-wide whitespace-nowrap">
              ॥ श्री गणेशाय नमः ॥
            </p>
            <p className="font-body text-muted-foreground text-base md:text-lg italic mb-8 leading-relaxed">
              वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।<br />
              निर्विघ्नं कुरु मे देव सर्व कार्येषु सर्वदा॥
            </p>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="w-24 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent mx-auto mb-8"
            />

            <p className="font-heading text-accent/90 text-lg md:text-xl tracking-[0.3em] mb-6">✦ शुभ निमंत्रण ✦</p>

            <p className="font-body text-foreground/80 text-xl md:text-2xl leading-relaxed mb-6">
              स्नेही मान्यवर,<br />
              ईश्वर की असीम अनुकम्पा से हमारी सुपुत्री
            </p>

            <motion.p
              whileInView={{ scale: [0.95, 1] }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="font-heading font-bold text-accent text-4xl md:text-5xl mb-2"
            >
              आयु. कु. खुशी
            </motion.p>
            <p className="font-body text-foreground/60 text-lg mb-1">सुपुत्री : श्रीमती संगीता देवी एवं</p>
            <p className="font-body text-foreground/60 text-lg mb-5">श्री गौरीशंकर विश्वकर्मा</p>

            <motion.p
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="font-heading text-3xl md:text-4xl mb-5"
              style={{ color: "#e53e3e" }}
            >
              ❤ संग ❤
            </motion.p>

            <motion.p
              whileInView={{ scale: [0.95, 1] }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="font-heading font-bold text-accent text-4xl md:text-5xl mb-2"
            >
              चि. विमलेश
            </motion.p>
            <p className="font-body text-foreground/60 text-lg mb-1">सुपुत्र : श्रीमती कौशल्या देवी एवं</p>
            <p className="font-body text-foreground/60 text-lg mb-6">श्री फूलचंद विश्वकर्मा</p>

            <p className="font-body text-foreground/70 text-lg md:text-xl leading-relaxed mb-8">
              का शुभ विवाह दिनांक <span className="text-accent font-bold text-xl">08 मई 2026</span> को
              निश्चित हुआ है। अतः इस पावन मधुर बेला पर पधारकर
              वर-वधू को अपना स्नेह भरा आशीर्वाद देकर हमें अनुग्रहित करें।
            </p>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="w-24 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent mx-auto mb-8"
            />

            {/* दर्शनाभिलाषी */}
            <div className="mb-8">
              <p className="font-heading text-accent/70 text-base md:text-lg tracking-[0.25em] mb-5">❖ दर्शनाभिलाषी ❖</p>
              <div className="space-y-3 text-lg md:text-xl">
                <p className="text-foreground/70">
                  <span className="text-accent/80 font-heading text-base">बाबा — </span>
                  श्री प्रभुप्रसाद विश्वकर्मा
                </p>
                <p className="text-foreground/70">
                  <span className="text-accent/80 font-heading text-base">चाचा — </span>
                  बनारसीलाल विश्वकर्मा
                </p>
                <p className="text-foreground/70">
                  <span className="text-accent/80 font-heading text-base">भाई — </span>
                  विकास, आकाश, अमन, सूरज, सुजीत, राजकुमार
                </p>
                <p className="text-foreground/70">
                  <span className="text-accent/80 font-heading text-base">मामा — </span>
                  विजय, राम शरण
                </p>
              </div>
            </div>

            <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent mx-auto mb-8" />

            {/* विनीत */}
            <p className="font-heading text-accent/70 text-base md:text-lg tracking-[0.25em] mb-4">❖ विनीत ❖</p>
            <p className="font-heading text-foreground font-bold text-2xl md:text-3xl mb-2">श्री गौरीशंकर विश्वकर्मा</p>
            <p className="font-body text-foreground/50 text-base md:text-lg leading-relaxed">
              ग्राम : बडिहारी, पोस्ट : कोल्हुईनगर<br />
              जिला : महाराजगंज, उत्तर प्रदेश
            </p>
          </div>

          <div className="h-1.5 gold-shimmer" />
        </motion.div>

        {/* Event Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-10"
        >
          <p className="font-heading text-accent text-lg md:text-xl text-center tracking-[0.3em] mb-6">
            ♛ मांगलिक कार्यक्रम ♛
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {events.map((event, i) => (
              <motion.div
                key={event.name}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 1.05, y: -5 }}
                className="glass-card rounded-2xl border border-accent/10 p-6 text-center shadow-gold transition-all duration-300 cursor-default"
              >
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  className="text-4xl mb-3 block"
                >
                  {event.icon}
                </motion.span>
                <p className="font-heading text-foreground font-bold text-xl mb-1">{event.name}</p>
                <p className="font-body text-accent/80 text-sm sm:text-base">{event.date}</p>
                {event.time && (
                  <p className="font-body text-accent text-sm sm:text-base font-semibold mt-1">{event.time}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingCardSection;
