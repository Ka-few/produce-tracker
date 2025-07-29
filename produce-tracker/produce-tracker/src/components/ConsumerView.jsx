import React, { useState } from 'react'

function ConsumerView({produceList}) {
    const [batchId, setBatchId] = useState('')
    const [produce, setProduce] = useState(null)

    const searchProduce = () => {
        const found = produceList.find(p => p.batchId === batchId)
        setProduce(found || null)
    }
  return (
    <div>
      <h2>Track Your Food</h2>
      <input 
      type="text"
      placeholder="Enter Batch ID"
      value={batchId}
      onChange={(e) => setBatchId(e.target.value)}
      />
      <button onClick={searchProduce}>Search</button>

      {produce ? (
        <div>
            <h3>{produce.name}</h3>
            <p>Batch: {produce.batchId}</p>
            <p>Farmer: {produce.farmerName} from {produce.location}</p>
            <h4>Journey:</h4>
            <ul>
                {produce.logs.map((log, index) => (
                    <li key={index}>
                        {log.stage} at {log.location} on {new Date(log.timestamp).toLocaleDateString()}
                    </li>
                ))}
            </ul>
        </div>
      ) : batchId && <p>No produce found!</p>}
    </div>
  )
}

export default ConsumerView