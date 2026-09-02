import { Github, Linkedin, Phone, ArrowUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socials = [
    { icon: Github, href: 'https://github.com/momabdu7777-maker', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mohammed-hakim', label: 'LinkedIn' },
    { icon: Phone, href: 'tel:+967772025992', label: 'Phone' },
  ];

  return (
    <footer className="py-12 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <a href="#" className="text-xl font-display font-bold tracking-tighter">
              MOHAMMED<span className="text-emerald-500">.</span>HAKIM
            </a>
            <p className="text-sm text-slate-500 mt-2">
              © {new Date().getFullYear()} Mohammed Hakim. {t('footer.rights')}
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4">
            {socials.map((social) => (
              <a 
                key={social.label}
                href={social.href} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-emerald-500 transition-colors"
                title={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          <button 
            onClick={scrollToTop}
            className="p-3 rounded-full bg-slate-50 dark:bg-slate-900 hover:bg-emerald-500 hover:text-white transition-all group"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
