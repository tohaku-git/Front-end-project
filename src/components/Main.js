import {useReducer} from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
import fetchAPI from '../fetchAPI';
import submitAPI from '../submitAPI';
import HomePage from './HomePage';
import BookingForm from './BookingForm';
import ConfirmedBooking from "./ConfirmedBooking";

const updateTimes = (state, action) => {
    if (action.type === "change") {
        const date = new Date(action.date);
        return fetchAPI(date);
        }
    }

const initializeTimes = () => {
    const now = new Date();
    return fetchAPI(now);
}


const Main = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    const navigate = useNavigate();

    const submitForm = (formData) => {
        const isConfirmed = submitAPI(formData);
        if (isConfirmed) {
            navigate("/confirmation/");
        }
    }

    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route
                  path="/booking/"
                  element={
                    <BookingForm
                      availableTimes={availableTimes}
                      dispatch={dispatch}
                      submitForm={submitForm}
                      />
                    }
                  />
                <Route path="/confirmation/" element={<ConfirmedBooking />}/>
            </Routes>
        </main>
    )
}
export default Main;