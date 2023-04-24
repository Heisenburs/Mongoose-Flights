import React from 'react'

const heading = {
    textAlign: 'center'
}

function Index(props) {
    console.log(props);
  return (
    <>
    <h2 style={heading}>Flights</h2>
    <ul>
        {
            flights.map((flight, i) => {
                return (
                    <li>
                        <a>flight airline</a>
                        <a>flight no.</a>
                    </li>
                )
            })
        }
    </ul>
    </>
  )
}

export default Index