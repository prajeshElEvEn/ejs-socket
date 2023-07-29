const socket = io("http://localhost:5000");
var qrCode = document.getElementById("qrCode");
socket.on("qrCodeUrl", (url) => {
  qrCode.innerHTML = `<img src="${url}" alt="QR Code" />`;
});
