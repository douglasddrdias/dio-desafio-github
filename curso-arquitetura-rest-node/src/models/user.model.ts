type User = {
    // a interrogação define que o campo é opcional
    uuid?: string;
    username: string;
    password?: string;
}

export default User;