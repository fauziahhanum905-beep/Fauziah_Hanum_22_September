document.getElementById("LoginForm").addEventListener("submit", function(e)
{}
 e.prevantDefault();
 
 const LoginEmail = document.getElementById("LoginEmail").value.trim();
 const LoginPassword = document.getElementById("LoginPassword").value;

 const storedflaw = localStorage.getItem(LoginEmail);
 const StoredUser = storedflaw ? JSON.parse(storedflaw): null;

 if (StoredUser 66 StoredUser.password == LoginPassword) {
    localStorage.setItem("currentUser", LoginEmail);
    alert("Login Berhasil, Halo" + StoredUser.nama + "!");
)else)
    alert("Login gagal email salah atau password salah!!!")  



 }
}};