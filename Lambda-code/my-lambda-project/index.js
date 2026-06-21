// 1. Import the installed dependency
import { v4 as uuidv4 } from "uuid";

// 2. The main handler function AWS will call
export const handler = async (event, context) => {
  try {
    console.log("Lambda triggered with event:", JSON.stringify(event));

    // Generate a unique ID using our npm package
    const uniqueId = uuidv4();

    // Prepare a professional JSON response
    const responseBody = {
      message: "Hello from your local VS Code deployment!",
      generatedId: uniqueId,
      timestamp: new Date().toISOString(),
    };

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(responseBody),
    };
  } catch (error) {
    console.error("Error executing lambda:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
