//to check dob between 18-55
const today = new Date();
const maxAge = 55;
const minAge = 18;

const mindate = new Date(
  today.getFullYear() - maxAge,
  today.getMonth(),
  today.getDay()
);
const maxDate = new Date(
  today.getFullYear() - minAge,
  today.getMonth(),
  today.getDate()
);

const inputedDate = document.getElementById("dob");
inputedDate.min = mindate.toISOString().split("T")[0];
inputedDate.max = maxDate.toISOString().split("T")[0];

//to get form data
const form = document.getElementById("formData");
let userEntries = JSON.parse(localStorage.getItem("userEntries")) || [];
form.addEventListener("submit", (e) => {
  const formData = new FormData(form);
  const dob = formData.get("dob");
  const name = formData.get("name");
  const email = formData.get("email");
  const pass = formData.get("password");
  const terms = formData.get("terms");
  let termsBool = terms === "on";

  console.log(dob, name, email, pass, terms);

  let entries = {
    name: name,
    email: email,
    password: pass,
    dob: dob,
    terms: termsBool,
  };

  userEntries.push(entries);

  localStorage.setItem("userEntries", JSON.stringify(userEntries));
  //set to localstorage
  form.reset();
});

const getDataFromlocal = () => {
  let entries = localStorage.getItem("userEntries");
  if (entries) {
    entries = JSON.parse(entries);
  } else {
    return [];
  }
  return entries;
};

const displayTableData = () => {
  const tableCell = document.getElementById("tableData");
  const entries = getDataFromlocal();

  if (entries.length === 0) {
    tableCell.innerHTML = `<tr><td colspan="5" class="border px-4 py-2 text-center">No data available</td></tr>`;
    return;
  }

  const tableEntries = entries
    .map((entry) => {
      const nameCell = `<td class="border px-4 py-2">${entry.name}</td>`;
      const emailCell = `<td class="border px-4 py-2">${entry.email}</td>`;
      const passCell = `<td class="border px-4 py-2">${entry.password}</td>`;
      const dobCell = `<td class="border px-4 py-2">${entry.dob}</td>`;
      const termsCell = `<td class="border px-4 py-2">${
        entry.terms ? "Accepted" : "Rejected"
      }</td>`;

      const row = `<tr>${nameCell}${emailCell}${passCell}${dobCell}${termsCell}</tr>`;
      return row;
    })
    .join("\n");

  tableCell.innerHTML = tableEntries;
};

displayTableData();
