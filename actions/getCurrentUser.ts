import { currentUser as user} from "@clerk/nextjs/server";

export const currentUser = async () => {
    return await user();
}