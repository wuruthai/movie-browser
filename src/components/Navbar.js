import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Navbar, Nav, FormControl, Form, Button } from "react-bootstrap";

export default () => {
  return (
  <Navbar bg="dark" variant="dark" className="d-flex justify-content-between">
    <Navbar.Brand href="#home">BulutMD</Navbar.Brand>
    <Button className="mr-sm-2" href="/">Giriş</Button>
  </Navbar>
  );
}