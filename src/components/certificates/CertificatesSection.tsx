import { CertificateCard } from './CertificateCard';
import { certificatesData } from './certificatesData';
import { CertificatesBackground } from './CertificatesBackground';

export function CertificatesSection() {
  return (
    <section id="certificates" className="py-20 bg-dark relative overflow-hidden">
      <CertificatesBackground />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary font-mono">
          Certifications
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {certificatesData.map((certificate, index) => (
            <CertificateCard 
              key={index}
              {...certificate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}