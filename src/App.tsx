/* eslint-disable react/jsx-no-undef */
import React from 'react';
import './App.css';
import { Container, Form, InputGroup, Table } from 'react-bootstrap';

type DataItem = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
};

const data: DataItem[] = [
  { first_name: 'John', last_name: 'Doe', email: 'john.doe@example.com', phone: '123-456-7890' },
  { first_name: 'Jane', last_name: 'Smith', email: 'jane.smith@example.com', phone: '987-654-3210' },
  { first_name: 'Alice', last_name: 'Johnson', email: 'alice.johnson@example.com', phone: '555-555-5555' },
  // Add more sample data as needed
];

function App() {
  const [search, setSearch] = React.useState<string>('');
  return (
    <div className='bg-dark'>
      {/* eslint-disable-next-line react/jsx-no-undef */}
      <Container>
        <h1 className='text-center mt-4 text-light'>Filter search input</h1>
        <Form>
          <InputGroup className='my-3'>

            {/* onChange for search */}
            <Form.Control
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
              placeholder='Type to search'
            />
          </InputGroup>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((item: DataItem) => {
                return search.toLowerCase() === ''
                  ? true
                  : item.first_name.toLowerCase().includes(search.toLowerCase());
              })
              .map((item: DataItem, index: number) => (
                <tr key={index}>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
