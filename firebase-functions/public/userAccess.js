//need to ass thier username and userlevel as the page that is loaded up depends on the user level




//adding lister to the sign up form 
const signupForm = document.querySelector('#signUp');

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // get user info
    const email1 = signupForm.email.value;
    const password1 = signupForm.password.value;
    const userLevel1 = signupForm.userLevel.value;
    const username1 = signupForm.username.value;

    console.log(email1, password1, userLevel1, username1);
    auth.createUserWithEmailAndPassword(email1, password1).then(cred => {
        return db.collection('users').doc(cred.user.uid).set({
            email: email1,
            password: password1,
            userLevel: userLevel1,
            username: username1
        }).then(() => {
            console.log(cred);
            document.getElementById('errorMessage').innerHTML = "Account Created Successfully " + '<br /> <br />';
        });



    }).catch(err => {
        document.getElementById('errorMessage').innerHTML = "There was an error signing you up: " + err.message + '<br /> <br />';
        console.log('Error signing you up', err);
    });
    //console.log(email, password, userLevel, username, 'thats all');
    //console.log("This is from the userAccess document");
});




//show user info
