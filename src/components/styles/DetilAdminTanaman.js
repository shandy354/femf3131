import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import config from "../config/config";

const DetilAdminTanaman = (props) => {
  const deleteUser = async (id) => {
    try {
      await axios.delete(config.ROOT_URL + "/tanaman/" + id);
      window.location.reload(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="item_tanaman">
      <Card className="item" style={{ width: "16rem", height: "55vh" }}>
        <img src={props.image} alt={props.nama} />

        <Card.Body>
          <Card.Title style={{ height: "12vh" }}>
            <h3>{props.nama}</h3>
          </Card.Title>
          <Button variant="warning" className="edit">
            <Link to={"/edit/" + props.edit}>Edit</Link>
          </Button>
          <Button variant="danger" onClick={() => deleteUser(props.edit)}>
            Hapus
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default DetilAdminTanaman;
