import React from 'react'

const Transaction = ({status}) => {
  return (
    <div className='transaction'>
        <div className='status' style={{backgroundColor: status === 'credit' ? 'green' : 'red'}}>
            
        </div>

        <div className='details'>

            <h6>
            E-CHANNELS
            </h6>

            <p>
                00000152626262736637662626736636
            </p>

        </div>

        <p className='value' style={{color: status === 'credit' ? 'green' : 'red'}}>
           NGN -1,400.00
        </p>

    </div>
  )
}

export default Transaction