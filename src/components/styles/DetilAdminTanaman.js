import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const DetilAdminTanaman = (props) => {
  return (
    <div className="item_tanaman">
      <Card className="item" style={{ width: "16rem", height: "55vh" }}>
        {/* <div className="itemcard"><img src={props.image} alt={props.nama} /></div> */}
        <img src={props.image} alt={props.nama} />
        {/* <Card.Img variant="top" src={props.image} alt={props.nama} /> */}
        <Card.Body>
          <Card.Title style={{ height: "12vh" }}>
            <h3>{props.nama}</h3>
          </Card.Title>
          <Button variant="warning" className="edit">
            <Link to={"/item/" }>Edit</Link>
          </Button>
          <Button variant="danger">
            <Link to={"/item/" }>Hapus</Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default DetilAdminTanaman;
