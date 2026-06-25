import { inngest } from "./client.js";
import syncUserCreation from "./functions/function.syncUserCreation.js";
import syncUserDeletion from "./functions/function.syncUserDeletion.js";
import syncUserUpdation from "./functions/function.syncUserUpdation.js";

// Export everything together for your express/next handler to use
export { inngest };
export const functions = [
    syncUserCreation,
    syncUserDeletion,
    syncUserUpdation
];