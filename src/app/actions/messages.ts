// This would be a server action defined in a server file or as a utility function
import getClient from "../../../db/db";

// Server action for creating a message
export async function createMessage(message: string) {
  try {
    const client = await getClient(); // Ensure this correctly fetches your DB client

    await client.chat.create({
      data: {
        message: message,
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Error creating message:", error);
    return { success: false, error: "Failed to create message" };
  }
}
