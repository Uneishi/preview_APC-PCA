import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()

  return (
    <section className="mt-5 d-flex justify-content-center align-items-center flex-column p-5">
     <div>
     <h2 className="mb-4 text-center fw-bold fs-1">{t('about.title')}</h2>
      <p className="lead text-center fs-3">{t('about.text')}</p>
      </div>
    </section>
  )
}