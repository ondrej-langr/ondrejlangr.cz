import { HTMLMotionProps, motion } from 'framer-motion';
import { FC } from 'react';
import {
  BrandFacebook,
  BrandGithub,
  BrandInstagram,
  BrandLinkedin,
  Mail,
  Phone,
} from 'tabler-icons-react';
import { useTranslation } from 'react-i18next';

const SocLink: FC<HTMLMotionProps<'a'>> = ({
  className,
  children,
  ...rest
}) => (
  <motion.a
    whileTap={{ scale: 0.9 }}
    whileHover={{ scale: 1.1 }}
    className="dark:hover:opacity-80 hover:opacity-80 dark:text-project-accents text-project-green transition-colors duration-300"
    {...rest}
  >
    {children}
  </motion.a>
);

const iconSize = 55;

export const SocialLinks: FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex gap-x-12 gap-y-6 sm:justify-start justify-center flex-wrap flex-none max-w-screen-xl mx-auto px-4 w-full mt-32">
      <SocLink href="tel:+40607445251" title={t('Zavolat')} target="_blank">
        <Phone size={iconSize} />
      </SocLink>
      <SocLink
        href="mailto:hi@ondrejlangr.cz"
        target="_blank"
        title={t('Poslat email')}
      >
        <Mail size={iconSize} />
      </SocLink>
      <SocLink
        href="https://www.facebook.com/DaichiRyosuke/"
        target="_blank"
        title={t('Prohlédnout Facebook')}
      >
        <BrandFacebook size={iconSize} />
      </SocLink>
      <SocLink
        href="https://www.instagram.com/daichi_senpai_/"
        target="_blank"
        title={t('Prohlédnout Instagram')}
      >
        <BrandInstagram size={iconSize} />
      </SocLink>
      <SocLink
        href="https://www.linkedin.com/in/langr-ondrej/"
        target="_blank"
        title={t('Prohlédnout Linkedin')}
      >
        <BrandLinkedin size={iconSize} />
      </SocLink>
      <SocLink
        href="https://github.com/ondrej-langr"
        target="_blank"
        title={t('Prohlédnout Github')}
      >
        <BrandGithub size={iconSize} />
      </SocLink>
    </div>
  );
};
