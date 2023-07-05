function login (){

    x=document.getElementById("email").value ;
    y=document.getElementById("password").value ;
    z=document.getElementById("error-message");

    if(x=="aisyahnurkarimah65@gmail.com" && y=="12345"){
        alert("Login Berhasil")
    }else {
        z.innerHTML="Email atau password <br> salah";
        z.style.display="block";
    }
}