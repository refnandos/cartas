import React from 'react'

export const Formulario = () => {
return (
    <div className='contenedorFormulario'>
        <form>
            <label htmlFor="pregunta">¿quieres ser mi niña de los mechones rojos?</label>
            <div className='contenedorRadio'>
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
