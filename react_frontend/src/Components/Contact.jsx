import React, { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        myName: "",
        myEmail: "",
        myReason: "",
        myComments: "",
    });

    const [responseMessage, setResponseMessage] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/submit-contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setResponseMessage(`
${data.message}
Here is the data you submitted:
- Name: ${data.receivedData.name}
- Email: ${data.receivedData.email}
- Reason: ${data.receivedData.reason}
- Comments: ${data.receivedData.comments}
`);
                setFormData({
                    myName: "",
                    myEmail: "",
                    myReason: "",
                    myComments: "",
                });
            } else {
                setResponseMessage(data.error || "Something went wrong.");
            }
        } catch (error) {
            console.error("Error:", error);
            setResponseMessage("Failed to submit the form. Try again later.");
        }
    };

    return (
        <main>
            <h2>Contact Fish Creek</h2>
            <p>Fill out the form below to contact Fish Creek. All information is required.</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="myName">Name:</label>
                <input
                    type="text"
                    id="myName"
                    name="myName"
                    value={formData.myName}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="myEmail">E-mail:</label>
                <input
                    type="email"
                    id="myEmail"
                    name="myEmail"
                    value={formData.myEmail}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="myReason">Reason for Contact:</label>
                <select
                    id="myReason"
                    name="myReason"
                    value={formData.myReason}
                    onChange={handleChange}
                    required
                >
                    <option value="" disabled>
                        Select a reason
                    </option>
                    <option value="New Patient">New Patient</option>
                    <option value="Appointment">Appointment</option>
                    <option value="House Call">House Call</option>
                    <option value="Information">Information</option>
                    <option value="Ask the Vet">Ask the Vet</option>
                </select>

                <label htmlFor="myComments">Comments:</label>
                <textarea
                    rows="4"
                    cols="30"
                    id="myComments"
                    name="myComments"
                    value={formData.myComments}
                    onChange={handleChange}
                    required
                ></textarea>

                <input type="submit" value="Send Now" id="mySubmit" name="mySubmit" />
            </form>

            {responseMessage && <p>{responseMessage}</p>}
        </main>
    );
}

export default Contact;
