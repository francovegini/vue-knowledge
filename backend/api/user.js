const bcrypt = require('bcrypt-nodejs');

module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation;

    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
    }

    const save = async (req, res) => {
        const user = { ...req.body };
        if (req.params.id) {
            user.id = req.params.id;
        }

        try {
            existsOrError(user.name, 'Nome não informado');
            existsOrError(user.email, 'E-mail não informado');
            existsOrError(user.password, 'Senha não informada');
            existsOrError(user.confirmPassword, 'Confirmação de senha inválida');
            equalsOrError(user.password, user.confirmPassword, 'Senhas não conferem');

            const userFromDB = await app.db('users')
                .where({ email: user.email }).first();
            if (!user.id) {
                notExistsOrError(userFromDB, "Usuário já foi cadastrado")
            }
        } catch (msg) {
            return res.status(400).send(msg);
        }
    }

    return { save };
}
