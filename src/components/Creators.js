import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function MyVerticallyCenteredModal(props) {
  function handlebutton() {
    var first_number = parseInt(document.getElementById("payment")?.value);
    var x = document.getElementById("amount");
    x.textContent = first_number;
    if (isNaN(x.textContent)) {
      x.textContent = "0";
    }
  }
  function handleselect() {
    var sign = document.getElementById("currency");
    var y = document.getElementById("currencySign");
    if (sign.value === "1") {
      y.textContent = "$";
    }
    if (sign.value === "2") {
      y.textContent = "₹";
    }
    if (sign.value === "3") {
      y.textContent = "€";
    }
  }

  return (
    <Modal
      style={{ height: "90%" }}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <img
          style={{ height: "45px", marginRight: "20px" }}
          src={props.img}
          className="rounded float-left"
          alt="..."
        ></img>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Send your love to {props.name} to become a real fan</h4>
        <Form>
          <Form.Group>
            <InputGroup className="mb-3">
              <InputGroup.Text>
                <Form.Select
                  aria-label=""
                  id="currency"
                  onChange={handleselect}
                >
                  <option value="1">$</option>
                  <option value="2">₹</option>
                  <option value="3">€</option>
                </Form.Select>
              </InputGroup.Text>
              <FormControl
                placeholder="2000"
                required
                id="payment"
                onKeyUp={handlebutton}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="floatingTextarea">
            <Form.Control type="text" placeholder="Your name (optional) " />
          </Form.Group>

          <Form.Group className="mb-3" controlId="floatingTextarea2">
            <Form.Control
              type="text"
              placeholder="Say Something Nice..(optional)"
              style={{ height: "100px" }}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            id="txtresult"
            value={0}
            className="d-flex"
          >
            <div style={{ marginRight: "5px" }}>Support </div>

            <div id="currencySign">$</div>
            <div id="amount">0</div>
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Creators(props) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={props.profileimg}
          style={{ height: "250px", cursor: "pointer" }}
          onClick={() => setModalShow(true)}
        />
        <Card.Body>
          <div> {props.id}</div>
          <Card.Title>{props.userName}</Card.Title>
          <Card.Text>{props.profession}</Card.Text>

          <MyVerticallyCenteredModal
            name={props.userName}
            img={props.profileimg}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Card.Body>
      </Card>
    </div>
  );
}

export default Creators;
