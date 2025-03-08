import { useState } from "react";
import Item from "./Item";

// PackingList component manages and displays a list of items
export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  // State to manage sorting preference (default is input order)
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  // If sorting by input order, keep items in their original order
  if (sortBy === "input") sortedItems = items;

  // If sorting by description, create a copy and sort alphabetically
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  // If sorting by packed status, sort so that unpacked items come first
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      {/* Render the sorted list of items */}
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>

      {/* Sorting and Clear List Actions */}
      <div className="actions">
        {/* Dropdown to select sorting method */}
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>

        {/* Button to clear the entire list */}
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}
