'use client';

import TitledSection from '@components/TitledSection';
import { FC, ReactElement } from 'react';
import { FormState } from './types';
import { validationSchema } from './schemas';
import { initialValue } from './constants';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslations } from '@hooks';
import { ContactRow } from './ContactRow';
import { Mail, Phone } from 'tabler-icons-react';
import { useDarkMode } from '@contexts/DarkModeContext';

export const ContactForm: FC = (): ReactElement => {
  const formMethods = useForm({
    defaultValues: initialValue,
    resolver: zodResolver(validationSchema),
  });
  const { t } = useTranslations();
  const { handleSubmit, reset } = formMethods;

  const onSubmitCallback = async (values: FormState) => {
    await fetch('/api/contactus', {
      method: 'POST',
      body: JSON.stringify(values),
    });

    reset();
  };

  return (
    <>
      <TitledSection title="Let's talk bussines" id="contact">
        <FormProvider {...formMethods}>
          <form
            onSubmit={handleSubmit(onSubmitCallback)}
            className="mb-20 mt-20"
          >
            <div className="flex flex-wrap justify-between mb-12 gap-12">
              <div>
                <div className="text-4xl font-semibold text-blue-400 dark:text-project-accents">
                  Ondřej Langr
                </div>
                <address className="text-2xl font-semibold mt-2 not-italic text-gray-600 dark:text-gray-300">
                  Lukavec u Hořic 13, <br />
                  50801 Hořice
                </address>
              </div>
              <div className="text-2xl dark:text-project-accents text-blue-300">
                <ContactRow icon={<Phone size={25} />}>
                  <a
                    title={t('telephone')}
                    href="tel:+420607445251"
                    className="dark:text-project-accents text-blue-300"
                  >
                    &#43;&#52;&#50;&#48;&#32;&#54;&#48;&#55;&#32;&#52;&#52;&#53;&#32;&#50;&#53;&#49;
                  </a>
                </ContactRow>
                <ContactRow icon={<Mail size={25} />}>
                  <a
                    title={t('email')}
                    href="mailto:hi@ondrejlangr.cz"
                    className="dark:text-project-accents text-blue-300"
                  >
                    hi@ondrejlangr.cz
                  </a>
                </ContactRow>
                <ContactRow
                  icon={<span className="text-sm font-bold">IČO</span>}
                >
                  <a
                    title={t('ICO')}
                    target="_blank"
                    rel="noopener"
                    href="https://www.podnikatel.cz/rejstrik/ondrej-langr-09579443/"
                    className="dark:text-project-accents text-blue-300"
                  >
                    09579443
                  </a>
                </ContactRow>
              </div>
            </div>
          </form>
        </FormProvider>
      </TitledSection>
    </>
  );
};
