import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import config from "../config/config";
import axios from "axios";

const EditAdmin = () => {

  const [nama, setNama] = useState("");
  const [kategori, setKategori] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [img, setImg] = useState("");
  const [msg, setMsg] = useState("");
  const history = useHistory();
  const { id } = useParams();


  useEffect(() => {
    const getTanamanById = async () => {
      
      try {
        const response = await axios.get(config.ROOT_URL + `/tanamandetil/${id}`);
        console.log("produk tnaman >>",response);
        setNama(response.data.nama);
        setKategori(response.data.kategori);
        setLokasi(response.data.lokasi);
        setDeskripsi(response.data.deskripsi);
        setImg(response.data.img); 
       
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getTanamanById();
    
  }, [id]);
  
   const loadImage = (e) => {
    const image = e.target.files[0];
    setImg(image);
  };


  const updateTanaman = async (e) => {
    e.preventDefault();
    try {
      await axios.put(config.ROOT_URL + `/tanamanup/${id}`, {
        nama: nama,
        kategori: kategori,
        lokasi: lokasi,
        deskripsi: deskripsi,
        img: img,
      });
      history.push("/homeAdmin");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <Container>
      <Form onSubmit={updateTanaman}>
        <p className="has-text-centered">{msg}</p>
        <Form.Group className="mb-3">
          <Form.Label>Nama Tanaman</Form.Label>
          <Form.Control
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
          {/* {this.state.item_tanaman.nama} */}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Kategori Tanaman</Form.Label>
          <Form.Control
            type="text"
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Lokasi</Form.Label>
          <Form.Control
            type="text"
            value={lokasi}
            onChange={(e) => setLokasi(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control
            as="textarea"
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Gambar</Form.Label>
          <Form.Control type="file" accept="image/*" onChange={loadImage} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default EditAdmin;
