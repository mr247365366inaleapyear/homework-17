import { join } from "path";

export default function(app) {
  app.get("/exercise", function(_req, res) {
    res.sendFile(join(__dirname, "../public/exercise.html"));
  });
  app.get("/stats", function(_req, res) {
    res.sendFile(join(__dirname, "../public/stats.html"));
  });
};