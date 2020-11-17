import React from 'react'

const Map = () => {

    const makanan = [
        {
            nama: 'Bakso',
            harga: 10000
        },
        {
            nama: 'Kebab',
            harga: 15000
        },
        {
            nama: 'Martabak',
            harga: 25000
        },
        {
            nama: 'Mie Ayam',
            harga: 8000
        },
        {
            nama: 'Seblak',
            harga: 5000
        }
    ];

    const totalBayar = makanan.reduce((total, makanan) => total + makanan.harga,0);

    return (
        <div>
            <h2>Daftar Makanan :</h2>
            <ul>
                {makanan.map((mkn, i) => <li>{i+1}. {mkn.nama}</li>)};
            </ul>

            <h2>Filter makanan yang kurang sama dengan Rp.10000</h2>
            <ul>
                {makanan
                    .filter(mkn => mkn.harga <= 10000)
                    .map((mkn,i) => (
                        <li>{i+1}. {mkn.nama} - {mkn.harga}</li>
                    ))}
            </ul>

            <h3>Total harga : Rp.{totalBayar}</h3>
        </div>
    );
}

export default Map;
