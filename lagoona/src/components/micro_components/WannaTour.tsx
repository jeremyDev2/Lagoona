import React, { useState } from "react";
import YellowButton from "./YellowButton"; 


interface ToureFormState {
    city:           string
    country:        string
    date:           string
    nights:         number
    tourists_count: number
}

const TourForm: React.FC = () => {
    const [FormData, setFormData] = useState<ToureFormState>({
        city:           '',
        country:        '',
        date:           '',
        nights:         6,
        tourists_count: 1
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(({ ...FormData }) => ({ ...FormData, [name]: value }));
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', FormData);
    }

    return (
        <section id="select-tour">
            <div className="tour">
                <h2 className="wanna-tour-h2">Take the tour</h2>
                <div className="filling-form flex">
                    <form className="form-style flex" onSubmit={handleSubmit}>
                        <div className="label-style flex">
                            <label className="label-word" htmlFor="city">Departure</label>
                            <select className="no-border" name="city" id="City" value={FormData.city} onChange={handleChange}>
                                <option value="New-York">New-York</option>
                            </select>
                        </div>
                        <div className="label-style flex">
                            <label className="label-word" htmlFor="country">Country</label>
                            <select className="no-border" name="country" id="Country" value={FormData.country} onChange={handleChange}>
                                <option value="US">US</option>
                            </select>
                        </div>
                        <div className="label-style flex">
                            <label className="label-word" htmlFor="date">Date</label>
                            <input className="input-info" id="Date" type="date" name="date" value={FormData.date} min="2023-01-01" max="2023-12-31" onChange={handleChange} />
                        </div>
                        <div className="label-style-night flex">
                            <label className="label-word" htmlFor="nights">nights</label>
                            <input className="input-info" id="Night" type="number" name="nights" value={FormData.nights} min="1" max="30" onChange={handleChange} />
                        </div>
                        <div className="label-style-tourist flex">
                            <label className="label-word" htmlFor="tourists">Tourist</label>
                            <input className="input-info" id="Tourists" type="number" name="tourists" value={FormData.tourists_count} min="1" max="10" onChange={handleChange} />
                        </div>
                        <YellowButton className="navbutton-wanna-tour" type="submit" url="#" text="Search"/>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default TourForm;