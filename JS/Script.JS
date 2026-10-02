const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

const iconMarkup = {
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    "map-pin": '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.7L7.7 9.7a16 16 0 0 0 6.6 6.6l1.3-1.3a2 2 0 0 1 1.7-.6l3 .5a2 2 0 0 1 1.7 2Z"/>',
    stethoscope: '<path d="M6 3v6a6 6 0 0 0 12 0V3M4 3h4m8 0h4M18 15v1a4 4 0 0 0 8 0v-3"/><circle cx="22" cy="12" r="2"/>',
    package: '<path d="m12 3 9 5-9 5-9-5 9-5Zm-9 5v8l9 5 9-5V8M12 13v8"/>',
    pill: '<path d="m10.5 20.5 10-10a5.7 5.7 0 0 0-8-8l-10 10a5.7 5.7 0 0 0 8 8ZM8.5 8.5l7 7"/>',
    "lock-keyhole": '<rect x="3" y="10" width="18" height="11" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3m-5 5v2"/><circle cx="12" cy="15" r="1"/>',
    scale: '<path d="M12 3v18M5 6h14M5 6l-3 7h6L5 6Zm14 0-3 7h6l-3-7ZM5 21h14"/>',
    "trending-up": '<path d="m3 17 6-6 4 4 8-8M15 7h6v6"/>',
    droplet: '<path d="M12 22a8 8 0 0 0 8-8c0-4-8-12-8-12S4 10 4 14a8 8 0 0 0 8 8Z"/>',
    scissors: '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="m8.1 8.1 12.8 12.8M14.8 9.2 21 3m-8.1 8.1L3 21"/>',
    sparkles: '<path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Zm7 12 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15ZM5 2l.8 1.7L7.5 4.5l-1.7.8L5 7l-.8-1.7-1.7-.8 1.7-.8L5 2Z"/>',
    baby: '<circle cx="12" cy="8" r="5"/><path d="M8 13h8l2 8H6l2-8Zm1-6h.01M15 7h.01m-5 4 1 1 2-1"/>',
    smile: '<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>',
    "flower-2": '<path d="M12 12c-2-2-2-5 0-7 2 2 2 5 0 7Zm0 0c2-2 5-2 7 0-2 2-5 2-7 0Zm0 0c2 2 2 5 0 7-2-2-2-5 0-7Zm0 0c-2 2-5 2-7 0 2-2 5-2 7 0Z"/><circle cx="12" cy="12" r="2"/><path d="M12 19v3m-4 0h8"/>',
    "message-circle": '<path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    send: '<path d="m22 2-7 20-4-9-9-4 20-7ZM22 2 11 13"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m16 0v-2a4 4 0 0 0-3-3.9M14 3.1a4 4 0 0 1 0 7.8"/><circle cx="10" cy="7" r="4"/>',
    "calendar-days": '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18m-13 4h.01M12 15h.01M16 15h.01M8 18h.01M12 18h.01"/>',
    wallet: '<rect x="3" y="5" width="18" height="15" rx="2"/><path d="M3 9h18m-5 5h.01"/>',
    boxes: '<path d="m12 3 9 5-9 5-9-5 9-5Zm-9 5v8l9 5 9-5V8M12 13v8"/><path d="m3 8 9 5 9-5"/>',
};

document.querySelectorAll("[data-lucide]").forEach((placeholder) => {
    const name = placeholder.getAttribute("data-lucide");
    const paths = iconMarkup[name];

    if (!paths) {
        return;
    }

    const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    icon.setAttribute("viewBox", "0 0 24 24");
    icon.setAttribute("fill", "none");
    icon.setAttribute("stroke", "currentColor");
    icon.setAttribute("stroke-width", "1.8");
    icon.setAttribute("stroke-linecap", "round");
    icon.setAttribute("stroke-linejoin", "round");
    icon.setAttribute("aria-hidden", "true");
    icon.setAttribute("focusable", "false");
    icon.classList.add("lucide", `lucide-${name}`);
    icon.innerHTML = paths;
    placeholder.replaceWith(icon);
});

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("active");
        menuBtn.setAttribute("aria-expanded", String(isOpen));
        menuBtn.setAttribute("aria-label", isOpen ? "إغلاق قائمة التنقل" : "فتح قائمة التنقل");
    });

    navLinks.addEventListener("click", (event) => {
        if (event.target.closest("a")) {
            navLinks.classList.remove("active");
            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.setAttribute("aria-label", "فتح قائمة التنقل");
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            navLinks.classList.remove("active");
            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.setAttribute("aria-label", "فتح قائمة التنقل");
        }
    });
}

function sendToWhatsApp(phone, message) {
    const url =
        "https://wa.me/" +
        phone +
        "?text=" +
        encodeURIComponent(message);

    window.open(url, "_blank");
}

function loginTeam(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        alert("تم تسجيل الدخول بنجاح");
        window.location.href = "team.html";
    } else {
        alert("اسم المستخدم أو كلمة المرور غير صحيحة");
    }
}