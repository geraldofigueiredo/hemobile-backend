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
    USER_NOT_FOUND: {
      name: 'USER_NOT_FOUND',
      message: 'usuário não encontrado',
    },
  },
  BLOOD_CENTER: {
    BLOOD_CENTER_NOT_FOUND: {
      name: 'BLOOD_CENTER_NOT_FOUND',
      message: 'hemocentro não encontrado',
    },
  },
  DONATION: {
    ERROR_CREATE_DONATION: {
      name: 'ERROR_CREATE_DONATION',
      message: 'erro ao marcar doação',
    },
  },
};

export default errors;
