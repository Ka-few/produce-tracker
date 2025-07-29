import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from 'react-router-dom'

import NavBar from './components/NavBar'
import FarmerForm from './components/FarmerForm'
import ConsumerView from './components/ConsumerView'
import ProduceJourney from './components/ProduceJourney'
import ProduceTracker from './components/ProduceTracker'

import './App.css'

function TrackPage({ produceList }) {
  const { batchId } = useParams()
  const produce = produceList.find(p => p.batchId === batchId)

  if (!produce) return <p>Produce with Batch ID "{batchId}" not found.</p>

  return (
    <div className="track-page">
      <h2>Tracking for Batch: {batchId}</h2>
      <ProduceJourney produce={produce} />
    </div>
  )
}

function App() {
  const [produceList, setProduceList] = useState([])
  const [selectedProduce, setSelectedProduce] = useState(null)

  const handleAddProduce = (newProduce) => {
    setProduceList([...produceList, newProduce])
    setSelectedProduce(newProduce)
  }

  const handleUpdateProduce = (updatedProduce) => {
    const updatedList = produceList.map((p) =>
      p.id === updatedProduce.id ? updatedProduce : p
    )
    setProduceList(updatedList)
    setSelectedProduce(updatedProduce)
  }

  return (
    <Router>
      <NavBar />
      <div className="app">
        <Routes>
          <Route
            path="/farmer"
            element={
              <>
                <FarmerForm onAddProduce={handleAddProduce} />
                {selectedProduce && (
                  <ProduceTracker
                    produce={selectedProduce}
                    onUpdate={handleUpdateProduce}
                  />
                )}
              </>
            }
          />
          <Route
            path="/consumer"
            element={
              <>
                <ConsumerView
                  produceList={produceList}
                  onSelectProduce={setSelectedProduce}
                />
                {selectedProduce && (
                  <ProduceJourney produce={selectedProduce} />
                )}
              </>
            }
          />
          <Route
            path="/track/:batchId"
            element={<TrackPage produceList={produceList} />}
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
