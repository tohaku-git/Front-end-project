import {useState} from "react";

const BookingForm = (props) => {
    const [form, setForm] = useState({
        date:'',
        time:'',
        guests:'',
        occasion:'',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(form);
        setForm({
            date:'',
            time:'',
            guests:'',
            occasion:'',
        });
    }

    return (
        <div id="bookingPageContainer">
          <h1>Book Now</h1>
          <form
            id="bookingFormContainer"
            onSubmit={handleSubmit}
            >
              <label htmlFor="res-date">Choose date</label>
              <input
                type="date"
                id="res-date"
                value={form.date}
                onChange={
                  (e) => {
                    setForm({...form, date: e.target.value});
                    props.dispatch({
                      type: "change",
                      date: e.target.value,
                    });
                  }}
                />
              <label htmlFor="res-time">Choose time</label>
              <select
                id="res-time"
                value={form.time}
                onChange={(e) => {
                  setForm({...form, time: e.target.value});
                }}
                >
                  {props.availableTimes.map((time, index) => <option key={index} >{time}</option>)}
              </select>
              <label htmlFor="guests">Number of guests</label>
              <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                onChange={(e) => {setForm({...form, guests: e.target.value})}}
                />
              <label htmlFor="occasion">Occasion</label>
              <select
                id="occasion"
                onChange={(e) => {setForm({...form, occasion: e.target.value})}}
                >
                  <option>Birthday</option>
                  <option>Anniversary</option>
              </select>
              <input type="submit" value="Make Your reservation"/>
          </form>
        </div>
    )
}
export default BookingForm;