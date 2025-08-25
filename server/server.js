const app = require("./app");
require("dotenv").config();
const { sql, testConnection } = require("./dbConnection");

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    // Test the database connection
    await testConnection();

    // Start the server
    app.listen(PORT, () => {
      console.log(`🚀 App running on port ${PORT}...`);
    });
  } catch (error) {
    console.error("Server failed to start:", error);
    process.exit(1);
  }

  // This code listens for the SIGINT signal (often sent when a user presses Ctrl+C in the terminal to terminate a Node.js application) and closes the database connection and then exits the process - terminate application.
  process.on("SIGINT", async () => {
    console.log("Closing database connections...");
    await sql.end(); // Closes all connections in the pool
    process.exit(0);
  });
})();
