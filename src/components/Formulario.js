import React from 'react'

export const Formulario = () => {
return (
    <div>
        <form>
            <label htmlFor="pregunta">¿Cuál es tu opción favorita?</label>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <div>
                    <input type="radio" id="opcionSi" name="opcion" value="si" />
                    <label htmlFor="opcionSi">Sí</label>
                </div>
                <div>
                    <input type="radio" id="opcionNo" name="opcion" value="no" />
                    <label htmlFor="opcionNo">No</label>
                </div>
            </div>
        </form>
    </div>
)
}
