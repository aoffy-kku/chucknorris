import React from 'react';
import { connect } from 'react-redux';
import {
  compose,
  branch,
  renderComponent,
} from 'recompose';
import {
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
  Container,
  Col,
  Row,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';
import {
  getJoke,
  setFirstname,
  setLastname,
  setCount,
} from './redux/actions';
import './app.css';
import Loader from './Loader';

const enchance = compose(
  connect(
    state => ({
      firstname: state.joke.firstname,
      lastname: state.joke.lastname,
      count: state.joke.count,
      data: state.joke.data,
      loading: state.joke.loading,
    }),
    {
      getJoke,
      setFirstname,
      setLastname,
      setCount,
    },
  ),
  branch(props => props.loading, renderComponent(Loader)),
);

const App = (props) => {
  const {
    firstname,
    lastname,
    count,
    data,
    getJoke,
    setFirstname,
    setLastname,
    setCount,
  } = props;
  return (
    <div style={{ paddingTop: '16px', paddingBottom: '16px' }}>
      <Container>
        <h3>A joke from Chuck Norris</h3>
      </Container>
      <Container>
        <Form onSubmit={(e) => {
            e.preventDefault();
            getJoke(firstname, lastname, count);
          }}
        >
          <Row>
            <Col lg={4} md={4} sm={12} xs={12}>
              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">Firstname</InputGroupAddon>
                  <Input
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={firstname}
                    placeholder="Enter your name..."
                    onChange={(e) => { setFirstname(e.target.value); }}
                    required
                  />
                </InputGroup>
              </FormGroup>
            </Col>
            <Col lg={4} md={4} sm={12} xs={12}>
              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">Lastname</InputGroupAddon>
                  <Input
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={lastname}
                    placeholder="Enter your name..."
                    onChange={(e) => { setLastname(e.target.value); }}
                    required
                  />
                </InputGroup>
              </FormGroup>
            </Col>
            <Col lg={2} md={4} sm={12} xs={12}>
              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">Count</InputGroupAddon>
                  <Input
                    type="number"
                    id="count"
                    name="count"
                    value={count}
                    min={1}
                    onChange={(e) => { setCount(e.target.value); }}
                    required
                  />
                </InputGroup>
              </FormGroup>
            </Col>
            <Col lg={2} md={4} sm={12} xs={12}>
              <FormGroup>
                <Button type="submit" color="primary" block>FETCH</Button>
              </FormGroup>
            </Col>
          </Row>
        </Form>
        <Row>
          <Col>
            <ListGroup>
              {
                data.map(item => (
                  <ListGroupItem
                    key={item.id}
                    className="list-item"
                  >
                    {item.joke}
                  </ListGroupItem>
                  ))
                }
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default enchance(App);
