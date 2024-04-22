import React, { useEffect, useState } from "react";

const Form = () => {

  const [form, setForm] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({ name: "", email: "" });

  const handleInputChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    setErrors((errors) => {
      let newErrors = { ...errors };
  
      if (form.name.length < 5) { // Changed from 3 to 5
        newErrors.name = "Name must be at least 5 characters long";
      } else {
        newErrors.name = "";
      }
  
      if (!form.email.includes("@")) {
        newErrors.email = "Email must be valid";
      } else {
        newErrors.email = "";
      }
  
      return newErrors;
    });
  }, [form]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!errors.name && !errors.email) {
      console.log(form);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        {errors.name && <p>{errors.name}</p>}
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        {errors.email && <p>{errors.email}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;