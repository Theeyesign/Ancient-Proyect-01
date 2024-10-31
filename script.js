function checkCode() {
    const codeInput = document.getElementById("codeInput").value;
    const error = document.getElementById("error");
    if (codeInput === "TheRingIsWatching" || codeInput === "El vacío") {
        document.getElementById("intro").classList.add("hidden");
        document.getElementById("content").classList.remove("hidden");
        if (codeInput === "El vacío") {
            document.getElementById("grieta").classList.remove("hidden");
        }
        error.classList.add("hidden");
    } else {
        error.classList.remove("hidden");
    }
}

function toggleStories() {
    const stories = document.getElementById("stories");
    if (stories.classList.contains("hidden")) {
        stories.classList.remove("hidden");
    } else {
        stories.classList.add("hidden");
    }
}

function showCages() {
    document.getElementById("cages").classList.remove("hidden");
}

function goBack() {
    document.getElementById("stories").classList.add("hidden");
}

function goBackFromCages() {
    document.getElementById("cages").classList.add("hidden");
}
