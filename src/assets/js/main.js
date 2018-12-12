// Main Navigation

let submenu = document.getElementById('submenu');

if (typeof(submenu) != 'undefined' && submenu != null) {
  submenu.onclick = function(event) {
    event.preventDefault();
    this.parentElement.classList.toggle('submenu--active');
    var nodeList = document.querySelectorAll('.main-navigation > nav > ul > li');
    for (var el of nodeList) {
      if (el != this.parentElement) {
        el.classList.toggle('submenu--isactive');
      }
    }
  }
}


// 1.0 Calendar - Popup

// 1.0.1 Popup - View State
let popupViewState = false; // default
function popupViewStateFn(popupViewState) {
  let viewState = popupViewState;
  let main = document.querySelector('.js--calendar__main');
  if (viewState === true) {
    main.classList.add('calendar__main--w-sidebar');
    document.querySelector('.js--popup-class').classList.add('active');
  } else {
    main.classList.remove('calendar__main--w-sidebar');
    document.querySelector('.js--popup-class').classList.remove('active');
  }
}

// 1.0.2 Popup - Close
let popupClose = document.querySelector('.js--popup-close');
popupClose.onclick = function(event) {
  popupViewState = false;
  popupViewStateFn(popupViewState)
  event.preventDefault();
}

// 1.0.3 Popup - Information
let popup = document.querySelectorAll('.js--popup-open');
for (var i = 0; i < popup.length; i++) {
  popup[i].onclick = function(event) {

    popupViewState = true;
    popupViewStateFn(popupViewState);

    let type = this.getAttribute('data-type');

    let hidePopupBlocks = document.querySelectorAll('.js--popup-block');
    for (var i = 0; i < hidePopupBlocks.length; i++) {
      hidePopupBlocks[i].style.display = 'none';
    }

    let showAddAvailability = document.querySelector('.js--popup-block--add-availability');
    let showAvailable = document.querySelector('.js--popup-block--available');
    let showBooked = document.querySelector('.js--popup-block--booked');
    let showCancelBooking = document.querySelector('.js--popup-block--cancel-booking');

    if (type == 'add-availability') {

      showAddAvailability.style.display = 'block';

      let getAvailabilityDate = this.getAttribute('data-date');
      let getAvailabilityTime = this.getAttribute('data-time');
      let bookedDate = document.querySelector('.js--popup-block--add-availability .js--popup-date-text');
      let bookedTime = document.querySelector('.js--popup-block--add-availability .js--popup-time-text');
      bookedDate.innerHTML = getAvailabilityDate;
      bookedTime.innerHTML = getAvailabilityTime;

    } else if (type == 'available') {

      showAvailable.style.display = 'block';

      let getAvailableDate = this.getAttribute('data-date');
      let getAvailableTime = this.getAttribute('data-time');
      let bookedDate = document.querySelector('.js--popup-block--available .js--popup-date-text');
      let bookedTime = document.querySelector('.js--popup-block--available .js--popup-time-text');
      bookedDate.innerHTML = getAvailableDate;
      bookedTime.innerHTML = getAvailableTime;

    } else if (type == 'booked') {

      showBooked.style.display = 'block';

      let getBookedDate = this.getAttribute('data-date');
      let getBookedTime = this.getAttribute('data-time');
      let getBookedPatient = this.getAttribute('data-patient');
      let getBookedWith = this.getAttribute('data-with');
      let getBookedWhere = this.getAttribute('data-where');
      let bookedDate = document.querySelector('.js--popup-block--booked .js--popup-date-text');
      let bookedTime = document.querySelector('.js--popup-block--booked .js--popup-time-text');
      let bookedPatient = document.querySelector('.js--popup-block--booked .js--popup-patient-text');
      let bookedWith = document.querySelector('.js--popup-block--booked .js--popup-with-text');
      let bookedWhere = document.querySelector('.js--popup-block--booked .js--popup-where-text');

      bookedDate.innerHTML = getBookedDate;
      bookedTime.innerHTML = getBookedTime;
      bookedPatient.innerHTML = getBookedPatient;
      bookedWith.innerHTML = getBookedWith;
      bookedWhere.innerHTML = getBookedWhere;

    } else if (type == 'cancel-booking') {

      showCancelBooking.style.display = 'block';

      let getBookedDate = this.getAttribute('data-date');
      let getBookedTime = this.getAttribute('data-time');
      let bookedDate = document.querySelector('.js--popup-block--cancel-booking .js--popup-date-text');
      let bookedTime = document.querySelector('.js--popup-block--cancel-booking .js--popup-time-text');
      let bookedPatient = document.querySelector('.js--popup-block--cancel-booking .js--popup-patient-text');
      let bookedWith = document.querySelector('.js--popup-block--cancel-booking .js--popup-with-text');
      let bookedWhere = document.querySelector('.js--popup-block--cancel-booking .js--popup-where-text');

      bookedDate.innerHTML = getBookedDate;
      bookedTime.innerHTML = getBookedTime;

    } else {

    }



    event.preventDefault();

  }
}
