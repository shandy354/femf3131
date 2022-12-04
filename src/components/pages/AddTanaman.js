import React,{ useState } from 'react'
import {Form, Button, Container} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import config from '../config/config';

const AddTanaman = () => {
    const [nama,setNama] = useState("");
    const [kategori,setKategori] = useState("");
    const [lokasi,setLokasi] = useState("");
    const [deskripsi,setDeskripsi] = useState("");
    const [img, setImg] = useState("");
    const [msg, setMsg] = useState("");
    const history = useHistory();
    // const [preview, setPreview] = useState("");

//     const loadImage = (e) => {
//     const image = e.target.Image[0];
//     setImage(image);
//     setPreview(URL.createObjectURL(image));
//   };
const saveData= async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nama", nama);
    formData.append("kategori", kategori);
    formData.append("lokasi", lokasi);
    formData.append("deskripsi", deskripsi);
    formData.append("img", img);
    try{
        // await axios.post(config.ROOT_URL + "/tanaman",{
        //     nama:nama,
        //     kategori:kategori,
        //     lokasi:lokasi,
        //     deskripsi:deskripsi,
        //     img:img,

        // });
        await axios.post(config.ROOT_URL + "/tanaman", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
         history("/homeAdmin");
    } catch (error){
        if (error.response){
            setMsg(error.response.data.msg);
        }
    }
    // const formData = new FormData();
    // formData.append("nama", nama);
    // formData.append("kategori", kategori);
    // formData.append("lokasi", lokasi);
    // formData.append("deskripsi", deskripsi);
    // formData.append("img", img);
    // try {
    //   await axios.post(config.ROOT_URL + "/tanaman", formData);
    //   history.push("/homeAdmin");
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <Container>
        <Form onSubmit={saveData}>
        <p className="has-text-centered">{msg}</p>
      <Form.Group className="mb-3" >
        <Form.Label>Nama Tanaman</Form.Label>
        <Form.Control type="text" placeholder="Nama Tanaman" 
        value={nama} onChange={(e) => setNama(e.target.value)}/>
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
        <Form.Control type="file" value={img} onChange={(e) => setImg(e.target.value)}/>
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