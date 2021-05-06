import React, {useState} from "react";

const QuickSearch = () => {

    const [businessType, setBusinessType] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [location, setLocation] = useState("");




    const [formValidity, setFormValidity] = useState({});
    const onSubmitListing = async (e) => {
        e.preventDefault();

        const isEmpty = (currentValue) => currentValue === "";
            
            //console.log(body.every(isEmpty));
            const body = { businessType, location};
                const updatedValidity = {

                }

            Object.entries(body).forEach(([key, value]) => {
                if(isEmpty(value) === ""){
                    updatedValidity[key] = "invalid";
                }


            })
            console.log(updatedValidity);


        if(Object.keys(formValidity).length !== 0) {
            return;
        }

        try {

            
            
            console.log({ businessType, city })
            const response = await fetch("http://localhost:3000/businesses", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            console.log({response});
        } catch (error) {
            console.error(error.message);
        }
    return(
        {updatedValidity}
    )
    }

    return(
        <form>
        <h4>Select *Business Type</h4>
            <select name="Business Type" id="businessType">
                <option value="Hotels">Hotels</option>
                <option value="Museums">Museums</option>
                <option value="Optometry">Optometry</option>
                <option value="Dentistry">Dentistry</option>
                <option value="National Parks">National Parks</option>
                <option value="Beaches">Beaches</option>
            </select>
        </form>
    )

};

export default QuickSearch;