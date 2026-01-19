import { useTranslation } from 'react-i18next'

export default function Service() {
    const { t } = useTranslation()

    return (
        <section className="mt-6 justify-content-center align-items-center flex-column p-5">
            <div className="container">
                <h2 className="text-center mb-4 fw-bold fs-1">{t('service.title')}</h2>
                <div className="row gx-5 gy-4">
                    <div className="col img-fluid">
                        <div className="row lead fs-3">
                            <img src="images/help.jpg" alt="Service"/>
                            {t('service.approach')}
                        </div>
                    </div>
                    <div className="col ">
                        <div className="row lead fs-3">
                            <img src="images/bgHelp.png" alt="Service"/>
                            {t('service.ourMission')}
                        </div>
                    </div>
                    <div className="w-100 p-5 gy-4"></div>
                     <div className="col">
                        <div className="row lead fs-3">
                            <img src="images/kid.jpg" alt="Service"/>
                            {t('service.support')}
                        </div>
                    </div>
                    <div className="col ">
                        <div className="row lead fs-3">
                            <img src="images/therapy.jpg" alt="Service"/>
                            {t('service.wedo')}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}