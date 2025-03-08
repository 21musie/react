import { useState } from "react";

// Form component to add new items for the packing list
export default function Form({ onAddItems }) {
  // State to track the description of the new item
  const [description, setDescription] = useState("");
  // State to track the quantity of the new item, defaulting to 1
  const [quantity, setQuantity] = useState(1);

  // Handle form submission event
  function handleSubmit(e) {
    // Prevent the default form submission behavior (page reload)
    e.preventDefault();

    // If no description is entered, exit the function early
    if (!description) return;

    // Create a new item object with description, quantity, packed status, and a unique id
    const newItem = { description, quantity, packed: false, id: Date.now() };

    // Call the provided callback to add the new item
    onAddItems(newItem);

    // Reset the form fields to their initial values
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      
      {/* Dropdown to select the quantity of the item */}
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {/* Generate options from 1 to 20 */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      {/* Text input for the item description */}
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {/* Button to submit the form and add the item */}
      <button>Add</button>
    </form>
  );
}
