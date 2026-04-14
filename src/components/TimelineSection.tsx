import { motion } from "framer-motion";

const events = [
  { icon: "🌿", name: "मेहंदी", date: "गुरुवार, 07 मई 2026", time: "" },
  { icon: "🪔", name: "हल्दी", date: "शुक्रवार, 08 मई 2026", time: "" },
  { icon: "🔔", name: "शुभ विवाह", date: "शुक्रवार, 08 मई 2026", time: "" },
  { icon: "🚗", name: "विदाई", date: "बुधवार, 13 मई 2026", time: "सुबह 10:00 बजे" },
];

const TimelineSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-md mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-2xl md:text-3xl text-center text-foreground mb-4"
        >
          <span className="text-gold-gradient">♛ मांगलिक कार्यक्रम ♛</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center font-body text-muted-foreground text-xs italic mb-12"
        >
          मंगलम् भगवान विष्णु, मंगलम् गरुड़ध्वज:
        </motion.p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold/60 via-gold/30 to-transparent" />

          <div className="space-y-8">
            {events.map((event, i) => (
              <motion.div
                key={event.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-16"
              >
                {/* Icon circle */}
                <div className="absolute left-2 top-1 w-9 h-9 bg-cream border-2 border-gold/40 rounded-full flex items-center justify-center text-lg shadow-sm">
                  {event.icon}
                </div>

                <div className="bg-card border border-gold/15 rounded-xl p-5 shadow-sm hover:shadow-gold transition-shadow duration-300">
                  <h3 className="font-heading text-lg font-semibold text-maroon mb-1">
                    {event.name}
                  </h3>
                  <p className="font-body text-foreground/70 text-sm">
                    {event.date}
                  </p>
                  {event.time && (
                    <p className="font-body text-gold-dark text-sm font-medium mt-1">
                      {event.time}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
