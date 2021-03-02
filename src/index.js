let contactslistDOM = document.getElementById('contactsList');

contacts.forEach(person => {
  let newEntry = document.createElement('div');
  newEntry.setAttribute('class', 'entry');

  let nameLabel = document.createElement('div');
  nameLabel.innerHTML = person.name;

  let dot = document.createElement('div');
  dot.setAttribute('class', person.dot);

  let email = document.createElement('div');
  email.innerHTML = person.email;

  let phone = document.createElement('div');
  phone.innerHTML = person.phoneNumber;

  newEntry.appendChild(dot);
  newEntry.appendChild(nameLabel);
  newEntry.appendChild(email);
  newEntry.appendChild(phone);

  contactslistDOM.appendChild(newEntry);
});