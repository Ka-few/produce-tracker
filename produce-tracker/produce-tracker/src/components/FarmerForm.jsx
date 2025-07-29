import React, { useState } from 'react'

function FarmerForm({onAddProduce}) {
    const [produce, setProduce] = useState({name: '', farmerName: '', location: ''})

    const handleSubmit = (e) => {
        e.preventDefault()
        const newProduce = {
            id: Date.now(),
            batchId: `PRD-${Date.now()}`,
            ...produce,
            harvestDate: new Date().toISOString().split("T")[0],
            logs: [
                {stage: "Harvested", location: produce.location, timestamp: new Date().toISOString()}
            ],
            status: 'Harvested'
        }
        onAddProduce(newProduce)
        setProduce({name: '', farmerName: '', location: ''})
    }
  return (
    <form onSubmit={handleSubmit}>
        <h2>Add Produce</h2>
        <input 
        type="text"
        placeholder="Farmer Name"
        value={produce.farmerName}
        onChange={(e) => setProduce({...produce, farmerName: e.target.value})}
        />
        <input 
        type="text"
        placeholder="Produce Name"
        value={produce.name}
        onChange={(e) => setProduce({...produce, name: e.target.value})}
        />
        <input 
        type="text"
        placeholder="Farm Location"
        value={produce.location}
        onChange={(e) => setProduce({...produce, location: e.target.value})}
        />
        <button type='submit'>Save</button>
      
    </form>
  )
}

export default FarmerForm
