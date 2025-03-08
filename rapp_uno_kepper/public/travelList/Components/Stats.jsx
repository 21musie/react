export default function Stats({ items }) {
    // If there are no items in the list, display a message encouraging the user to add items
    if (!items.length)
      return (
        <p className="stats">
          <em>Start adding some items to your packing list 🚀</em>
        </p>
      );
  
    // Calculate the total number of items
    const numItems = items.length;

    // Count how many items are marked as packed
    const numPacked = items.filter((item) => item.packed).length;

    // Calculate the percentage of packed items (rounded to the nearest whole number)
    const percentage = Math.round((numPacked / numItems) * 100);
  
    return (
      <footer className="stats">
        <em>
          {/* Display a different message if everything is packed */}
          {percentage === 100
            ? "You got everything! Ready to go ✈️"
            : ` 💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
        </em>
      </footer>
    );
}


///this code is decorated with comments 