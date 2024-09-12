document.getElementById('diseaseForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const leafColor = document.getElementById('leafColor').value;
    const spotColor = document.getElementById('spotColor').value;
    const wilting = document.getElementById('wilting').value;

    // Prediction logic (simple condition-based simulation)
    let disease = "Healthy Plant";

    if (leafColor === "yellow" && wilting === "yes") {
        disease = "Nitrogen Deficiency";
    } else if (leafColor === "brown" && spotColor === "black") {
        disease = "Fungal Infection";
    } else if (leafColor === "black" && wilting === "yes") {
        disease = "Root Rot";
    } else if (spotColor === "white") {
        disease = "Powdery Mildew";
    }

    // Show result
    document.getElementById('result').innerText = `Prediction: ${disease}`;
});
