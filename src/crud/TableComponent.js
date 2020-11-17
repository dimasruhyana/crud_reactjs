import React from 'react';
import { Table } from 'react-bootstrap';

const TableComponent = ({ makanan,editData,hapusData}) => {
  return (
    <div className="container mt-4">
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Nama</th>
            <th>Deskripsi</th>
            <th>Harga</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {makanan.map((mkn, i) => {
            return (
              <tr className="text-center" key={i}>
                <td>{i+1}</td>
                <td>{mkn.nama}</td>
                <td>{mkn.deskripsi}</td>
                <td>Rp. {mkn.harga}</td>
                <td>
                  <button className="btn btn-warning mr-2" onClick={() => editData(mkn.id)} >Edit</button>
                  <button className="btn btn-danger ml-2" onClick={()=>hapusData(mkn.id)} >Hapus</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default TableComponent;
