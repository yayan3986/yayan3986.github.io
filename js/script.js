// Fungsi untuk konversi suhu
function convertTemperature() {
    
    var input = document.getElementById("input").value.trim(); 

    // Indikator jika form tidak diisi
    if (input === "") {
        document.getElementById("result").innerText = "Form tidak boleh kosong";
        return; // Stop further execution
    }

    // Memastikan hanya input angka
    var celsius = parseFloat(input);

    // Memastikan angka valid
    if (isNaN(celsius)) {
        document.getElementById("result").innerText = "Masukkan suhu yang valid";
        return; 
    }
    
// Rumus konversi    
    var fahrenheit = (input * 9/5) + 32;

    var resultElement = document.getElementById("result");
    resultElement.innerText = "Hasil konversi: " + fahrenheit.toFixed(2) + "°F";
}

// Tambahan fungsi untuk konversi dengan tombol enter
document.getElementById("input").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        convertTemperature();
    }
});

// Fungsi untuk mereset input dan hasil konversi
function resetConversion() {
    document.getElementById("input").value = "";
    document.getElementById("result").innerText = "";
}

// Fungsi untuk mengonversi suhu dalam Fahrenheit kembali ke Celsius
function reverseConversion() {
    var fahrenheitInput = parseFloat(document.getElementById("input").value.trim());

    // Memastikan hanya input angka
    if (isNaN(fahrenheitInput)) {
        document.getElementById("result").innerText = "Masukkan suhu yang valid";
        return; 
    }

    var celsiusResult = (fahrenheitInput - 32) * 5/9;
    var resultElement = document.getElementById("result");
    resultElement.innerText = "Hasil konversi: " + celsiusResult.toFixed(2) + "°C";
}

// Event listener untuk tombol Reset
document.getElementById("resetButton").addEventListener("click", resetConversion);

// Event listener untuk tombol Reverse
document.getElementById("reverseButton").addEventListener("click", reverseConversion);
