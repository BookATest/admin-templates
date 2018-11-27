"use strict";

// Main Navigation
var submenu = document.getElementById('submenu');

if (typeof submenu != 'undefined' && submenu != null) {
  submenu.onclick = function (event) {
    event.preventDefault();
    this.parentElement.classList.toggle('submenu--active');
    var nodeList = document.querySelectorAll('.main-navigation > nav > ul > li');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = nodeList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var el = _step.value;

        if (el != this.parentElement) {
          el.classList.toggle('submenu--isactive');
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  };
} // 1.0 Calendar - Popup
// 1.0.1 Popup - View State


var popupViewState = false; // default

function popupViewStateFn(popupViewState) {
  var viewState = popupViewState;
  var main = document.querySelector('.js--calendar__main');

  if (viewState === true) {
    main.classList.add('calendar__main--w-sidebar');
  } else {
    main.classList.remove('calendar__main--w-sidebar');
  }
} // 1.0.2 Popup - Close


var popupClose = document.querySelector('.js--popup-close');

popupClose.onclick = function (event) {
  popupViewState = false;
  popupViewStateFn(popupViewState);
  event.preventDefault();
}; // 1.0.3 Popup - Information


var popup = document.querySelectorAll('.js--popup-open');

for (var i = 0; i < popup.length; i++) {
  popup[i].onclick = function (event) {
    popupViewState = true;
    popupViewStateFn(popupViewState);
    var type = this.getAttribute('data-type');
    var hidePopupBlocks = document.querySelectorAll('.js--popup-block');

    for (var i = 0; i < hidePopupBlocks.length; i++) {
      hidePopupBlocks[i].style.display = 'none';
    }

    var showAddAvailability = document.querySelector('.js--popup-block--add-availability');
    var showAvailable = document.querySelector('.js--popup-block--available');
    var showBooked = document.querySelector('.js--popup-block--booked');

    if (type == 'add-availability') {
      showAddAvailability.style.display = 'block';
      var getAvailabilityDate = this.getAttribute('data-date');
      var getAvailabilityTime = this.getAttribute('data-time');
      var bookedDate = document.querySelector('.js--popup-block--add-availability .js--popup-date-text');
      var bookedTime = document.querySelector('.js--popup-block--add-availability .js--popup-time-text');
      bookedDate.innerHTML = getAvailabilityDate;
      bookedTime.innerHTML = getAvailabilityTime;
    } else if (type == 'available') {
      showAvailable.style.display = 'block';
      var getAvailableDate = this.getAttribute('data-date');
      var getAvailableTime = this.getAttribute('data-time');

      var _bookedDate = document.querySelector('.js--popup-block--available .js--popup-date-text');

      var _bookedTime = document.querySelector('.js--popup-block--available .js--popup-time-text');

      _bookedDate.innerHTML = getAvailableDate;
      _bookedTime.innerHTML = getAvailableTime;
    } else if (type == 'booked') {
      showBooked.style.display = 'block';
      var getBookedDate = this.getAttribute('data-date');
      var getBookedTime = this.getAttribute('data-time');
      var getBookedPatient = this.getAttribute('data-patient');
      var getBookedWith = this.getAttribute('data-with');
      var getBookedWhere = this.getAttribute('data-where');

      var _bookedDate2 = document.querySelector('.js--popup-block--booked .js--popup-date-text');

      var _bookedTime2 = document.querySelector('.js--popup-block--booked .js--popup-time-text');

      var bookedPatient = document.querySelector('.js--popup-block--booked .js--popup-patient-text');
      var bookedWith = document.querySelector('.js--popup-block--booked .js--popup-with-text');
      var bookedWhere = document.querySelector('.js--popup-block--booked .js--popup-where-text');
      _bookedDate2.innerHTML = getBookedDate;
      _bookedTime2.innerHTML = getBookedTime;
      bookedPatient.innerHTML = getBookedPatient;
      bookedWith.innerHTML = getBookedWith;
      bookedWhere.innerHTML = getBookedWhere;
    } else {}

    event.preventDefault();
  };
}