import React from 'react';

// var
// var harga = 10000;
// if (true) {
//     var harga = 20000;
// }

// let
let harga = 2000;
if (true) {
    let harga = 3000;
}

// const
// const harga = 1000;
// harga = 1500;

const Variabel = () => {
    return (
        <div>
            <h1>Belajar Variabel</h1>
            <p>Harga : {harga}</p>
        </div>
    )
}

export default Variabel;


