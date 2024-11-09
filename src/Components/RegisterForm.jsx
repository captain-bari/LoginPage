import React, { useState } from "react";
import './Registration.css';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form is Submitting", formData);
    };

    return (
        <section>
            {[...Array(200)].map((_, index) => (
                <span key={index}></span>
            ))}

            <div className="signup">
                <div className="content">
                    <h2>Registration Form </h2>
                    <form onSubmit={handleSubmit} className="form">
                        <div className="inputBx">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                            <i>Name</i>
                        </div>
                        <div className="inputBx">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                            <i>Email</i>
                        </div>
                        <div className="inputBx">
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                            />
                            <i>Password</i>
                        </div>
                        <div className="inputBx">
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default RegisterForm;

