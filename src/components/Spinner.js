import React, { Component } from 'react'
import Loding from './Loding.gif'


export class Spinner extends Component {
  render() {
    return (
      <div className='text-center my-4'>
        <img src={Loding} alt="loding" />
      </div>
    )
  }
}

export default Spinner