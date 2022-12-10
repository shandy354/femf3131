import React, { Component } from "react";
import { Card, Row } from "react-bootstrap";
import config from "../config/config";
import axios from "axios";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item_tanaman: [],
    };
  }
  componentDidMount() {
    const url = this.props.match.params.url;

    axios
      .get(config.ROOT_URL + "/tanaman/" + url)

      .then((result) => {
        console.log("detil>>", result);
        this.setState({
          item_tanaman: result.data.data,
        });
      });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Row xs={1} md={2} className="g-4">
          <Card border="light" style={{ width: "42rem" }}>
            <Card.Img
              variant="top"
              src={config.ROOT_URL + "/public/" + this.state.item_tanaman.img}
              alt="Gambar tanaman"
            />
          </Card>
          <Card border="light">
            <Card.Body>
              <h3>{this.state.item_tanaman.nama}</h3>
              <h4>{this.state.item_tanaman.kategori}</h4>
              <h4>Lokasi {this.state.item_tanaman.lokasi}</h4>
              <Card.Text>{this.state.item_tanaman.deskripsi}</Card.Text>
              {/* <Card.Img
              style={{ width: "16rem", height: "55vh" }}
              variant="top"
              src={config.ROOT_URL + "/public/" + this.state.item_tanaman.lokasi}
              alt="Gambar tanaman"
            /> */}
            </Card.Body>
          </Card>
        </Row>
      </div>
    );
  }
}

export default Detail;
