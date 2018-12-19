
<template>
    <div>
        <button @click="login" class='login_button'>Login with Google</button>
    </div>
</template>

<script>
    import firebase from 'firebase';

    export default {


        methods: {
            login(){
                var provider = new firebase.auth.GoogleAuthProvider();
                provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

                firebase.auth().signInWithPopup(provider).then(result=> {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;

                this.$router.push('/')
                // ...
                }).catch(error=> {
                 // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                 // ...
                });
            }
        }
    }
</script>

<style scoped=''>

    div {
        background: #F7F7F8;
        height: 100vh;
        width: 100vw;
    }
    .login_button{
        background: dodgerblue;
        height: 36px;
        width: 15%;
        border-radius: 5px;
        color: white;
        box-shadow: 1px 1px 1px lightgray;
        margin-top: 60px;
        margin-right: 1%;
        cursor: pointer;
    }
</style>