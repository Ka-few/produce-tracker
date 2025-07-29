import React from 'react'
import QRCodeGenerator from './QRCodeGenerator'

function ProduceJourney({produce}) {
    if (!produce) return <p>No produce selected!</p>

  return (
    <div className='produce-journey'>
        <h2>Produce Journey</h2>
        <h3>{produce.name} (Batch: {produce.batchId})</h3>
        <p><strong>Status:</strong> {produce.status}</p>
        <ul>
            {produce.logs.map((log, index) => (
                <li key={index} className='produce-log'>
                    <p><strong>Stage:</strong> {log.stage}</p>
                    <p><strong>Location:</strong> {log.location}</p>
                    <p><strong>Date:</strong> {new Date(log.timestamp).toLocaleDateString()}</p>
                </li>
            ))}
        </ul>
      <QRCodeGenerator batchId={produce.batchId} />
    </div>
  )
}

export default ProduceJourney
