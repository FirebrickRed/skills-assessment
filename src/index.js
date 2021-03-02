let contactslistDOM = document.getElementById('contactsList');

contacts.forEach(person => {
  let newEntry = document.createElement('div');
  newEntry.setAttribute('class', 'entry');

  let nameLabel = document.createElement('div');
  nameLabel.setAttribute('class', 'name');
  nameLabel.innerHTML = person.name;

  let dot = document.createElement('div');
  dot.setAttribute('class', person.dot);

  let email = document.createElement('div');
  email.setAttribute('class', 'email');
  email.innerHTML = person.email;

  let phone = document.createElement('div');
  phone.setAttribute('class', 'phone');
  phone.innerHTML = person.phoneNumber;

  newEntry.appendChild(dot);
  newEntry.appendChild(nameLabel);
  newEntry.appendChild(email);
  newEntry.appendChild(phone);

  contactslistDOM.appendChild(newEntry);
});

let isEmail = true;
document.getElementById('sorting').addEventListener('change', event => {
  let email = document.querySelectorAll(".email");
  let phone = document.querySelectorAll(".phone");

  console.log(phone);
  
  isEmail = !isEmail;
  if(isEmail) {
    email.forEach(e => e.style.display = 'block');
    phone.forEach(p => p.style.display = 'none');
  } else {
    phone.forEach(p => p.style.display = 'block');
    email.forEach(e => e.style.display = 'none');
  }
})