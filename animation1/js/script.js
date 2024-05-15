(function () {
  /* for login page required */
  function required() {
    document.querySelectorAll(".input").forEach((input) => {
      if (input.value.length < 7) {
        input.classList.add("required");
        setTimeout(() => {
          document.getElementById("Username").remove &&
            document.getElementById("password").remove;
          input.classList.remove("required");
        }, 2000);
      }
    });
  }
  let button = document.querySelector(".btn");
  button.addEventListener("click", required);

  /* for the animation of login to sign up */
  let display = 0;
  let animation = document.querySelector("#animation-box");
  function header_transition1() {
    if (display == 0) {
      animation.classList.add("click-fromRight");
      animation.classList.remove("click-fromLeft");
      display = 1;
    }

    console.log(display);
  }

  function header_transition2() {
    if (display == 1) {
      animation.classList.add("click-fromLeft");
      animation.classList.remove("click-fromRight");
      display = 0;
    }

    console.log(display);
  }
  let login = document.querySelector("#login");
  let signUP = document.querySelector("#sign");
  signUP.addEventListener("click", header_transition1);
  login.addEventListener("click", header_transition2);
})();
