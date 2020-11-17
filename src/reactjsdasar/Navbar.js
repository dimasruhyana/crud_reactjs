import React, { Component } from 'react';

// 1.Class Component
// export default class Navbar extends Component{
//     render() {
//         return (
//             <div>
//                 <h3>Hallo</h3>
//             </div>
//         );
//     }
// }

// 2. Function Component
// export default function Navbar() {
//     return (
//         <div>
//             <h3>Hi</h3>
//         </div>
//     )
// }

// 3. Arrow Function Component
const Navbar = () => {
    return (
        <div>
            <h3>Hallo kamu yg disana</h3>
        </div>
    )
}

export default Navbar;