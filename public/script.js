function updateTimestamp() {
  const tsEl = document.getElementById("timestamp");
  const now = new Date();
  tsEl.textContent = now.toLocaleString("es-DO", {
    dateStyle: "short",
    timeStyle: "medium",
  });
}

function updateBuildId() {
  const buildIdEl = document.getElementById("build-id");
  const buildId = window.BUILD_ID || "v1.0.0";
  buildIdEl.textContent = buildId;
}

document.addEventListener("DOMContentLoaded", () => {
  updateTimestamp();
  updateBuildId();
  setInterval(updateTimestamp, 60 * 1000);
});
