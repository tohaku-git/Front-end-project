import { render, screen } from "@testing-library/react";
import BookingForm from './components/BookingForm';

test('Renders the BookingForm heading', () => {
  render(<BookingForm availableTimes={[]} dispatch={jest.fn()}/>);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

