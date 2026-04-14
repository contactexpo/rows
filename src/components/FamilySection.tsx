import { motion } from "framer-motion";

const FamilySection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-md mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-2xl md:text-3xl text-foreground mb-12"
        >
          <span className="text-gold-gradient">❖ दर्शनाभिलाषी ❖</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-6"
        >
          {/* विनीत */}
          <div className="bg-card border border-gold/20 rounded-2xl p-6 shadow-sm">
            <p className="font-heading text-gold text-xs tracking-[0.2em] mb-4">❖ विनीत ❖</p>
            <p className="font-heading text-foreground font-semibold text-base mb-1">
              श्री गौरीशंकर विश्वकर्मा
            </p>
            <p className="font-body text-muted-foreground text-xs leading-relaxed">
              ग्राम : बडिहारी, पोस्ट : कोल्हुईनगर,<br />
              जिला : महाराजगंज, उत्तर प्रदेश
            </p>
          </div>

          {/* दर्शनाभिलाषी */}
          <div className="bg-card border border-gold/20 rounded-2xl p-6 shadow-sm">
            <p className="font-heading text-gold text-xs tracking-[0.2em] mb-4">❖ परिवार ❖</p>
            <div className="space-y-3 text-sm">
              <p className="font-body text-foreground">
                <span className="text-gold font-heading text-xs">बाबा</span><br />
                श्री प्रभुप्रसाद विश्वकर्मा
              </p>
              <p className="font-body text-foreground">
                <span className="text-gold font-heading text-xs">चाचा</span><br />
                बनारसीलाल विश्वकर्मा
              </p>
              <p className="font-body text-foreground">
                <span className="text-gold font-heading text-xs">भाई</span><br />
                विकास, आकाश, अमन, सुरज, सुजीत, राजकुमार
              </p>
              <p className="font-body text-foreground">
                <span className="text-gold font-heading text-xs">मामा</span><br />
                विजय, राम सरण
              </p>
            </div>
          </div>

          {/* बाल मनुहार */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-card border border-gold/20 rounded-2xl p-6 shadow-sm"
          >
            <p className="font-heading text-gold text-xs tracking-[0.2em] mb-4">🥁 बाल मनुहार 🥁</p>
            <p className="font-body text-muted-foreground text-xs italic leading-relaxed mb-4">
              "छोटे छोटे पाँव हमारे, कैसे आये बुलाने को,<br />
              मेली दीदी की शादी में भूल न जाना आने को......"
            </p>
            <p className="font-body text-foreground/80 text-xs leading-relaxed">
              सोनाक्षी, राधिका, अनन्या, आरोही, प्रिया, तनिक्षा, अंकुर, अंकित,
              अभिषेक, प्रिंस, अरुन, आयुष, पियुष, आदित्य, अयांश
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FamilySection;
