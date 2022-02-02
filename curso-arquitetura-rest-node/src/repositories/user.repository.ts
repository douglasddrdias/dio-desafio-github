import User from '../models/user.model';
import db from '../db';
import DatabaseError from '../models/errors/database.error.model';


class UserRepository {
    private readonly chaveCripto = 'my_salt';
    public nomeTabela = 'application_user';
    async findAllUsers(): Promise<User[]> {
        const query = `select u.uuid,
                     u.username 
                     from ${this.nomeTabela} u`;
        const { rows } = await db.query<User>(query);
        return rows || [];
    }
    async findById(uuid: string): Promise<User> {
        try {
            const query = `select u.uuid,
                     u.username 
                     from ${this.nomeTabela} u
                     where uuid = $1`;
            const values = [uuid];
            const { rows } = await db.query<User>(query, values);
            const [user] = rows;
            return user;
        } catch (error) {
            throw new DatabaseError('Erro na consulta por ID', error);
        }
    }
    async create(user: User): Promise<string> {
        const script = `
            INSERT INTO ${this.nomeTabela} (
                username,
                password
            )
            VALUES ($1, crypt($2, $3))
            RETURNING uuid
        `;
        const values = [user.username, user.password, this.chaveCripto];
        const { rows } = await db.query<{ uuid: string }>(script, values);
        const [newUser] = rows;
        return newUser.uuid;
    }
    async update(user: User): Promise<void> {
        const script = `
            UPDATE ${this.nomeTabela} 
            SET
                username = $1,
                password = crypt($2, $3)
            WHERE uuid = $4
        `;
        const values = [user.username, user.password, this.chaveCripto, user.uuid];
        await db.query(script, values);
    }

    async remove(uuid: string): Promise<void> {
        const script = `
            DELETE FROM ${this.nomeTabela} 
            WHERE uuid = $1
        `;
        const values = [uuid];
        await db.query(script, values);
    }
}

export default new UserRepository();