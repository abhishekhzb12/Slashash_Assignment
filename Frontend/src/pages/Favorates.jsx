import axios from "axios";
import { Button, Card, Col, Form, InputGroup, Navbar, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
function Favorates() {
    const [data, setData] = useState([]);
  
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/quote`
        );
        console.log(res);
        setData(res.data);
      } catch (error) { 
        console.log(error);
      }
    };
    useEffect(() => {
      fetchData();
    })
  return (
    <div>
      {data &&
        data.map((item, index) => {
          return (
            <div key={index}>
              <Card>
                <Card.Body>                  
                  <Card.Text>
                    Quote: "{item.quote}"
                  </Card.Text>
                  <Card.Title>Author: {item.author}</Card.Title>
                </Card.Body>
              </Card>
            </div>
          );
        })}
    </div>
  )
}

export default Favorates
