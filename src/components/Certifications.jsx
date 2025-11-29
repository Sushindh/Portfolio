import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

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

  const getBadgeColor = (color) => {
    const colors = {
      blue: "bg-blue-600/20 text-blue-300 border-blue-500/30",
      purple: "bg-purple-600/20 text-purple-300 border-purple-500/30",
      green: "bg-green-600/20 text-green-300 border-green-500/30",
      yellow: "bg-yellow-600/20 text-yellow-300 border-yellow-500/30",
      pink: "bg-pink-600/20 text-pink-300 border-pink-500/30",
      cyan: "bg-cyan-600/20 text-cyan-300 border-cyan-500/30",
      indigo: "bg-indigo-600/20 text-indigo-300 border-indigo-500/30",
      red: "bg-red-600/20 text-red-300 border-red-500/30"
    };
    return colors[color] || colors.blue;
  };

  const getGradientClasses = (color) => {
    const colors = {
      blue: "from-blue-600/20 to-transparent hover:border-blue-500/50",
      purple: "from-purple-600/20 to-transparent hover:border-purple-500/50",
      green: "from-green-600/20 to-transparent hover:border-green-500/50",
      yellow: "from-yellow-600/20 to-transparent hover:border-yellow-500/50",
      pink: "from-pink-600/20 to-transparent hover:border-pink-500/50",
      cyan: "from-cyan-600/20 to-transparent hover:border-cyan-500/50",
      indigo: "from-indigo-600/20 to-transparent hover:border-indigo-500/50",
      red: "from-red-600/20 to-transparent hover:border-red-500/50"
    };
    return colors[color] || colors.blue;
  };

return (
    <section id="certifications" className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Certifications & Achievements
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                    <button
                        key={index}
                        onClick={() => window.open(cert.link, '_blank')}
                        className={`cert-card card-glow bg-gradient-to-br ${getGradientClasses(cert.color)} p-8 rounded-xl border border-gray-700/50 backdrop-blur-sm transition-all text-left hover:shadow-lg hover:scale-105`}
                        style={{
                            animationDelay: `${index * 0.1}s`
                        }}
                    >
                        <div className="flex items-start justify-between mb-4">
                            <Award size={32} className="text-blue-400 flex-shrink-0" />
                            <span className={`${getBadgeColor(cert.color)} px-3 py-1 rounded-full text-xs font-semibold border`}>
                                {cert.badge}
                            </span>
                        </div>
                        
                        <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
                        
                        <p className="text-gray-400 text-sm mb-4">{cert.organization}</p>
                        
                        <p className="text-gray-500 text-xs mb-4">{cert.date}</p>
                        
                        <div className="inline-flex items-center gap-2 text-blue-400 group">
                            View Credential
                            <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                    </button>
                ))}
            </div>

            <div className="mt-16 p-8 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-xl border border-purple-500/30 backdrop-blur-sm text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Continuous Excellence</h3>
                <p className="text-gray-300">
                    I believe in lifelong learning. These certifications represent my commitment to staying current with industry standards and exploring emerging technologies.
                </p>
            </div>
        </div>
    </section>
);
};

export default Certifications;
