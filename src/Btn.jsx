import React from 'react'
import { useState } from 'react'

function Btn() {
    const [test ,settext] =useState(null)

      const handleClick = () => {
    settext(prev => prev === "Ajouter" ? "Participants" : "Ajouter");}; 

  return (
    <div>
        <button
          type="button"
          onClick={handleClick}
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
        > {test}
        </button>
    </div>
  )
}

export default Btn