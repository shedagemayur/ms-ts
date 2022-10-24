import users from "../users.dump";

class User {
    constructor(
    ) {
    }
    public getUsers(): object[] {
        return users
    }
    public getUser(id: number): object {
        let response: object = {};
        let user: object[];

        user = users.filter(user => user.id === id);
        if (user.length === 0) {
            response = {
                message: 'User not found'
            }
        } else {
            response = user[0];
        }

        return response;
    }
}

export default User;