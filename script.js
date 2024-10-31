function checkCode() {
    const codeInput = document.getElementById('codeInput').value;
    const errorMessage = document.getElementById('error');
    const content = document.getElementById('content');
    
    if (codeInput === 'El Anillo Está Observando') {
        content.classList.remove('hidden');
        errorMessage.classList.add('hidden');
    } else if (codeInput === 'El Vacío') {
        toggleHole();
        errorMessage.classList.add('hidden');
    } else {
        errorMessage.classList.remove('hidden');
    }
}

function toggleStories() {
    const stories = document.getElementById('stories');
    stories.classList.toggle('hidden');
}

function checkDate() {
    const dateInput = document.getElementById('dateInput').value;
    const historyText = document.getElementById('historyText');
    
    if (dateInput === '2024-10-30') {
        historyText.innerText = "Este es el inicio, el viajero que nunca regresó ha regresado con malas noticias. Una guerra se aproxima.";
        document.getElementById('historyContainer').classList.remove('hidden');
    } else {
        historyText.innerText = "No hay historia para esta fecha.";
    }
}

function toggleHole() {
    const cages = document.getElementById('cages');
    cages.classList.toggle('hidden');
}

function toggleCages() {
    const cages = document.getElementById('cages');
    cages.classList.add('hidden');
}

