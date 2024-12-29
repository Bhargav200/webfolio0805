import React from 'react';
import { ExternalLink, Calendar } from 'lucide-react';

interface CertificateCardProps {
  title: string;
  issuer: string;
  issuerLogo: string;
  issuedDate: string;
  credentialUrl: string;
}

export function CertificateCard({ 
  title, 
  issuer, 
  issuerLogo, 
  issuedDate, 
  credentialUrl 
}: CertificateCardProps) {
  return (
    <div className="bg-dark-lighter p-6 rounded-xl border border-primary/20 hover:border-primary/40 transform hover:scale-[1.02] transition-all duration-300">
      <div className="flex items-start gap-4">
        <img 
          src={issuerLogo} 
          alt={issuer}
          className="w-12 h-12 object-contain rounded-lg bg-white p-1"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-400 text-sm mb-3">{issuer}</p>
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
            <Calendar className="w-4 h-4" />
            <span>Issued {issuedDate}</span>
          </div>
          <a 
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors"
          >
            <span>View Certificate</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}