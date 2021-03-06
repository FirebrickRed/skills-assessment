let contactslistDOM = document.getElementById('contactsList');


//insdead of using Id's could just use indexing to be more
// accurate... will implement later if time permits.
let isActive = false;
contacts.forEach(person => {
  let newEntry = document.createElement('div');
  newEntry.setAttribute('class', 'entry');
  newEntry.setAttribute('id', person.id);

  if(person.id % 2 === 0) {
    newEntry.style.background = '#1A1A1A';
  } else {
    newEntry.style.background = '#212121';
  }

  let overlay = document.createElement('div');
  overlay.setAttribute('class', 'overlay');

  let moreDetails = document.createElement('div');
  moreDetails.setAttribute('class', 'moreDetails');

  newEntry.addEventListener('click', event => {
    let id;
    if(event.path[0].className !== 'entry') {
      id = event.path[1].id-1;
    } else {
      id = event.target.id-1;
    }

    isActive = !isActive;
    let md = document.querySelectorAll('.moreDetails');
    let entry = document.querySelectorAll('.entry');
    let overlays = document.querySelectorAll('.overlay');

    if(isActive) {
      overlays.forEach(o => o.style.display = "block");
      md[id].style.display = 'flex';
      entry[id].style.background = '#484848';
      overlays[id].style.display = "none";
    } else {
      md.forEach(m => m.style.display = "none");
      entry.forEach((e, index) => e.style.background = index % 2 !== 0 ? '#1A1A1A' : '#212121' );
      overlays.forEach(o => o.style.display = "none");
    }
  });

  let nameLabel = document.createElement('div');
  nameLabel.setAttribute('class', 'name');
  nameLabel.innerHTML = person.name;

  let dot = document.createElement('div');
  dot.setAttribute('class', `${person.dot} dot`);

  let email = document.createElement('div');
  email.setAttribute('class', 'email');
  email.innerHTML = person.email;

  let mdEmail = document.createElement('div');
  mdEmail.innerHTML = person.email;

  let phone = document.createElement('div');
  phone.setAttribute('class', 'phone');
  phone.innerHTML = person.phoneNumber;

  let mdPhone = document.createElement('div');
  mdPhone.innerHTML = person.phoneNumber;

  let address = document.createElement('div');
  address.setAttribute('class', 'address');
  address.innerHTML = person.address;

  moreDetails.appendChild(mdEmail);
  moreDetails.appendChild(mdPhone);
  moreDetails.appendChild(address);

  newEntry.appendChild(dot);
  newEntry.appendChild(nameLabel);
  newEntry.appendChild(email);
  newEntry.appendChild(phone);
  newEntry.appendChild(moreDetails);
  newEntry.appendChild(overlay);

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

  isActive = false;
  let md = document.querySelectorAll(".moreDetails");
  md.forEach(m => m.style.display = "none");
})