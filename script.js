document.addEventListener("DOMContentLoaded", () => {
    const snowContainer = document.createElement("div");
    snowContainer.id = "snow-container";
    document.body.appendChild(snowContainer);

    for (let i = 0; i < 100; i++) {
        const snowflake = document.createElement("div");
        snowflake.className = "snowflake";
        snowflake.style.left = Math.random() * 100 + "vw";
        snowflake.style.animationDelay = Math.random() * 2 + "s";
        snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
        snowflake.style.opacity = Math.random();
        snowflake.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
        snowContainer.appendChild(snowflake);
    }
});
