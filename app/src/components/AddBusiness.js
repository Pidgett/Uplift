import React, { Fragment, useState, useRef } from 'react';




const AddContact = () => {

    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [lift, setLift] = useState("");

    const [formValidity, setFormValidity] = useState({});

    const onSubmitListing = async (e) => {
        e.preventDefault();

        const isEmpty = (currentValue) => currentValue === "";
            
            //console.log(body.every(isEmpty));
            const body = { name, city, country, lift };
                const updatedValidity = {

                }

            Object.entries(body).forEach(([key, value]) => {
                if(isEmpty(value)){
                    updatedValidity[key] = "invalid";
                }


            })
            console.log(updatedValidity);


        if(Object.keys(formValidity).length !== 0) {
            return;
        }

        try {

            
            
            console.log({ firstname, lastname })
            const response = await fetch("http://localhost:3000/businesses", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            console.log({response});
        } catch (error) {
            console.error(error.message);
        }
        debugger;
        window.location = "/";

    };

    return (
        <Fragment>

            <h4>Add Listing</h4>
            <br></br>
            <form className="new">


                <label htmlFor="name" className="label">
                    <input type="text"
                        placeholder="Business Name*"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                </label>





                <label htmlFor="city" className="label">
                    <input type="text"
                        placeholder="City*"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        required
                    />
                </label><label htmlFor="Country" className="label">
                    <input type="text"
                        placeholder="Country*"
                        value={country}
                        onChange={e => setCountry(e.target.value)}
                        required
                    />
                </label>


                <label htmlFor="lift" className="label">
                    <input type="text"
                        placeholder="Lift*"
                        value={lift}
                        onChange={e => setLift(e.target.value)}
                        required
                    />
                </label>

                <div className="Submit">
                    <label htmlFor="Submit" className="label">
                        <button
                            className="Submit"
                            onClick={onSubmitListing}
                        >
                            Submit
                </button>
                    </label>
                </div>
            </form>
        </Fragment>

    )
}
export default AddListing;