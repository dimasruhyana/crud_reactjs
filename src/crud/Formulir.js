import React from 'react';
import { Form,Button,Row,Col } from 'react-bootstrap';

const Formulir = ({nama,deskripsi,harga,handleChange,handleSubmit,id}) => {
    return (
        <div className="container mt-3">
            <Row>
                <Col>
                    <h4>{id?"Ubah Data":"Tambah Data"}</h4>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="nama">
                        <Form.Label>Nama Makanan</Form.Label>
                        <Form.Control type="text" name="nama" required autoComplete="off" value={nama} onChange={e=>handleChange(e)} />
                     </Form.Group>
                     <Form.Group controlId="deskripsi">
                         <Form.Label>Deskripsi</Form.Label>
                            <Form.Control as="textarea" rows={3} required name="deskripsi" value={deskripsi} onChange={e=>handleChange(e)} />
                    </Form.Group>
                    <Form.Group controlId="harga">
                        <Form.Label>Harga</Form.Label>
                        <Form.Control type="number" name="harga" required value={harga} onChange={e=>handleChange(e)} />
                    </Form.Group>
                    <Button variant="success" type="submit">
                        Submit
                    </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default Formulir;
