import React from 'react'

function Definition({all}) {
  return (
    <>
    {all.map((Val) => {
        return Val.meanings.map((Means) => {
            return Means.definitions.slice(0,1).map((Def, index) => {
                return (
                    <>
                    <li key={index} className="mt-4 list-disc">
                        {Def.definition}
                    </li>
                    </>
                )
            })
        })
    })}
    </>
  )
}

export default Definition