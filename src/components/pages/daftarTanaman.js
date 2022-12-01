import React, { Component } from 'react'
import axios from 'axios';
import DetilTanaman from '../styles/DetilTanaman';
import config from '../config/config';

export default class daftarTanaman extends Component {
  state = {
    item: [],
  };
  // axios.get(config.ROOT_URL + "/tanaman/item")
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
      <div className="Card">
      {this.state.item.map((item) => (
        <DetilTanaman
          key={item.id}
          image={config.ROOT_URL +"/public/"+item.img}
          nama={item.nama}
          //   kategori={item.kategori}
          action={item.url}
        />
      ))}
    </div>
    )
  }
}
