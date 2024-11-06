//added import usestate
import { useState } from "react";

export default function Form({ moviesearch }) {
  const [formData, setFormData] = useState("");

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    moviesearch(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData}
        onChange={handleChange}
        placeholder="Search for a movie"
      />
      <button type="submit">Search</button>
    </form>
  );
}