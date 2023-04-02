const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = () =>{
    navbarNav.classList.toggle('active');
};

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

function checkForm (){
    var user = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var hp = document.getElementById("hp").value;
    var pesan = document.getElementById("pesan").value;

    if(user == "" || email=="" || hp == "" && pesan==""){
        alert("Lengkapi Formulir Pemesanan")
    } else{
        alert("Terimakasih Sudah Memesan, Silahkan Datang dan Ambil Pesananmu")
    }
};