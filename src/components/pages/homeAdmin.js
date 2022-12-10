import React, { Component } from "react";
import axios from "axios";
import DetilAdminTanaman from "../styles/DetilAdminTanaman";
import config from "../config/config";
import { Link } from "react-router-dom";

export default class HomeAdmin extends Component {
  
  state = {
    item: [],
  };

  getApi = () => {
    axios.get(config.ROOT_URL + "/tanaman/item").then((result) => {
      console.log("produk tnaman >>", result);

      this.setState({
        item: result.data.data,
      });
    });
  };
  componentDidMount() {
    this.getApi();
  }
  render() {
    return (
      <div className="add">
        <Link to={"/add"}>
          <h3>Tambah data Tanaman</h3>
        </Link>
        <div className="Card">
          {this.state.item.map((item) => (
            <DetilAdminTanaman
              key={item.uuid}
              image={config.ROOT_URL + "/public/" + item.img}
              nama={item.nama}
              edit={item.id}
              
            />
          ))}
        </div>
      </div>
    );
  }
}
