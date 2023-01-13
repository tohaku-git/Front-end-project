import { render, screen } from "@testing-library/react";
import BookingForm, {disabled} from './components/BookingForm';
import {initializeTimes, updateTimes} from './components/Main';
import fetchAPI from "./fetchAPI";

test('Renders the BookingForm heading', () => {
  render(<BookingForm availableTimes={[]} />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

test('Test the initializeTimes function', () => {
  const initializedTimes = initializeTimes();
  expect(initializedTimes).toEqual(fetchAPI(new Date()));
});

test('Test the updateTimes function', () => {
  const state = [];
  const testDate = new Date("2021-01-09");
  const action = {
    type: "change",
    date: testDate,
  };
  const updatedTimes = updateTimes(state, action);
  expect(updatedTimes).toEqual(fetchAPI(testDate));
});

test('Test the HTML input attributes', () => {
  render(<BookingForm availableTimes={[]} />);
  const dateInput = screen.getByLabelText("Choose date");
  expect(dateInput).toHaveAttribute("required");
  expect(dateInput).toHaveAttribute("type","date");
  expect(dateInput).toHaveAttribute("min");

  const timeInput = screen.getByLabelText("Choose time");
  expect(timeInput).toHaveAttribute("required");

  const guestsInput = screen.getByLabelText("Number of guests");
  expect(guestsInput).toHaveAttribute("required");
  expect(guestsInput).toHaveAttribute("type","number");
  expect(guestsInput).toHaveAttribute("min","1");

  const occasionInput = screen.getByLabelText("Occasion");
  expect(occasionInput).toHaveAttribute("required");
})

test('Test the disabled function', () => {
  const form1 = {
    date: "2023-01-10",
    time: "17:00",
    guests: "1",
    occasion: "None",
  };
  expect(disabled(form1)).toEqual(false);

  const form2 = {
    date: "",
    time: "17:00",
    guests: "1",
    occasion: "None",
  };
  expect(disabled(form2)).toEqual(true);

  const form3 = {
    date: "2023-01-10",
    time: "",
    guests: "1",
    occasion: "None",
  };
  expect(disabled(form3)).toEqual(true);

  const form4 = {
    date: "2023-01-10",
    time: "17:00",
    guests: "",
    occasion: "None",
  };
  expect(disabled(form4)).toEqual(true);

  const form5 = {
    date: "2023-01-10",
    time: "17:00",
    guests: "1",
    occasion: "",
  };
  expect(disabled(form5)).toEqual(true);
});