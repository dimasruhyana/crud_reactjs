import React, { Component } from 'react';
import Formulir from './Formulir';
import NavbarComponent from './NavbarComponent';
import TableComponent from './TableComponent';

export default class Crud extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            makanan: [],
            nama: "",
            deskripsi: "",
            harga: 0,
            id: ""
        }
    }

    handleChange = e => {
    this.setState({
        [e.target.name] : e.target.value
    })
    }
    
    handleSubmit = e => {
        e.preventDefault();

        if (this.state.id === "") {

            this.setState({
                makanan: [
                    ...this.state.makanan,
                    {
                        id: this.state.makanan.length + 1,
                        nama: this.state.nama,
                        deskripsi: this.state.deskripsi,
                        harga: this.state.harga
                    }
                ]
            })
            this.setState({
                nama: "",
                deskripsi: "",
                harga: 0,
                id: ""
            })

        } else {

            const makananYgSelainDipilih = this.state.makanan
            .filter(makanan => makanan.id !== this.state.id)
                .map(filterMakanan => filterMakanan);
        
                this.setState({
                    makanan: [
                        ...makananYgSelainDipilih,
                        {
                            id: this.state.makanan.length + 1,
                            nama: this.state.nama,
                            deskripsi: this.state.deskripsi,
                            harga: this.state.harga
                        }
                    ]
                })
                this.setState({
                    nama: "",
                    deskripsi: "",
                    harga: 0,
                    id: ""
                })
        }
    }  
    
    editData = (id) => {
        const makananYgDipilih = this.state.makanan
            .filter(makanan => makanan.id === id)
            .map(filterMakanan => filterMakanan);
        
        this.setState({
            nama: makananYgDipilih[0].nama,
            deskripsi: makananYgDipilih[0].deskripsi,
            harga: makananYgDipilih[0].harga,
            id: makananYgDipilih[0].id    
        })
    }

    hapusData = (id) => {
        const makananBaru = this.state.makanan
            .filter(makanan => makanan.id !== id)
            .map(filterMakanan => filterMakanan);
        
        this.setState({
            makanan : makananBaru
        })
    }

    render() {
        return (
            <div>
                <NavbarComponent />
                <TableComponent makanan={this.state.makanan} editData={this.editData} hapusData={this.hapusData} />
                <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}
