const dnhapBtn = document.querySelector(".Login_link");
const dkiBtn = document.querySelector(".Register_link");
const dki = document.querySelector(".Register_form");
const dnhap = document.querySelector(".Login_form");
dnhapBtn.onclick = function () {
  dki.style.display = "none";
  dnhap.style.display = "flex";
};

dkiBtn.onclick = function () {
  dnhap.style.display = "none";
  dki.style.display = "flex";
};

// Mobile

const dki_mobile = document.querySelector(".dki");
const dnhap_mobile = document.querySelector(".dnhap");
dnhap_mobile.onclick = function () {
  dki.style.display = "none";
  dnhap.style.display = "flex";
};

dki_mobile.onclick = function () {
  dnhap.style.display = "none";
  dki.style.display = "flex";
};
function Validate(inputElement, rule) {
    var messageElement = inputElement.parentElement.querySelector(".message");
    var messageErorr = rule.test(inputElement.value);
    if (messageErorr) {
        messageElement.innerText = messageErorr;
    } else {
        messageElement.innerText = "";
    }
}
function Validator(options) {
  var formElement = document.querySelector(options.form);
  if (formElement) {
    formElement.onsubmit = function (e) {
      e.preventDefault();
      options.rules.forEach(function (rule) {
        var inputElement = formElement.querySelector(rule.selector);
        Validate(inputElement, rule);
      });
    };
    options.rules.forEach(function (rule) {
      var inputElement = formElement.querySelector(rule.selector);
      var messageElement = inputElement.parentElement.querySelector(".message");
      if (inputElement) {
        inputElement.onblur = function (){
            Validate(inputElement, rule);
        };
        inputElement.oninput = function() {
            messageElement.innerText = '';
        }
      }
    });
  }
}

Validator.isRequired = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : "Vui lòng nhập trường này";
    },
  };
};
Validator.isEmail = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(value) ? undefined : "Địa chỉ phải là email";
    },
  };
};
Validator.isPass = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : "Vui lòng nhập trường này";
    },
  };
};
