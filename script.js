// Basic JS Prototype
console.log("CIS Club Website Loaded");
/* ---------- BUTTON CREATOR (Common) ---------- */
function createButton(icon, bottom, color = "white") {
    const btn = document.createElement("button");
    btn.innerHTML = icon;

    Object.assign(btn.style, {
        position: "fixed",
        bottom: bottom + "px",
        right: "20px",
        width: "60px",
        height: "60px",
        background: "#2F2FA8",
        color: color,
        border: "none",
        borderRadius: "14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "32px",
        fontWeight: "bold",
        cursor: "pointer",
        boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
        transition: "0.3s",
        zIndex: "999999"
    });

    btn.onmouseover = () => btn.style.transform = "scale(1.1)";
    btn.onmouseout  = () => btn.style.transform = "scale(1)";

    document.body.appendChild(btn);
    return btn;
}

/* ---------- SCROLL BUTTON ---------- */
const scrollBtn = createButton("⌃", 90);

/* Smooth Scroll */
scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ---------- ACCESSIBILITY BUTTON ---------- */
const accessBtn = createButton("👨🏻‍💻", 20, "#32CD32");

/* ---------- ACCESSIBILITY PANEL ---------- */
const panel = document.createElement("div");

Object.assign(panel.style, {
    position: "fixed",
    top: "0",
    right: "-350px",
    width: "350px",
    height: "100vh",
    background: "#ffffff",
    boxShadow: "0 0 15px rgba(0,0,0,0.3)",
    transition: "0.4s",
    zIndex: "9999999",
    fontFamily: "Arial, sans-serif",
    overflowY: "auto"
});

document.body.appendChild(panel);

/* ---------- PANEL HEADER ---------- */
const header = document.createElement("div");
header.innerHTML = `<span style="color:white;font-size:18px;">ACCESSIBILITY OPTIONS</span>`;
Object.assign(header.style, {
    background: "#2F2FA8",
    padding: "16px",
    textAlign: "center",
    fontWeight: "bold",
    position: "relative"
});
panel.appendChild(header);

/* Close Button */
const closeBtn = document.createElement("div");
closeBtn.innerHTML = "✕";
Object.assign(closeBtn.style, {
    position: "absolute",
    right: "16px",
    top: "12px",
    color: "#fff",
    fontSize: "20px",
    cursor: "pointer"
});
header.appendChild(closeBtn);

/* ---------- SECTION CREATOR ---------- */
function createSection(title) {
    const sec = document.createElement("div");
    sec.style.padding = "14px";
    sec.innerHTML = `<div style="font-size:14px;font-weight:bold;color:#666;margin-bottom:8px;">${title}</div>`;
    panel.appendChild(sec);
    return sec;
}

/* ---------- BUTTON GRID CREATOR ---------- */
function createGridButton(text, icon = "") {
    const btn = document.createElement("div");
    Object.assign(btn.style, {
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "12px",
        textAlign: "center",
        width: "100px",
        margin: "5px",
        cursor: "pointer",
        fontSize: "13px"
    });

    btn.innerHTML = `${icon ? icon + "<br>" : ""}${text}`;
    return btn;
}

function createGridRow(parent, btns) {
    const row = document.createElement("div");
    Object.assign(row.style, {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "5px"
    });
    btns.forEach(b => row.appendChild(b));
    parent.appendChild(row);
}

/* ---------- FULL PANEL UI ---------- */

/* Keyboard Nav */
const sec1 = createSection("");
createGridRow(sec1, [
    createGridButton("keyboard navigation", "⌨"),
    createGridButton("block animations", "🔕")
]);

/* COLOR CONTRAST */
const sec2 = createSection("COLOR CONTRAST");
createGridRow(sec2, [
    createGridButton("uncolored display", "⚙"),
    createGridButton("bright contrast", "🔆"),
    createGridButton("reverse contrast", "🔃")
]);

/* TEXT SIZE */
const sec3 = createSection("TEXT SIZE");
createGridRow(sec3, [
    createGridButton("increase text", "⬆"),
    createGridButton("decrease text", "⬇"),
    createGridButton("readable text", "🅣")
]);

/* HIGHLIGHT CONTENT */
const sec4 = createSection("HIGHLIGHTING CONTENT");
createGridRow(sec4, [
    createGridButton("underline links", "🔗"),
    createGridButton("underline headers", "H"),
    createGridButton("image titles", "🖼")
]);

/* ZOOM */
const sec5 = createSection("ZOOM IN");
createGridRow(sec5, [
    createGridButton("big white cursor", "⬚"),
    createGridButton("big black cursor", "⬛"),
    createGridButton("zoom screen", "🔍")
]);

/* Footer links */
const footer = document.createElement("div");
footer.innerHTML = `
    <div style="padding:12px;border-top:1px solid #eee;cursor:pointer;">accessibility statement</div>
    <div style="padding:12px;border-top:1px solid #eee;cursor:pointer;">report an accessibility problem</div>
    <div style="padding:12px;border-top:1px solid #eee;color:red;cursor:pointer;">reset settings</div>
`;
panel.appendChild(footer);

/* ---------- OPEN/CLOSE PANEL ---------- */
let open = false;

accessBtn.addEventListener("click", () => {
    panel.style.right = open ? "-350px" : "0";
    open = !open;
});

closeBtn.addEventListener("click", () => {
    panel.style.right = "-350px";
    open = false;
});
