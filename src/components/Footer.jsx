import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-warning text-light text-center py-4 mt-5">
      <p className="mb-0">{t('footer.copyright')}</p>
    </footer>
  )
}