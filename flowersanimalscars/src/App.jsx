import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  const [categories, setCategories] = useState([true, true, true])
  const [images, setImages] = useState([
    { id: 0, alt: 'Mak', filename: 'obraz1.jpg', category: 1, downloads: 35 },
    { id: 1, alt: 'Bukiet', filename: 'obraz2.jpg', category: 1, downloads: 43 },
    { id: 2, alt: 'Dalmatyńczyk', filename: 'obraz3.jpg', category: 2, downloads: 2 },
    { id: 3, alt: 'Świnka morska', filename: 'obraz4.jpg', category: 2, downloads: 53 },
    { id: 4, alt: 'Rotwailer', filename: 'obraz5.jpg', category: 2, downloads: 43 },
    { id: 5, alt: 'Audi', filename: 'obraz6.jpg', category: 3, downloads: 11 },
    { id: 6, alt: 'kotki', filename: 'obraz7.jpg', category: 2, downloads: 22 },
    { id: 7, alt: 'Róża', filename: 'obraz8.jpg', category: 1, downloads: 33 },
    { id: 8, alt: 'Świnka morska', filename: 'obraz9.jpg', category: 2, downloads: 123 },
    { id: 9, alt: 'Foksterier', filename: 'obraz10.jpg', category: 2, downloads: 22 },
    { id: 10, alt: 'Szczeniak', filename: 'obraz11.jpg', category: 2, downloads: 12 },
    { id: 11, alt: 'Garbus', filename: 'obraz12.jpg', category: 3, downloads: 321 },
  ]);

  function downloadsHandler(id) {
    [...images][id].downloads++;
    setImages([...images]);
  }

  function categoriesHandler(category) {
    categories[category] = !categories[category];
    setCategories([...categories]);
  }

  function imageGenerage(imageData) {
    if (categories[imageData.category-1])
    return (
        <div key={imageData.id}>
          <img src={`/assets/${imageData.filename}`} alt={imageData.alt} />
          <h4>Liczba pobrań: {imageData.downloads}</h4>
          <button type="button" className="btn btn-success"
                  onClick={() => downloadsHandler(imageData.id)}>Pobierz</button>
        </div>
    )
  }

  return (
      <>
        <h1>Kategorie zdjęć</h1>
        <div className="checkboxes-container">
          <div className="form-check form-switch">
            <label>Kwiaty</label>
            <input type="checkbox" className="form-check-input"
                   onClick={() => categoriesHandler(0)} checked={categories[0]} />
          </div>
          <div className="form-check form-switch">
            <label>Zwierzęta</label>
            <input type="checkbox" className="form-check-input"
                   onClick={() => categoriesHandler(1)} checked={categories[1]} />
          </div>
          <div className="form-check form-switch">
            <label>Samochody</label>
            <input type="checkbox" className="form-check-input"
                   onClick={() => categoriesHandler(2)} checked={categories[2]} />
          </div>
        </div>

        <div className="images-container">
          {
            images.map((image) => imageGenerage(image))
          }
        </div>
      </>
  );
}

export default App;