import { useTranslation } from 'react-i18next'

export default function Donation() {
  const { t } = useTranslation()

  const goToPaypal = () => {
    window.open('https://www.paypal.com', '_blank')
  }

  return (
    <section className="container py-4 align-items-center justify-content-center d-flex flex-column">
      <h2 className="mb-4 text-center fw-bold fs-1">{t('donation.title')}</h2>
      <p className="mb-4 text-center fs-3">{t('donation.text')}</p>
      <img src="images/paypal.png" alt="Donation" className="img-fluid rounded" width={300} onClick={goToPaypal} />
    </section>
  )
}