import fs, { writeFileSync } from "fs";
const userDb = "/Users/23LP5619/Desktop/backend/model/users.json";

export const getUserByEmail = async (request, response) => {
  try {
    const { email: paramEmail } = request.params;

    const allUsersJson = await fs.readFileSync(userDb, "utf-8");
    const allUsers = JSON.parse(allUsersJson);

    const exactUser = allUsers.find(({ email }) => email === paramEmail);
    return exactUser;
  } catch (error) {
    throw new Error(error.message);
  }
};
