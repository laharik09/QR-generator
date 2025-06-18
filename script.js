function generateQR() {
    const text = document.getElementById('qrText').value;
    const qrCode = document.getElementById('qrCode');
    const downloadLink = document.getElementById('downloadLink');

    if (!text) {
        alert("Please enter some text!");
        return;
    }

    qrCode.innerHTML = ""; // Clear previous QR

    QRCode.toCanvas(text, { width: 200 }, function(err, canvas) {
        if (err) console.error(err);
        qrCode.appendChild(canvas);

        const dataUrl = canvas.toDataURL("image/png");
        downloadLink.href = dataUrl;
        downloadLink.style.display = 'block';
    });
}