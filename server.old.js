const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Archivos estáticos (frontend)
app.use(express.static(path.join(__dirname, "public")));

// Endpoint de salud para prueba unitaria
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Solo levantar el servidor si se ejecuta directamente
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 DevOps Pipeline escuchando en el puerto ${PORT}`);
  });
}

module.exports = app;
