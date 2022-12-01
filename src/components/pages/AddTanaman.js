import React,{ useState } from 'react'
import {Form, Button, Container} from 'react-bootstrap'
import axios from 'axios'

const AddTanaman = () => {
    const [nama,setNama] = useState("");
    const [kategori,setKategori] = useState("");
    const [lokasi,setLokasi] = useState("");
    const [deskripsi,setDeskripsi] = useState("");
    const [image, setImage] = useState("");
    // const [preview, setPreview] = useState("");

//     const loadImage = (e) => {
//     const image = e.target.Image[0];
//     setImage(image);
//     setPreview(URL.createObjectURL(image));
//   };
    
  return (
    <Container>
        <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Nama Tanaman</Form.Label>
        <Form.Control type="text" placeholder="Nama Tanaman" value={nama} onChange={(e) => setNama(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Kategori Tanaman</Form.Label>
        <Form.Control type="text" placeholder="Kategori Obat / Langka" value={kategori} onChange={(e) => setKategori(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Lokasi</Form.Label>
        <Form.Control type="text" placeholder="lokasi" value={lokasi} onChange={(e) => setLokasi(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)}/>
      </Form.Group>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Gambar</Form.Label>
        <Form.Control type="file" value={image} onChange={(e) => setImage(e.target.value)}/>
      </Form.Group>
      
      {/* {preview ? (
            <div className="image" style={{ width: "12rem"}}>
              <img src={preview} alt="Preview Image" />
            </div>
          ) : (
            ""
          )} */}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>

  )
}

export default AddTanaman