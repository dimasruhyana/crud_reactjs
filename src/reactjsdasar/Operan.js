import React, { Component } from 'react'

export default class Operan extends Component {
    render() {
        const {makanan:mkn, gantiMakanan} = this.props;
        return (
            <div>
                <h2>{mkn}</h2>
               <button onClick={()=>gantiMakanan('soto')}>Ganti Makanan</button>
            </div>
        )
    }
}
