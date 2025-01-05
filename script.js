// script.js
document.addEventListener("DOMContentLoaded", () => {
  const menuSection = document.getElementById("menu-section");
  const ticketSection = document.getElementById("ticket-section");
  const ticketInfo = document.getElementById("ticket-info");
  const qrCodeCanvas = document.getElementById("qr-code");
  const backButton = document.getElementById("back-button");

  const buyButtons = document.querySelectorAll(".buy-button");

  buyButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const menuItem = event.target.closest(".menu-item");
      const itemName = menuItem.dataset.name;
      const itemPrice = menuItem.dataset.price;

      // チケット情報を表示
      ticketInfo.textContent = `商品名: ${itemName}, 金額: ¥${itemPrice}`;
      
      // QRコード生成
      generateQRCode(`商品名: ${itemName}, 金額: ¥${itemPrice}`);

      // セクションの切り替え
      menuSection.style.display = "none";
      ticketSection.style.display = "block";
    });
  });

  backButton.addEventListener("click", () => {
    // セクションの切り替え
    menuSection.style.display = "block";
    ticketSection.style.display = "none";
  });

  // QRコード生成関数
  function generateQRCode(text) {
    const qrCode = new QRCode(qrCodeCanvas, {
      text: text,
      width: 200,
      height: 200,
    });
  }
});
