import { Inngest } from "inngest";

// 1. Initialize and export the client FIRST so your function files can safely use it
export const inngest = new Inngest({ id: "movie-ticket-booking" });

// 2. Import your functions AFTER the client is initialized
import syncUserCreation from "./functions/function.syncUserCreation.js";
import syncUserDeletion from "./functions/function.syncUserDeletion.js";
import syncUserUpdation from "./functions/function.syncUserUpdation.js";
// 3. Export the bundled array
export const functions = [syncUserCreation,syncUserDeletion,
syncUserUpdation
];