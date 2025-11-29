import React from 'react';
import { Mail, Linkedin, Github, Phone, MapPin, ExternalLink } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      title: "Email",
      value: "sushindh.anandan@gmail.com",
      icon: Mail,
      color: "blue",
      link: "mailto:sushindh.anandan@gmail.com"
    },
    {
      title: "Phone",
      value: "+91 9940384952",
      icon: Phone,
      color: "purple",
      link: "tel:+919940384952"
    },
    {
      title: "Location",
      value: "Chennai, Tamil Nadu, India",
      icon: MapPin,
      color: "green",
      link: "https://maps.google.com/?q=Chennai,Tamil+Nadu"
    }
  ];

  const ctaButtons = [
    {
      label: "Send Email",
      icon: Mail,
      link: "mailto:sushindh.anandan@gmail.com",
      color: "blue",
      bgGradient: "from-blue-600 to-blue-500"
    },
    {
      label: "Connect on LinkedIn",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/sushindh-anandan/",
      color: "purple",
      bgGradient: "from-purple-600 to-purple-500"
    },
    {
      label: "View GitHub",
      icon: Github,
      link: "https://github.com/sushindh",
      color: "gray",
      bgGradient: "from-gray-700 to-gray-600"
    }
  ];

  return (
    <section id="contact" className="py-32 px-4 bg-gray-950/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 text-lg mt-6">
            I'm always interested in hearing about new opportunities, collaborations, and interesting projects. Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            const colorClass = {
              blue: "bg-blue-600/20 border-blue-500/30 text-blue-400",
              purple: "bg-purple-600/20 border-purple-500/30 text-purple-400",
              green: "bg-green-600/20 border-green-500/30 text-green-400"
            };

            return (
              <a
                key={index}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : '_self'}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                className={`contact-card card-glow ${colorClass[info.color]} p-8 rounded-xl border backdrop-blur-sm hover:shadow-lg transition-all`}
              >
                <IconComponent size={32} className="mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
                <p className="text-gray-300 break-all text-sm">{info.value}</p>
              </a>
            );
          })}
        </div>

        <div className="mb-16 p-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl border border-blue-500/30 backdrop-blur-sm text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Want to work together?</h3>
          <p className="text-gray-300 mb-8">
            Whether you have a question, a project idea, or just want to chat about tech, don't hesitate to reach out. I'd love to hear from you!
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            {ctaButtons.map((btn, index) => {
              const IconComponent = btn.icon;
              return (
                <a
                  key={index}
                  href={btn.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-glow bg-gradient-to-r ${btn.bgGradient} hover:shadow-lg px-6 py-3 rounded-lg text-white font-semibold flex items-center justify-center gap-2 transition-all`}
                >
                  <IconComponent size={20} />
                  {btn.label}
                </a>
              );
            })}
          </div>
        </div>


      </div>
    </section>
  );
};

export default Contact;
