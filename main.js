async function iniciarModelo() {
    const session = await window.ai.createTextSession(); 
    return session;
}

document.addEventListener("DOMContentLoaded", async () => {
    let session;

    let iniciar = document.getElementById("ia-init");
    let textarea = document.getElementById("output");
    let input = document.getElementById("input");

    iniciar.addEventListener("click", async () => {
        session = await window.ai.createTextSession();
        console.log(session);
        textarea.value = "Loading nano...";
    });

    input.addEventListener("keydown", async (e) => {
        if (e.key === "Enter") {
            const promptMessage = "answer briefly the next query: " + input.value;
            let response = await session.prompt(promptMessage);

            textarea.value = response;
        }
    });
});
