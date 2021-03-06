const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const telephoneInput = document.getElementById("telephone");
const emailInput = document.getElementById("email");

/**
 * 
 * VALIDATORS
 *  
 */

// Can only contain letters a-z in lowercase
// [a-z] make sure first character is in lower case
// $ the rest, making sure all characters are in lower case ([a-z])
// ^ (start) and $ (end) - checks each character all the way
function isValidUsername(username) {
  return /^[a-z]+$/.test(username);
}

// Must contain a lowercase, uppercase letter and a number
function isValidPassword(password) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/.test(password);
  
  // /[a-z]/.test(password) &&
  // /[A-Z]/.test(password) &&
  // /[0-9]/.test(password);
}

// The telephone number must be in the format of (555) 555-5555
function isValidTelephone(telephone) {
  //return /^\(\d{3}\)\s\d{3}-\d{4}$/.test(telephone);
  return /^\D*\d{3}\D*\d{3}\D*\d{4}\D*$/.test(telephone);
  //this will accept the following
  //1234567890
  //(123) 456-7890
  //(123)  456-7890
  //( 123 ) 456-7890 
}

// Must be a valid email address
// got the regex from emailregex.com
function isValidEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

/**
 * 
 * FORMATTING FUNCTIONS
 * 
 */

function formatTelephone(text) {
  const regex = /^\D*(\d{3})\D*(\d{3})\D*(\d{4})\D*$/;
  return text.replace(regex, '($1) $2-$3');
}

/**
 * 
 * SET UP EVENTS
 * 
 */

function showOrHideTip(show, element) {
  // show element when show is true, hide when false
  if (show) {
    element.style.display = "inherit";
  } else {
    element.style.display = "none";
  }
}

function createListener(validator) {
  return e => {
    const text = e.target.value;
    const valid = validator(text);
    const showTip = text !== "" && !valid;
    const tooltip = e.target.nextElementSibling;
    showOrHideTip(showTip, tooltip);
  };
}

usernameInput.addEventListener("input", createListener(isValidUsername));

passwordInput.addEventListener("input", createListener(isValidPassword));

telephoneInput.addEventListener("input", createListener(isValidTelephone));

telephoneInput.addEventListener("blur", e => {
  e.target.value = formatTelephone(e.target. value)
});

emailInput.addEventListener("input", createListener(isValidEmail));
