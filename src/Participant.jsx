import React from 'react'
import { FormulairAjouter } from './FormulairAjouter'

export function Participant(nom ,equipe ,niveau ,id) {
  return (
    <div>
        <div
                    key={id}
                    className="flex items-center gap-3 p-3 rounded-lg"
                  >
                    <div>
                      <p className="font-semibold">{nom}</p>
                      <p className="font-semibold">{equipe}</p>
                      <p className="font-semibold">{niveau}</p>
                    </div>
                  </div>

      
    </div>
    
  )
}


export default Participant
