document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("login-form").addEventListener("submit", function(event) {
      event.preventDefault(); 

      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;

      var credentials = {
          "50423036": "ade12345",
          "50423082": "ahmad12345",
          "50423122": "ali12345",
          "50423181": "angga12345",
          "50423237": "axl12345",
          "50423276": "bima12345",
          "50423351": "dekas12345",
          "50423390": "dimas12345",
          "50423399": "echa12345",
          "50423427": "fadhlan12345",
          "50423469": "farrel12345",
          "50423521": "froditus12345",
          "50423547": "guntur12345",
          "50423583": "hendriko12345",
          "50423620": "indra12345",
          "50423664": "josse12345",
          "50423683": "keisha12345",
          "50423722": "lutfi12345",
          "50423741": "maher12345",
          "50423792": "m.kevin12345",
          "50423828": "m.khoiril12345",
          "50423864": "m.ariel12345",
          "50423885": "m.dicky12345",
          "51423515": "m.farhan12345",
          "50423908": "m.fatih12345",
          "50423919": "m.fiqqie12345",
          "50423965": "m.naufal12345",
          "51423028": "m.varel12345",
          "51423078": "natasya12345",
          "51423096": "nazril12345",
          "51423165": "raden12345",
          "51423190": "rafli12345",
          "51423243": "ranti12345",
          "51423267": "rendi12345",
          "51423304": "rifqie12345",
          "51423355": "salsepa12345",
          "51423401": "suken12345",
          "51423454": "viqri12345",
          "51423490": "yuvi12345"
      };

      if (credentials.hasOwnProperty(username) && credentials[username] === password) {
          alert("Login berhasil!");
          window.location.href = 'index.html'; 
      } else {
          alert("Username atau password salah!");
      }
  });
});
