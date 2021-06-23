const errors = {
  USERS: {
    EMAIL_ALREADY_EXISTS: {
      name: 'EMAIL_ALREADY_EXISTS',
      message: 'email já cadastrado',
    },
    PASSWORD_EMAIL_DO_NOT_MATCH: {
      name: 'PASSWORD_EMAIL_DO_NOT_MATCH ',
      message: 'email e/ou senha não coincidem',
    },
    INVALID_EMAIL: {
      name: 'INVALID_EMAIL',
      message: 'email inválido',
    },
    ERROR_CREATE_USER: {
      name: 'ERROR_CREATE_USER',
      message: 'erro ao criar usuário',
    },
  },
};

export default errors;
