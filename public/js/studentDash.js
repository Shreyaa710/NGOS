const email = document.querySelector("#email");
const password = document.querySelector("#password");

console.log("hello");

let url;
const a = window.location.href;
if (a.includes("academer")) {
  url = "https://cgc.academer.co";
} else {
  url = "http://localhost:3000";
}
const fetchData = async (email, password) => {
  try {
    console.log("email: ", email, "\npassword: ", password);
    const res = await fetch(url + "/api/getAllProblems", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log("klj", data);
    // document.querySelector(".mains").innerHTML = "";
    data.forEach((i) => {
      document.querySelector(".mainc").insertAdjacentHTML(
        "beforeend",
        `<div class="dashboard-box">
            <div class="contain-box">
            <div class="contain-dabba">
            <img
              src="WhatsApp Image 2023-04-10 at 21.34.12.jpg"
              alt="image"
              class="image-dash" />
            <p class="text-dash">${i.name}</p>
          </div>
        </div>

        <div class="contain-box">
          <p class="para-dash para-more">
           ${i.description}
          </p>
          <button class="btn-dash">Done</button>
          <!-- <button class="btn-dash">Cancel</button> -->
          </div>
          
        <div class="contain-box">
        <div class="flex-person">
        <!-- <p class="para-dash">Posted on:</p>
        <p class="para-dash">23/05/2023</p> -->
        </div>
          <p class="para-dash">Est time: ${i.hours} hr</p>
        </div>
        </div>
        `
      );
    });
    return data;
  } catch (error) {
    console.log("issue with api");
    // const error = await err.json();
    // console.log(error.message);
    return error;
  }
};

const error = document.querySelector(".error");
// console.log(bx);
// document.querySelector(".loginbtn").addEventListener("click", async (el) => {
//   el.preventDefault();
//   console.log(email.value, password.value);
//   const d = await checkData(email.value, password.value);
//   console.log("hello : ", d);
//   if (d.error) {
//     error.textContent = "Error";
//     error.classList.remove("none");
//     setInterval(() => {
//       error.textContent = "";
//       error.classList.add("none");
//     }, 4000);
//     // alert("Error");
//   } else {
//     console.log("Logged In");
//     error.textContent = "Logged In";
//     error.classList.remove("none");
//     setInterval(() => {
//       //   error.textContent = "";
//       error.classList.add("none");
//     }, 2000);
//     window.location.href = "/";
//   }
// });
console.log(fetchData());
