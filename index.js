// Set the minimum and maximum date of birth (between 18 and 55 years old)
const today = new Date();
const maxAge = 55;
const minAge = 18;

const mindate = new Date(
  today.getFullYear() - maxAge,
  today.getMonth(),
  today.getDate()
);
const maxDate = new Date(
  today.getFullYear() - minAge,
  today.getMonth(),
  today.getDate()
);

// Set the min and max attributes for the date input (DOB field)
const dobInput = document.getElementById("dob");
dobInput.min = mindate.toISOString().split("T")[0];
dobInput.max = maxDate.toISOString().split("T")[0];

// Retrieve entries from localStorage
const retieveEntries = () => {
  let entries = localStorage.getItem("userEntries");
  if (entries) {
    entries = JSON.parse(entries);
  } else {
    entries = [];
  }
  return entries;
};

// Display entries in the table format
const displayEntries = () => {
  let entries = retieveEntries();

  const tableEntries = entries
    .map((entry) => {
      const nameCell = `<td class='border px-4 py-2'>${entry.name}</td>`;
      const emailCell = `<td class='border px-4 py-2'>${entry.email}</td>`;
      const passwordCell = `<td class='border px-4 py-2'>${entry.password}</td>`;
      const dobCell = `<td class='border px-4 py-2'>${entry.dob}</td>`;
      const acceptTermsCell = `<td class='border px-4 py-2'>${
        entry.terms ? "true" : "false"
      }</td>`; // Shows true/false

      const row = `<tr>${nameCell}${emailCell}${passwordCell}${dobCell}${acceptTermsCell}</tr>`;
      return row;
    })
    .join("\n");

  const table = `
        <table class='table-auto w-full'>
            <tr>
                <th class='px-4 py-2'>Name</th>
                <th class='px-4 py-2'>Email</th>
                <th class='px-4 py-2'>Password</th>
                <th class='px-4 py-2'>Dob</th>
                <th class='px-4 py-2'>Accepted terms?</th>
            </tr>
            ${tableEntries}
        </table>
    `;

  let details = document.getElementById("user-entries");
  details.innerHTML = table;
};

// Handle form submission and display entries
const form = document.getElementById("formData");
let userEntries = JSON.parse(localStorage.getItem("userEntries")) || [];
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page reload
  const formData = new FormData(form);
  const dob = formData.get("dob");
  const name = formData.get("name");
  const email = formData.get("email");
  const pass = formData.get("password");
  const terms = formData.get("terms");
  let termsBool = terms === "on" ? true : false;

  let entry = {
    name: name,
    email: email,
    password: pass,
    dob: dob,
    terms: termsBool,
  };

  userEntries.push(entry);
  localStorage.setItem("userEntries", JSON.stringify(userEntries));
  displayEntries(); // Update the table immediately
  form.reset();
});

// Display the data on page load
displayEntries();
