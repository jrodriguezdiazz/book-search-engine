import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import './Header.css';
import './content.css';
import './article.css';

export const Header = () => {
  const [photos, setPhotos] = useState([]);
  const open = (url: string) => window.open(url);

  return (
    <div>
      <header>
        <Formik
          initialValues={{
            search: '',
          }}
          onSubmit={async (values) => {
            const response = await fetch(
              `https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`,
              {
                headers: {
                  Authorization:
                    'Client-ID ra6ohi7-gQAqWpEOHwIY3c9qFV9LCj1NhZLKTPRfMH0',
                },
              }
            );
            const data = await response.json();
            setPhotos(data.results);
          }}
        >
          <Form>
            <Field name="search" />
          </Form>
        </Formik>
      </header>
      <div className="container">
        <div className="center">
          {photos.map(
            ({
              id,
              links: { html },
              urls: { regular },
              description,
              alt_description,
            }) => (
              <article key={id} onClick={() => open(html)}>
                <img src={regular} alt={alt_description} />
                <p>{[description, alt_description].join(' ')}</p>
              </article>
            )
          )}
        </div>
      </div>
    </div>
  );
};

// {photos.map(() => {
//   return (
//   )}}
