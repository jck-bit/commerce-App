import { Button, Container, Stack } from 'react-bootstrap';
import  BudgetCard  from './components/BudgetCard';
import './App.css';

function App() {
  return (
    <Container className='my-4'>
      <Stack direction='horizontal' gap="2" className='mb-4'>
        <h1 className='me-auto'>My budgets</h1>
        <Button variant='primary'>Add Budget</Button>
        <Button variant='outline-primary'>Add Expense</Button>
      </Stack>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:'1 rem',alignItems:"flex-start"}}>
        <BudgetCard 
        name='Entertain'
        gray
        amount="1100"
        max="1500"

        ></BudgetCard>
      </div>
    </Container>
  );
}
export default App;
