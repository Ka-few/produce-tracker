import React, { useState } from 'react'

function ProduceTracker({produce, onUpdate}) {
    const [stage, setStage] = useState("")
    const [location, setLocation] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!stage || !location) return
        
        const newLog = {
            stage,
            location,
            timestamp: new Date().toISOString(),
        }
        const updatedProduce = {
            ...produce,
            logs: [...produce.logs, newLog],
            status: stage,
        }
        onUpdate(updatedProduce)
        setStage("")
        setLocation("")
    }
    if (!produce) return <P>Select a produce batch to track.</P>
  return (
    <div className='produce-tracker'>
        <h3>Update Produce Journey (Batch: {produce.batchId})</h3>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="Stage (e.g Transported, Retail)"
            value={stage}
            onChange={(e) => setStage(e.target.value)}
            />
            <input 
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            />
            <button type="submit">Add Log</button>
        </form>
      
    </div>
  )
}

export default ProduceTracker
