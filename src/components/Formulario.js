import { useState } from 'react';
import './Proposal.css'; 
export const Formulario = () => {

    const [showBouquet, setShowBouquet] = useState(false);

  const handleOptionChange = (e) => {
    setShowBouquet(e.target.value === 'si');
  };

  const closeBouquet = () => {
    setShowBouquet(false);
    // Resetear el radio button
    document.querySelector('input[type="radio"][value="si"]').checked = false;
  };
return (
    <div className="proposal-container">
      <form>
        <label htmlFor="pregunta">¿Quieres ser mi niña de los mechones rojos?</label>
        <div className='contenedorRadio'>
          <div>
            <input 
              type="radio" 
              id="opcionSi" 
              name="opcion" 
              value="si" 
              onChange={handleOptionChange} 
            />
            <label htmlFor="opcionSi">Sí</label>
          </div>
          <div>
            <input 
              type="radio" 
              id="opcionNo" 
              name="opcion" 
              value="no" 
              onChange={handleOptionChange} 
            />
            <label htmlFor="opcionNo">No</label>
          </div>
        </div>
      </form>

      {showBouquet && (
        <div className="bouquet">
          <button className="close-btn" onClick={closeBouquet}>×</button>
          <div className="roses-container">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="rose"></div>
            ))}
            <div className="ribbon"></div>
          </div>
          <div className="message">Eres mi chamaquita preciosa!!</div>
        </div>
      )}
    </div>
  );
};
