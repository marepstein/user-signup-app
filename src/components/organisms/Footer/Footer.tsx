import { FC } from 'react';

const footerLinks = [
  'How it works',
  'Returns',
  'FAQ',
  'Ledger Portal',
  'Privacy Policy',
  'Terms and Conditions',
  'Press',
];

export const Footer: FC = () => {
  return (
    <footer className="flex flex-col gap-2.5 p-5 bg-sand100 min-h-full">
      {footerLinks.map((link) => (
        <a key={link} href="#" className="text-ash600">
          {link}
        </a>
      ))}
    </footer>
  );
};
