import TitledSection from '@components/TitledSection';
import { FC, ReactElement } from 'react';
import { useSiteContext } from '@contexts';
import Button from '@components/Button';
import { FormState } from './types';
import { validationSchema } from './schemas';
import { initialValue } from './constants';
import { Input, Select, Textarea } from '@components/form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import { ContactRow } from './ContactRow';
import { Mail, Phone } from 'tabler-icons-react';
import { SocialLinks } from '../HeroBanner/SocialLinks';

export const ContactForm: FC = (): ReactElement => {
  const formMethods = useForm({
    defaultValues: initialValue,
    resolver: yupResolver(validationSchema),
  });
  const { setValue } = useSiteContext();
  const { t } = useTranslation();
  const { handleSubmit, reset, formState, register } = formMethods;

  const onSubmitCallback = async (values: FormState) => {
    setValue('isLoading', true);

    await fetch('/api/contactus', {
      method: 'POST',
      body: JSON.stringify(values),
    });

    setValue('isLoading', false);
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
            <div className="grid md:grid-cols-12 mb-12 gap-12">
              <div className="md:col-span-7 grid gap-10">
                <Input
                  required
                  id="fullname"
                  placeholder={t('Full name')}
                  {...register('fullName')}
                />
                <Input
                  required
                  id="email"
                  placeholder="Email"
                  {...register('email')}
                />
                <Input
                  id="telephone"
                  placeholder={t('Telephone number')}
                  {...register('telephone')}
                />
                <Select
                  id="budget"
                  placeholder={t('Expected Budget')}
                  options={[
                    { value: '$1k-$2k' },
                    { value: '$5k-$10k' },
                    { value: '$75k-$100k' },
                    { value: '$150k-$300k' },
                    { value: '$300k+' },
                    { value: 'Not sure' },
                  ]}
                  {...register('budget')}
                />
                <Textarea
                  required
                  id="message"
                  placeholder="Message"
                  rows={10}
                  {...register('message')}
                />
                {formState.isSubmitSuccessful && (
                  <p className={'text-green-700 text-2xl my-10'}>
                    Thank you for your message! I'll get to you right away as
                    soon as it will be possible :)
                  </p>
                )}
              </div>

              <div className="md:col-span-5">
                <div className="text-4xl font-semibold text-blue-400 dark:text-project-accents">
                  Ondřej Langr
                </div>
                <address className="text-2xl font-semibold mt-2 not-italic text-gray-600 dark:text-gray-300">
                  Lukavec u Hořic 13, <br />
                  50801 Hořice
                </address>
                <div className="mt-10 text-2xl dark:text-project-accents text-blue-300">
                  <ContactRow icon={<Phone size={25} />}>
                    <a
                      title={t('telephone')}
                      href="tel:+420607445251"
                      className="dark:text-project-accents text-blue-300"
                    >
                      +420 607 445 251
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
                  <ContactRow icon={<Mail size={25} />}>
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
                <SocialLinks />
              </div>

              <div className="md:col-span-7">
                <Button
                  type="submit"
                  loading={formState.isSubmitting}
                  disabled={formState.isSubmitting}
                >
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </FormProvider>
      </TitledSection>
    </>
  );
};
