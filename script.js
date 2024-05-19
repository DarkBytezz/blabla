document.getElementById('calculator-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let dia = parseFloat(document.getElementById('diameter').value);
    let height = parseFloat(document.getElementById('height').value);
    
    let weight = calculateWeight(dia, height);
    
    document.getElementById('result').textContent = `Weight: ${weight.toFixed(2)} kg`;
});

function calculateWeight(dia, height) {
    const pi = 3.1415;
    const radius = dia / 2;
    const density = 7.85;
    const volume = pi * radius * radius * height;
    const weight = (volume * density) / 1000000;
    return weight;
}
