import { QRCodeCanvas } from 'qrcode.react'
import React from 'react'

function QRCodeGenerator({batchId}) {
    if (!batchId) return null

    const url = `${window.location.origin}/track/${batchId}`
  return (
    <div className='qr-section'>
        <h4>scan to Track This Batch</h4>
        <QRCodeCanvas
            value={url}
            size={150}
            level={"H"}
            includeMargin = {true}
        />
        <p>Batch ID: {batchId} </p>
      
    </div>
  )
}

export default QRCodeGenerator
