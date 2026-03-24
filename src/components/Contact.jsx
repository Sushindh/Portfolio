import React from 'react';
import { Mail, Linkedin, Github, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const contactInfo = [
    {
      title: "Email",
      value: "sushindh.anandan@gmail.com",
      icon: Mail,
      color: "from-blue-500/20 to-transparent",
      iconColor: "text-blue-400",
      borderColor: "hover:border-blue-500/50",
      link: "mailto:sushindh.anandan@gmail.com"
    },
    {
      title: "Phone",
      value: "+91 9940384952",
      icon: Phone,
      color: "from-purple-500/20 to-transparent",
      iconColor: "text-purple-400",
      borderColor: "hover:border-purple-500/50",
      link: "tel:+919940384952"
    },
    {
      title: "Location",
      value: "Chennai, Tamil Nadu, India",
      icon: MapPin,
      color: "from-green-500/20 to-transparent",
      iconColor: "text-green-400",
      borderColor: "hover:border-green-500/50",
      link: "https://maps.google.com/?q=Chennai,Tamil+Nadu"
    }
  ];

  const ctaButtons = [
    {
      label: "Send Email",
      icon: Mail,
      link: "mailto:sushindh.anandan@gmail.com",
      bgGradient: "bg-gradient-to-r from-primary-600 to-primary-500 shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]"
    },
    {
      label: "Connect on LinkedIn",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/sushindh-anandan/",
      bgGradient: "bg-gradient-to-r from-[#0077b5] to-[#00a0dc] shadow-[0_0_20px_rgba(0,119,181,0.4)] hover:shadow-[0_0_30px_rgba(0,119,181,0.6)]"
    },
    {
      label: "View GitHub",
      icon: Github,
      link: "https://github.com/sushindh",
      bgGradient: "bg-gradient-to-r from-gray-700 to-gray-600 shadow-[0_0_20px_rgba(75,85,99,0.4)] hover:shadow-[0_0_30px_rgba(75,85,99,0.6)]"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="contact" className="py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-gradient inline-block">
            Let's Connect
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full shadow-[0_0_15px_rgba(139,92,246,0.5)]"></div>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities, collaborations, and interesting projects. Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;

            return (
              <motion.a
                variants={itemVariants}
                whileHover={{ y: -5 }}
                key={index}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : '_self'}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                className={`bg-dark-card border border-dark-border bg-gradient-to-br ${info.color} p-8 rounded-2xl backdrop-blur-xl transition-all duration-300 ${info.borderColor} group overflow-hidden relative`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-[100px] -mr-8 -mt-8 transition-colors duration-500 group-hover:bg-white/10"></div>

                <div className="w-14 h-14 rounded-xl bg-dark-bg/50 border border-white/5 flex items-center justify-center mb-6 relative z-10 transition-transform duration-300 group-hover:scale-110">
                  <IconComponent size={28} className={info.iconColor} />
                </div>

                <h3 className="text-xl font-bold text-white font-heading mb-2 relative z-10">{info.title}</h3>
                <p className="text-gray-400 text-sm font-medium break-words relative z-10 group-hover:text-gray-300 transition-colors">{info.value}</p>
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="p-8 md:p-12 bg-gradient-to-br from-dark-card to-dark-bg rounded-3xl border border-dark-border backdrop-blur-xl text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay"></div>
          <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-gradient-to-b from-primary-500/5 to-transparent rotate-45 pointer-events-none"></div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white font-heading mb-4">Want to work together?</h3>
            <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
              Whether you have a question, a project idea, or just want to chat about tech, don't hesitate to reach out. I'd love to hear from you!
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
              {ctaButtons.map((btn, index) => {
                const IconComponent = btn.icon;
                return (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    key={index}
                    href={btn.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${btn.bgGradient} w-full sm:w-auto px-8 py-4 rounded-xl text-white font-bold flex items-center justify-center gap-3 transition-all duration-300 relative overflow-hidden group`}
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                    <IconComponent size={20} className="relative z-10 group-hover:animate-pulse" />
                    <span className="relative z-10">{btn.label}</span>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
