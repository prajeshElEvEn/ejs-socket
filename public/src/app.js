const socket = io("http://localhost:3000");

var qrCode = document.getElementById("qrCode");
qrCode.innerHTML = `Loading qr...`;

socket.on("qrCodeUrl", (url) => {
  qrCode.innerHTML = `<img src="${url}" alt="QR Code" />`;
});
socket.on("loggedIn", () => {
  qrCode.innerHTML = `Logged into Whatsapp`;
});
socket.on("authFailed", (error) => {
  qrCode.innerHTML = `${error}`;
});
socket.on("loggedOut", () => {
  qrCode.innerHTML = `Logged out of Whatsapp`;
});
