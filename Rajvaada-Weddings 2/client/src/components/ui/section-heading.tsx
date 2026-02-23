import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({ title, subtitle, centered = true, light = false }: SectionHeadingProps) {
  return (
    <div className={`mb-24 ${centered ? "text-center" : "text-left"}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <span className={`uppercase tracking-[0.5em] text-xs font-bold mb-6 block opacity-60 ${light ? "text-white" : "text-primary"}`}>
          Rajvaada Weddings
        </span>
        <h2 className={`text-5xl md:text-7xl font-serif mb-10 leading-tight ${light ? "text-white" : "text-primary"}`}>
          {title}
        </h2>
        {subtitle && (
          <div className={`flex ${centered ? "justify-center" : "justify-start"}`}>
             <p className={`max-w-3xl text-xl md:text-2xl font-light leading-relaxed opacity-80 ${light ? "text-white" : "text-muted-foreground"}`}>
              {subtitle}
            </p>
          </div>
        )}
        <div className={`mt-12 flex ${centered ? "justify-center" : "justify-start"}`}>
          <div className={`h-[1px] w-32 ${light ? "bg-white/20" : "bg-primary/10"}`}></div>
        </div>
      </motion.div>
    </div>
  );
}
