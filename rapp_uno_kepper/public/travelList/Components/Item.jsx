// Item component represents a single item in the packing list
export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      {/* Checkbox to mark the item as packed or unpacked */}
      <input
        type="checkbox"
        value={item.packed} // Checkbox reflects the packed status
        onChange={() => onToggleItem(item.id)} // Calls the function to toggle packed status
      />

      {/* Display item description with strikethrough if packed */}
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>

      {/* Button to remove the item from the list */}
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
