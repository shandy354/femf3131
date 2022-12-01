import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import peta from "../../assets/peta.png";
import toga1 from "../../assets/toga1.jpg";
import Footer from "./Footer";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="wrapper min-vh-80 w-100">
            <Container>
              <Row>
                <Col className="text-white text-center">
                  <h2>
                    Welcome to the database of medical plants and rare in Kediri
                    Ragency
                  </h2>
                </Col>
              </Row>
            </Container>
          </div>
          <div>
            <Row xs={1} md={2} className="g-4" style={{ margin: "10px"  }}>
              <Card border="light" style={{height: "65vh"}}>
                <Card.Img variant="top" src={peta} />
              </Card>
              <Card border="light" style={{height: "65vh"}}>
                <Card.Body>
                  <Card.Text>
                    <p>
                      <h1>Kabupaten Kediri . . </h1>
                      Secara geografis, Kabupaten Kediri terletak antara 111º
                      47’ 05” sampai dengan 112º 18’ 20” Bujur Timur dan 7º 36’
                      12” sampai dengan 8º 0’ 32” Lintang Selatan. Kabupaten
                      Kediri terdiri dari 26 kecamatan Informasi tempat budidaya
                      tanaman obat keluarga (TOGA) dan tanaman herbal yang ada
                      di Kabupaten Kediri telah kami rangkum dalam website ini.
                      Anda bisa menemukan berbagi macam tanaman herbal hanya
                      disini
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card border="light" style={{height: "55vh" , padding: "10px"}}>
                <Card.Img variant="top" src={toga1} />
              </Card>
              <Card border="light" style={{height: "55vh", padding: "10px"}}>
                <Card.Body>
                  <Card.Text>
                    <p>
                      <h1>Tanaman Obat . . </h1>
                      Tanaman obat adalah segala jenis tumbuhan yang diketahui
                      mempunyai khasiat baik dalam membantu memelihara kesehatan
                      maupun pengobatan suatu penyakit. Tumbuhan obat sangat
                      erat kaitannya dengan pengobatan tradisional, karena
                      sebagian besar pendayagunaan tumbuhan obat belum
                      didasarkan pada pengujian klinis laboratorium, melainkan
                      lebih berdasarkan pada pengalaman penggunaan
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
