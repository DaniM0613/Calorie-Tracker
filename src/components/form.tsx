 import { categories } from "./data/categories"
// Creando el formulario para calcular las calorias. 

export default function form() {
  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg">
       <div className="grid grid-cols-1 gap-3">
         <label htmlFor="category" className="font-bold">Categoria: </label>
          <select
            className="border border-slate-300 p-2 rounded-lg w-full bg-white"
            id="category"
          >
            {categories.map(category => (
              <option
                key={category.id}
                value={category.id}
              >
                {category.name}
              </option>
            )) }
          </select>
       </div>

       <div className="grid grid-cols-1 gap-3">
         <label htmlFor="category" className="activity font-bold">Actividad</label>
          <input
            id="activity"
            type="text"
            className="border border-salte-300 p-2 rounded-lg"
            placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicicleta"
          />
       </div>

       <div className="grid grid-cols-1 gap-3">
         <label htmlFor="calorias" className="font-bold">Calorias: </label>
         <input 
           id="calorias"
           type="number"
           className="border border-slate-300 p-2 rounded-lg"
           placeholder="Calorias. ej. 300 o 500"
         />
      </div>

      <input
         type="submit"
         className="bg-purple-900 however:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer"
         value='Guardar Comida o Guardar Ejercicio '
      />

    </form>
  )
}
