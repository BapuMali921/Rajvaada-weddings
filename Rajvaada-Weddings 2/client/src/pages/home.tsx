import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { useCreateContact } from "@/hooks/use-contact";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { ArrowDown, Star, Crown, MapPin, Sparkles } from "lucide-react";

export default function Home() {
  const mutation = useCreateContact();
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      weddingLocation: "",
      budget: "",
      message: "",
    },
  });

  function onSubmit(data: InsertContactMessage) {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Background - Jaipur Palace Style */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/70 z-10" />
          {/* Unsplash image of Rambagh Palace or similar architecture */}
          <img
            src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=2000"
            alt="Royal Jaipur Palace Wedding"
            className="w-full h-full object-cover scale-105 animate-[zoom-in_20s_infinite_alternate]"
          />
        </div>

        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="text-gold tracking-[0.4em] uppercase text-sm md:text-base font-medium mb-8 block">
              Where Royalty Meets Romance
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-10 leading-[1.1]">
              Crafting Royal <br />
              <span className="italic font-light">Celebrations</span>
            </h1>
            <p className="text-white/90 text-xl md:text-2xl font-light max-w-3xl mx-auto mb-14 leading-relaxed">
              Destination weddings curated with heritage, elegance, and timeless luxury in the heart of Rajasthan.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-12 py-5 bg-gold-gradient text-white uppercase tracking-widest text-sm font-bold hover-gold-glow transition-all duration-700 rounded-sm"
            >
              Begin Your Royal Journey
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50 animate-bounce"
        >
          <ArrowDown size={32} strokeWidth={1} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="section-spacing bg-background relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2 }}
              className="relative"
            >
              <div className="relative z-10 aspect-[3/4] overflow-hidden shadow-soft">
                {/* Indian bride entry luxurious setting */}
                <img 
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800" 
                  alt="Bride in traditional attire" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-1500"
                />
              </div>
              <div className="absolute -bottom-16 -right-16 w-2/3 aspect-[4/3] overflow-hidden z-20 border-[12px] border-background shadow-2xl hidden md:block">
                 {/* Wedding details / hands */}
                <img 
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=600" 
                  alt="Traditional wedding ritual" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="md:pl-20 mt-12 md:mt-0"
            >
              <span className="text-primary tracking-[0.5em] uppercase text-xs font-bold mb-8 block opacity-60">Our Heritage</span>
              <h2 className="text-6xl md:text-8xl font-serif text-foreground mb-12 leading-[1.1]">
                Curating Opulence & <br /><span className="text-gold italic font-light">Tradition</span>
              </h2>
              <div className="mb-12 aspect-video overflow-hidden shadow-soft group">
                <img 
                  src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800" 
                  alt="Professional Cinematography" 
                  className="w-full h-full object-cover transition-transform duration-1500 group-hover:scale-110"
                />
                <p className="text-[10px] uppercase tracking-widest mt-2 opacity-40 text-right">Captured with Sony α7S III</p>
              </div>
              <p className="text-muted-foreground text-2xl leading-relaxed mb-10 font-light">
                Inspired by the grandeur of Rajasthan's royal courts, Rajvaada Weddings was born from a desire to bring the magnificence of the past into modern celebrations.
              </p>
              <p className="text-muted-foreground text-2xl leading-relaxed mb-16 font-light opacity-70">
                We don't just plan weddings; we orchestrate experiences that echo through generations. Every detail, from the venue selection to the intricate decor, is curated with a deep respect for heritage and an unyielding commitment to luxury.
              </p>
              <div className="flex items-center space-x-8">
                <div className="h-[1px] w-24 bg-primary/20"></div>
                <span className="font-serif text-3xl italic text-primary opacity-80">The Art of Celebration</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Signature Experiences */}
      <section id="services" className="section-spacing bg-muted/10">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeading 
            title="Signature Experiences" 
            subtitle="We specialize in creating bespoke weddings that reflect your unique love story against the backdrop of royalty."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                title: "Palace Weddings",
                icon: Crown,
                desc: "Exchange vows in centuries-old forts and palaces.",
                img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Destination Weddings",
                icon: MapPin,
                desc: "From Udaipur's lakes to Jodhpur's sands.",
                img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Luxury Decor",
                icon: Sparkles,
                desc: "Bespoke styling with exotic flowers and fabrics.",
                img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "NRI & Celebrity",
                icon: Star,
                desc: "Exclusive, private, and seamlessly managed.",
                img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800"
              }
            ].map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 1 }}
                className="group relative h-[600px] overflow-hidden cursor-pointer shadow-soft hover:shadow-2xl transition-all duration-1000"
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-1000 z-10" />
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-1500 group-hover:scale-110"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-12 text-white">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-1000 ease-out">
                    <service.icon className="w-12 h-12 text-gold mb-8 opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-150" />
                    <h3 className="text-4xl font-serif mb-6 leading-tight">{service.title}</h3>
                    <p className="text-white/80 font-light text-lg opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-300">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="portfolio" className="section-spacing bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeading 
            title="Our Portfolio" 
            subtitle="Glimpses of the magical moments we've had the honor of creating."
          />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[550px]">
            {/* Immersive Masonry Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="md:col-span-8 row-span-2 relative group overflow-hidden shadow-soft"
            >
              <img 
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200" // Cinematic wide shot
                alt="Grand Wedding Ceremony" 
                className="w-full h-full object-cover transition-transform duration-1500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-1000" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1.2 }}
              className="md:col-span-4 relative group overflow-hidden shadow-soft"
            >
              <img 
                src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=800" // Cinematic bridal entry
                alt="Bridal Details" 
                className="w-full h-full object-cover transition-transform duration-1500 group-hover:scale-110"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1.2 }}
              className="md:col-span-4 relative group overflow-hidden shadow-soft"
            >
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800" // Table setup
                alt="Decor Details" 
                className="w-full h-full object-cover transition-transform duration-1500 group-hover:scale-110"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 1.2 }}
              className="md:col-span-12 relative group overflow-hidden h-[600px] mt-8 shadow-soft"
            >
              <img 
                src="https://images.unsplash.com/photo-1513274815586-419020d910dc?auto=format&fit=crop&q=80&w=1200" // Cinematic nighttime celebration
                alt="Mandap Setup" 
                className="w-full h-full object-cover transition-transform duration-1500 group-hover:scale-110"
              />
            </motion.div>
          </div>

          <div className="text-center mt-32">
            <a href="#portfolio" className="inline-block">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-gold-gradient hover:border-gold hover:text-white transition-all uppercase tracking-[0.3em] text-xs h-16 px-16 shadow-soft"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Our Collection
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-spacing bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 border-t border-l border-white/5 m-12"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 border-b border-r border-white/5 m-12"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-7xl">
          <SectionHeading title="Royal Endorsements" subtitle="Kind words from our cherished couples." centered light />
          
          <div className="max-w-6xl mx-auto mt-24">
             <motion.div 
               initial={{ opacity: 0, scale: 0.98 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.5 }}
               className="relative p-20 md:p-32 border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
             >
                <Crown className="w-16 h-16 text-gold mx-auto mb-16 opacity-60" />
                <p className="text-3xl md:text-5xl font-serif italic leading-[1.6] mb-16 opacity-90">
                  "Rajvaada Weddings turned our dream into a reality that exceeded every expectation. The attention to detail, the warmth of the hospitality, and the sheer grandeur of the execution left our guests spellbound."
                </p>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-8 border-2 border-gold p-1">
                    <img src="https://images.unsplash.com/photo-1595066113943-4190c6095393?auto=format&fit=crop&q=80&w=200" alt="Couple" className="w-full h-full object-cover rounded-full" />
                  </div>
                  <h4 className="text-2xl font-bold text-gold uppercase tracking-[0.3em]">Priya & Rahul</h4>
                  <span className="text-lg text-white/40 mt-3">Udaipur, 2023</span>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-spacing bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <div className="max-w-5xl mx-auto">
            <SectionHeading 
              title="Begin Your Journey" 
              subtitle="Tell us about your dream wedding, and we will craft a proposal fit for royalty."
              centered
            />

            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="bg-white p-12 md:p-24 shadow-soft border border-border/20 relative z-10"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-16">
                  <div className="grid md:grid-cols-2 gap-16">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase text-xs tracking-[0.3em] text-muted-foreground font-bold">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Name" className="border-0 border-b border-input rounded-none px-0 py-6 text-2xl focus-visible:ring-0 focus-visible:border-primary bg-transparent transition-all" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase text-xs tracking-[0.3em] text-muted-foreground font-bold">Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="your@email.com" className="border-0 border-b border-input rounded-none px-0 py-6 text-2xl focus-visible:ring-0 focus-visible:border-primary bg-transparent transition-all" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-16">
                    <FormField
                      control={form.control}
                      name="weddingLocation"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase text-xs tracking-[0.3em] text-muted-foreground font-bold">Preferred Location</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-0 border-b border-input rounded-none px-0 py-6 text-2xl h-auto focus:ring-0 focus:border-primary bg-transparent">
                                <SelectValue placeholder="Select a city" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="jaipur">Jaipur</SelectItem>
                              <SelectItem value="udaipur">Udaipur</SelectItem>
                              <SelectItem value="jodhpur">Jodhpur</SelectItem>
                              <SelectItem value="jaisalmer">Jaisalmer</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase text-xs tracking-[0.3em] text-muted-foreground font-bold">Estimated Budget</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-0 border-b border-input rounded-none px-0 py-6 text-2xl h-auto focus:ring-0 focus:border-primary bg-transparent">
                                <SelectValue placeholder="Select budget range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="50-75l">₹50L - ₹75L</SelectItem>
                              <SelectItem value="75l-1cr">₹75L - ₹1Cr</SelectItem>
                              <SelectItem value="1cr-3cr">₹1Cr - ₹3Cr</SelectItem>
                              <SelectItem value="3cr+">₹3Cr+</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase text-xs tracking-[0.3em] text-muted-foreground font-bold">Your Vision</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us a bit about what you are imagining..." 
                            className="resize-none border-0 border-b border-input rounded-none px-0 py-6 text-2xl focus-visible:ring-0 focus-visible:border-primary bg-transparent min-h-[150px] transition-all" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="pt-12 flex justify-center">
                    <Button 
                      type="submit" 
                      disabled={mutation.isPending}
                      className="w-full md:w-auto bg-gold-gradient hover:shadow-2xl text-white px-24 py-10 text-sm uppercase tracking-[0.4em] font-bold hover-gold-glow transition-all duration-1000"
                    >
                      {mutation.isPending ? "Sending Inquiry..." : "Plan My Royal Wedding"}
                    </Button>
                  </div>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
