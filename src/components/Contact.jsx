import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const { t } = useTranslation()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here (e.g., send to API)
    setSubmitted(true);
  };

  return (
    <div className="form-group mt-5 d-flex justify-content-center align-items-center flex-column">
        <div className="mb-3">
        <h2 className="text-center fw-bold fs-1">{t('contact.title')}</h2>
        {submitted ? (
            <p>{t('contact.description')}</p>
        ) : (
            <form className="form-group text-center" onSubmit={handleSubmit}>
            <div className="form-group mb-3">
                <label htmlFor="name" className="mb-3">{t('contact.nameContact')}:</label>
                <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="form-control"
                rows="3"
                required
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="email" className="mb-3">{t('contact.emailContact')}:</label>
                <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="form-control"
                rows="3"
                required
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="message" className="mb-3">{t('contact.messageContact')}:</label>
                <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                className="form-control"
                rows="3"
                required
                />
            </div>
            <button type="submit" className='btn bg-warning'>{t('contact.sendContact')}</button>
            </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
