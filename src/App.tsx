import { useReducer } from "react"
import Form from "./components/Form"
import { activityReducer, initialState } from "./reducers/activity-reducer"
import ActivityList from "./components/ActivityList"

function App() {
    
   const [state, dispatch] = useReducer(activityReducer, initialState)

  return (
    <>
     <header className="bg-purple-700 py-3">
       <div className="max-w-4xl mx-auto flex justify-between">
        <h1 className="text-center text-lg font-bold uppercase text-white">
          Contador de Calorias
        </h1>
       </div>
     </header>

     <section className="bg-purple-500 py-20 px-5">
      <div className="max-w-4xl mx-auto">
        <Form
          dispatch={dispatch}
          state={state}
        />
      </div>
    </section>
    <section className="p-10 mx-auto max-w-4xl">
      <ActivityList
         activities={state.activities}
         dispatch={dispatch}
      />
    </section>
    </>
  )
}

export default App
