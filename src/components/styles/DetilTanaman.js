import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const DetilTanaman = (props) => {
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
          <Button variant="primary" style={{ width: "10rem" }}>
            <Link to={"/item/" + props.action}>Detil</Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default DetilTanaman;
