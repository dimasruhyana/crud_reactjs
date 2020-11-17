import React, { Component } from 'react'
import Operan from './Operan';

export default class StateProps extends Component {

    constructor(props) {
        super(props);
        this.state = {
            makanan : 'mie ayam'
        }
    } 

    gantiMakanan = makanan_baru => {
        this.setState({
            makanan : makanan_baru
        })
    }

    render() {
        return (
            <div>
                <h1>Belajar State dan Props</h1>
                <h2>{this.state.makanan}</h2>
                <button onClick={() => this.gantiMakanan('Soto')}>Ganti Makanan</button>
                <Operan makanan={this.state.makanan} gantiMakanan={this.gantiMakanan} />
            </div>
        )
    }
}
