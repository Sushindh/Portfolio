import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      organization: "Oracle",
      date: "June 2025",
      color: "blue",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=2D8ADC900F8551BA85566F7786F42CC6935B6DF083AED6E354F5564467D026D7",
      badge: "OCI"
    },
    {
      title: "OpenTelemetry Foundations",
      organization: "Hands On Guide to Observability - Udemy",
      date: "June 2025",
      color: "green",
      link: "https://www.linkedin.com/in/sushindh-a-7281a1288/details/certifications/1749579771902/single-media-viewer?type=DOCUMENT&profileId=ACoAAEXLgNAB8G-FovuO71EUEPkpxz_fdwHjd0I&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BP3%2Bl%2Fi%2BFSjStoYNcM61tKA%3D%3D",
      badge: "OTEL"
    },
    {
      title: "Getting Started with OpenTelemetry",
      organization: "The Linux Foundation",
      date: "April 2025",
      color: "purple",
      link: "https://drive.google.com/file/d/1R2UcJ2___d81-OjMCxuFF9-1T4o8lshh/view?usp=sharing",
      badge: "OTEL"
    },
    {
      title: "Intel GEN AI Hackathon",
      organization: "Intel Corporation & KPRIET",
      date: "October 2024",
      color: "pink",
      link: "https://drive.google.com/file/d/1MEg8AHQ0Bng6aT2loxgR95FbJhwKJ14P/view?usp=sharing",
      badge: "INTEL"
    },
    {
      title: "MATLAB Onramp",
      organization: "MathWorks",
      date: "July 2024",
      color: "yellow",
      link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=127584ba-1e75-4d5f-979d-1e3c76104189&",
      badge: "MATLAB"
    },
    {
      title: "Defy 25",
      organization: "DAO & VITC",
      date: "May 2024",
      color: "cyan",
      link: "https://drive.google.com/file/d/1jXUAboDtZ40iOHReWKDEAFBPOU1QA0tq/view?usp=sharing",
      badge: "DEFY"
    },
    {
      title: "Data Dash 2024",
      organization: "IEEE RAS VIT Chennai VIT Chennai",
      date: "January 2024",
      color: "indigo",
      link: "https://api.badgr.io/public/assertions/sn0lwrHKQim0PvXcauNPVQ?identity__email=sushindh.anandan%40gmail.com",
      badge: "DD"
    },
    {
      title: "Introduction to Quantum Computing",
      organization: "LinkedIn Learning",
      date: "September 2023",
      color: "red",
      link: "https://lnkd.in/gE2HDcPi",
      badge: "QC"
    }
  ];

  const getColorConfig = (color) => {
    const config = {
      blue: { gradient: "from-blue-600/10 to-transparent hover:border-blue-500/50", badge: "bg-blue-600/20 text-blue-300 border-blue-500/30", icon: "text-blue-400" },
      purple: { gradient: "from-purple-600/10 to-transparent hover:border-purple-500/50", badge: "bg-purple-600/20 text-purple-300 border-purple-500/30", icon: "text-purple-400" },
      green: { gradient: "from-green-600/10 to-transparent hover:border-green-500/50", badge: "bg-green-600/20 text-green-300 border-green-500/30", icon: "text-green-400" },
      yellow: { gradient: "from-yellow-600/10 to-transparent hover:border-yellow-500/50", badge: "bg-yellow-600/20 text-yellow-300 border-yellow-500/30", icon: "text-yellow-400" },
      pink: { gradient: "from-pink-600/10 to-transparent hover:border-pink-500/50", badge: "bg-pink-600/20 text-pink-300 border-pink-500/30", icon: "text-pink-400" },
      cyan: { gradient: "from-cyan-600/10 to-transparent hover:border-cyan-500/50", badge: "bg-cyan-600/20 text-cyan-300 border-cyan-500/30", icon: "text-cyan-400" },
      indigo: { gradient: "from-indigo-600/10 to-transparent hover:border-indigo-500/50", badge: "bg-indigo-600/20 text-indigo-300 border-indigo-500/30", icon: "text-indigo-400" },
      red: { gradient: "from-red-600/10 to-transparent hover:border-red-500/50", badge: "bg-red-600/20 text-red-300 border-red-500/30", icon: "text-red-400" }
    };
    return config[color] || config.blue;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0, opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="certifications" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-gradient inline-block">
            Certifications & Achievements
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full shadow-[0_0_15px_rgba(139,92,246,0.5)]"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {certifications.map((cert, index) => {
            const config = getColorConfig(cert.color);
            return (
              <motion.button
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                key={index}
                onClick={() => window.open(cert.link, '_blank')}
                className={`bg-dark-card border border-dark-border backdrop-blur-xl rounded-2xl flex flex-col items-start p-6 text-left group bg-gradient-to-br transition-all duration-300 shadow-sm hover:shadow-glass ${config.gradient} h-full overflow-hidden relative`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full -mr-8 -mt-8 transition-colors duration-500 group-hover:bg-white/10"></div>

                <div className="flex items-start justify-between w-full mb-5 relative z-10">
                  <div className={`p-2 rounded-xl bg-white/5 border border-white/10 ${config.icon}`}>
                    <Award size={24} />
                  </div>
                  <span className={`${config.badge} px-2.5 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider border shadow-sm`}>
                    {cert.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-100 font-heading leading-snug mb-3 flex-grow group-hover:text-white transition-colors relative z-10">
                  {cert.title}
                </h3>

                <p className="text-gray-400 text-sm font-medium mb-1 relative z-10">{cert.organization}</p>
                <p className="text-gray-500 text-xs mb-5 font-mono relative z-10 bg-dark-bg/50 px-2 py-0.5 rounded border border-white/5 inline-block">{cert.date}</p>

                <div className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 group-hover:text-white transition-colors mt-auto pt-4 border-t border-white/5 w-full relative z-10">
                  <span>View Credential</span>
                  <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </motion.button>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 p-8 md:p-12 bg-gradient-to-r from-primary-500/10 via-secondary-500/10 to-primary-500/10 rounded-2xl border border-white/10 backdrop-blur-xl text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white font-heading mb-4">Continuous Excellence</h3>
            <p className="text-gray-300 md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
              I believe in lifelong learning. These certifications represent my commitment to staying current with industry standards and exploring emerging technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
