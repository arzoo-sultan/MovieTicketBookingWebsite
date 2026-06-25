import { inngest } from "../index.js"; 
import User from "../../models/model/user.model.js";

// Create the function and assign it to a variable first
const syncUserUpdation = inngest.createFunction(
    { id: 'update-user-from-clerk' }, 
    { event: 'clerk/user.updated' },
    async ({ event }) => {
        const { id, first_name, last_name, email_addresses, image_url } = event.data;
        
        const userData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: `${first_name} +' '+${last_name}`, 
            image: image_url
        };
        
        await User.findByIdAndUpdate(id,userData);
    }
);

// Export it as the default export
export default syncUserUpdation;