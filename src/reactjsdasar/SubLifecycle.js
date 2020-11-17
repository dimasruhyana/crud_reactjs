import React, { Component } from 'react'

export default class SubLifecycle extends Component {
   
    componentWillUnmount() {
        this.promps.ubahMakanan('Sate');
   }
   
    render() {
        return (
            <div>
                <h2>Component Sub Lifecycle</h2>
            </div>
        )
    }
}
