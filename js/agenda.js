document.getElementById("form-agenda").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Obrigado! Entraremos em contato para confirmar seu agendamento.");
    e.target.reset();
});