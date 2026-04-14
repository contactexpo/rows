import { motion } from "framer-motion";
import floralBorder from "@/assets/floral-border.png";
import ganeshImg from "@/assets/ganesh.png";

const InvitationSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-md mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Floral border frame */}
          <img
            src={floralBorder}
            alt=""
            loading="lazy"
            className="absolute inset-0 w-full h-full object-fill opacity-20 pointer-events-none"
          />

          <div className="bg-card/80 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 md:p-12 shadow-gold text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {/* Ganesh Ji */}
              <img
                src={ganeshImg}
                alt="श्री गणेश"
                loading="lazy"
                width={80}
                height={80}
                className="mx-auto mb-4 glow-gold"
              />

              <p className="font-heading text-gold text-base mb-2 tracking-wide">
                ॥ श्री गणेशाय नमः ॥
              </p>
              <p className="font-body text-muted-foreground text-xs leading-relaxed mb-6 italic">
                वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।<br />
                निर्विघ्नं कुरु मे देव सर्व कार्येषु सर्वदा॥
              </p>

              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />

              <p className="font-heading text-gold text-sm mb-6 tracking-[0.2em]">
                ✦ शुभ निमंत्रण ✦
              </p>

              <p className="font-body text-foreground/80 text-base leading-relaxed mb-4">
                सर्वेही मान्यवर,<br />
                ईश्वर की असीम अनुकम्पा से हमारी सुपुत्री
              </p>

              <p className="font-heading font-bold text-maroon text-2xl mb-1">
                आयु. कु. खुशी
              </p>
              <p className="font-body text-foreground/70 text-xs mb-1">
                सुपुत्री : श्रीमती संगीता विश्वकर्मा एवं
              </p>
              <p className="font-body text-foreground/70 text-xs mb-4">
                श्री गौरीशंकर विश्वकर्मा
              </p>

              <p className="font-heading text-gold text-lg mb-4">संग</p>

              <p className="font-heading font-bold text-maroon text-2xl mb-1">
                चि. विमलेश
              </p>
              <p className="font-body text-foreground/70 text-xs mb-1">
                सुपुत्र : श्रीमती कौशल्या देवी विश्वकर्मा एवं
              </p>
              <p className="font-body text-foreground/70 text-xs mb-6">
                श्री फूलचंद विश्वकर्मा
              </p>

              <p className="font-heading text-gold text-sm mb-4">ॐ का शुभ विवाह ॐ</p>

              <p className="font-body text-foreground/80 text-sm leading-relaxed mb-6">
                शुक्रवार दि. 08 मई 2026 को होना निश्चित हुआ है। अतः इस पावन
                मधुर बेला पर पधारकर वर वधू को अपना स्नेह भरा आशीर्वाद
                देकर हमें अनुग्रहित करें।
              </p>

              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" />

              <p className="font-heading text-gold/70 text-sm mt-6">
                ~ सादर आमंत्रित ~
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvitationSection;
