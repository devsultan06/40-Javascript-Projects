// Select elements
const form = document.getElementById("grocery-form");
const groceryInput = document.getElementById("grocery-input");
const groceryList = document.getElementById("grocery-list");
const clearAllButton = document.getElementById("clear-all");

// Initial grocery items array
let groceries = [];

// Add item to grocery list
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const itemName = groceryInput.value.trim();
  if (itemName) {
    const newItem = { id: Date.now(), name: itemName };
    groceries.push(newItem);
    groceryInput.value = ""; // Clear the input field
    renderList(); // Update the displayed list
  }
});

// Render the grocery list
function renderList() {
  groceryList.innerHTML = ""; // Clear the list

  groceries.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name}
      <div class="actions">
        <button class="update" data-id="${item.id}">Update</button>
        <button class="delete" data-id="${item.id}">Delete</button>
      </div>
    `;
    groceryList.appendChild(li);
  });

  // Show or hide "Clear All" button based on the list length
  clearAllButton.style.display = groceries.length > 0 ? "block" : "none";

  // Bind click events to update and delete buttons
  document.querySelectorAll(".delete").forEach((btn) => {
    btn.addEventListener("click", function () {
      deleteItem(parseInt(this.getAttribute("data-id")));
    });
  });

  document.querySelectorAll(".update").forEach((btn) => {
    btn.addEventListener("click", function () {
      updateItem(parseInt(this.getAttribute("data-id")));
    });
  });
}

// Delete item from grocery list
function deleteItem(id) {
  groceries = groceries.filter((item) => item.id !== id);
  renderList();
}

// Update item in the grocery list
function updateItem(id) {
  const item = groceries.find((item) => item.id === id);
  const updatedName = prompt("Update the item name:", item.name);
  if (updatedName && updatedName.trim()) {
    item.name = updatedName.trim();
    renderList();
  }
}

// Clear all items from grocery list
clearAllButton.addEventListener("click", () => {
  groceries = [];
  renderList();
});
