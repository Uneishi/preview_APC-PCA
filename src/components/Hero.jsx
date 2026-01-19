import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="mt-5 d-flex justify-content-center align-items-center flex-column p-5">
      <h1 className="text-center fw-bold fs-1">{t('hero.title')}</h1>
      <p className="lead mt-3 text-center fs-3">{t('hero.subtitle')}</p>
    </section>
  )
}