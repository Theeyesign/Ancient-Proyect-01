function checkCode() {
    const codeInput = document.getElementById('codeInput').value;
    const errorMessage = document.getElementById('error');
    if (codeInput === "El anillo está observando") {
        document.getElementById('intro').classList.add('hidden');
        document.getElementById('content').classList.remove('hidden');
    } else {
        errorMessage.classList.remove('hidden');
    }
}

function toggleCages() {
    const cages = document.getElementById('cages');
    cages.classList.toggle('hidden');
}

function checkDate() {
    const dateInput = document.getElementById('dateInput').value;
    const historyText = document.getElementById('historyText');

    // Aquí podrías agregar más lógica para mostrar la historia basada en la fecha
    if (dateInput === "2024-10-30") { // Cambia esto según lo que quieras
        historyText.innerText = "Este es el inicio, el viajero que nunca regresó ha regresado con malas noticias. Una guerra se aproxima.";
    } else {
        historyText.innerText = "No hay historia para esta fecha.";
    }

    document.getElementById('historyContainer').classList.remove('hidden');
}

