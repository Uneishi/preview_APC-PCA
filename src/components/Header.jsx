import { useTranslation } from 'react-i18next'
export default function Header() {
  const { t, i18n } = useTranslation()

  return (
    <nav className="navbar navbar-light bg-primary px-4 d-flex justify-content-between sticky-top">
      <span className="navbar-brand fw-bold">{t('site.name')}</span>
      <div>
        <button className="btn bg-warning btn-sm btn-outline-secondary me-2" onClick={() => i18n.changeLanguage('en')}>EN</button>
        <button className="btn bg-warning btn-sm btn-outline-secondary me-2" onClick={() => i18n.changeLanguage('fr')}>FR</button>
        <button className="btn bg-warning btn-sm btn-outline-secondary" onClick={() => i18n.changeLanguage('ua')}>UA</button>
      </div>
    </nav>
  )
}