import React from "react";
import "../styles/fishcreek.css";

function Services() {
    return (
        <main>
            <h2>Professional Services</h2>
            <table>
                <tr>
                    <th>Medical Services</th>
                    <td>Our facility has state-of-the-art equipment and technology.</td>
                </tr>
                <tr>
                    <th>Surgical Services</th>
                    <td>We offer a full range of surgical procedures including orthopedics and emergency surgeries.</td>
                </tr>
                <tr>
                    <th>Dental Care</th>
                    <td>A dental exam can determine whether your pet needs preventive dental care such as scaling and polishing.</td>
                </tr>
                <tr>
                    <th>House Calls</th>
                    <td>The elderly, physically challenged, and multiple pet households often find our in-home veterinary service helpful and convenient.</td>
                </tr>
                <tr>
                    <th>Emergencies</th>
                    <td>You can reach us at any time. At least one of our doctors is on call every day and night.</td>
                </tr>
            </table>
        </main>
    );
}

export default Services;
