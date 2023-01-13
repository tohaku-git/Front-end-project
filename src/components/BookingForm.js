import {useState} from "react";

const today = new Date().toISOString().substring(0,10);

export const disabled = (form) => {
    return !form.date||!form.time||!form.guests||!form.occasion;
}

const BookingForm = (props) => {
    const [form, setForm] = useState({
        date: today,
        time: props.availableTimes[0],
        guests:'1',
        occasion:'None',
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
                min={today}
                required
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
                required
                onChange={(e) => {setForm({...form, time: e.target.value});}}
                >
                  {props.availableTimes.map(
                    (time, index) =>
                    <option key={index} value={time}>{time}</option>)
                    }
              </select>
              <label htmlFor="guests">Number of guests</label>
              <input
                type="number"
                value={form.guests}
                min="1"
                max="10"
                id="guests"
                required
                onChange={(e) => {setForm({...form, guests: e.target.value})}}
                />
              <label htmlFor="occasion">Occasion</label>
              <select
                id="occasion"
                value={form.occasion}
                required
                onChange={(e) => {setForm({...form, occasion: e.target.value})}}
                >
                  <option value="None">None</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
              </select>
              <button
                area-label="On Click"
                type="submit"
                disabled={disabled(form)}
                >
                Make Your reservation
                </button>
          </form>
        </div>
    )
}
export default BookingForm;