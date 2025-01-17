import { render } from '@testing-library/react';
import App from './App';

test('Render "Todo List"', () => {
  const app = render(<App />)
  const heading = app.getByRole('heading')
  expect(heading).toHaveTextContent('Todo List')
})

test('Check if list exists', () => {
  const app = render(<App />)
  const list = app.getByRole('list')
  expect(list).toBeInTheDocument()
})

test('Render input field and add button', () => {
  const app = render(<App />)
  const input = app.getByPlaceholderText('Add to your todo list')
  const button = app.getByText('Add to list')
  expect(input).toBeInTheDocument()
  expect(button).toBeInTheDocument()
})