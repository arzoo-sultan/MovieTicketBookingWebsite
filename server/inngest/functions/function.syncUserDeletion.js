import { inngest } from "../index.js"; 
import User from "../../models/model/user.model.js";

// Create the function and assign it to a variable first
const syncUserDeletion = inngest.createFunction(
    { id: 'delete-user-with-clerk' }, 
    { event: 'clerk/user.deleted' },
    async ({ event }) => {
        const { id} = event.data;
        await User.findByIdAndDelete(id);
    }
);

// Export it as the default export
export default syncUserDeletion;