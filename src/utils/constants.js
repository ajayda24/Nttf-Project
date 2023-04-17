let serverUrl;
if (process.env.NODE_ENV === "development") {
  serverUrl = "http://localhost:3001";
} else {
  serverUrl = "https://aiultra-backend-production.up.railway.app";
}

module.exports = { serverUrl };
