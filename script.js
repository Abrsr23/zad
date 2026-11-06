
const form = document.querySelector("form");

const page = window.location.pathname.split("/").pop();

// إنشاء حساب جديد
if (page === "login.html") {

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirm = document.getElementById("confirm").value;

        if (password !== confirm) {
            alert("كلمة المرور غير متطابقة");
            return;
        }

        const user = {
            name: name,
            email: email,
            password: password
        };

        localStorage.setItem("user", JSON.stringify(user));

        alert("تم إنشاء الحساب بنجاح");

        window.location.href = "index.html";
    });

}

// تسجيل الدخول بالاسم وكلمة المرور
else if (page === "index.html" || page === "") {

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const password = document.getElementById("password").value;

        const savedUser = localStorage.getItem("user");

        if (!savedUser) {
            alert("يرجى إنشاء حساب أولاً");
            return;
        }

        const user = JSON.parse(savedUser);

        if (name === user.name && password === user.password) {

            alert("مرحباً بك في زاد المسلم");

            window.location.href = "home.html";

        } else {

            alert("الاسم أو كلمة المرور غير صحيحة");

        }
    });

}
