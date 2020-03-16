const db_user = [
    {
        username: "finaroyana",
        password: "finaroyana22",
    }
]

const inputUser = document.querySelector("#username");
const inputPass = document.querySelector("#password");
const inputKonfirmasiPass = document.querySelector("#konfirmasi_password");
const buttonSubmit = document.querySelector("#submit");
const warningMsg = document.querySelector(".warning");

buttonSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const valueinputUser = inputUser.value;
    const valueinputPass = inputPass.value;
    const valueinputKonfirmasiPass = inputKonfirmasiPass.value;
    if (valueinputPass === valueinputKonfirmasiPass) {
        warningMsg.classList.add("warning");
        const data = {
            username: valueinputUser,
            password: valueinputPass
        }
        db_user.push(data);
        console.log(db_user);
        alert("Registrasi Telah Berhasil!");
    }else if(valueinputUser === " "){
        warningMsg.className = "alert bg-danger text-white text-center mb-3";
    }else{
        warningMsg.className = "alert bg-danger text-white text-center mb-3";
    }

})