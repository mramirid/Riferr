// $(document).ready(function () {
//     const loginForm = $('form.login');
//     const emailInput = $('input#email-input');
//     const passwordInput = $('input#password-input');
//
//     loginForm.on("submit", function (event) {
//         event.preventDefault();
//         const userData = {
//             email: emailInput.val().trim(),
//             password: passwordInput.val().trim()
//         };
//
//         if (!userData.email || !userData.password) {
//             return;
//         }
//
//         loginUser(userData.email, userData.password);
//         emailInput.val("");
//         passwordInput.val("");
//     });
//
//     // Post ke route '/api/login', jika sukses redirect ke homepage
//     function loginUser(email, password) {
//         $.post("/api/login", {
//             email: email,
//             password: password
//         }).then(function (data) {
//             window.location.replace(data);
//         }).catch(function (err) {
//             console.log(err);
//         });
//     }
// });