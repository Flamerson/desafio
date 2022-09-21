import Button from '@mui/material/Button';
import styled from 'styled-components';

const Title = styled.h1`
  color: #f00;
`;

function App() {
  return (
    <div className="App">
      <Button variant="contained">Hello world!</Button>
      <Title>Hello wold !</Title>
    </div>
  );
}

export default App;
