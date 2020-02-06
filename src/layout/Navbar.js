import React from "react";
import { Navbar, Button } from "react-bootstrap";

export default () => {
  return (
  <Navbar bg="dark" variant="dark" className="d-flex justify-content-between">
    <Navbar.Brand href="/">Movie Browser</Navbar.Brand>
    <Button className="mr-sm-2" href="/">Giriş</Button>
  </Navbar>
  );
}