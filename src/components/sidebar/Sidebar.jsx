// import { Button } from 'bootstrap/dist/js/bootstrap.bundle'
import React from 'react'
import { Button, Input } from 'reactstrap'
import PollItems from './pollItems'


export default function Sidebar({polls,seletPoll, handleSearch, searchTurm }) {
    let toggleModel = () => {

    }
  return (
      <div className='p-5'>
          <div className="d-flex mb-5">
              <Input type="search" placeholder='Search' value={searchTurm} onChange={(e) => handleSearch(e.value)} />
              <Button
                  color='success'
                  onClick={toggleModel}
                  ms-5
              >
                new
              </Button>
          </div>
          <h3>List of Polls</h3>
          <hr />
          <PollItems/>
    </div>
  )
}
