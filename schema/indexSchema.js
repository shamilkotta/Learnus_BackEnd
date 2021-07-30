const ErrorResponse = require('../utils/ErrorResponse')

module.exports = {
    signupSchema: {
        name: {
            notEmpty: {
                options: { ignore_whitespace: true }
            },
            isString: true,
            isLength: {
                errorMessage: 'Name must contain at least 3 characters',
                options: { min: 3 }
            },
            errorMessage: 'Name cannot be empty'
        },
        email: {
            notEmpty: true,
            isEmail: true,
            trim: true,
            normalizeEmail: true,
            errorMessage: 'Enter a valid email'
        },
        password: {
            notEmpty: true,
            trim: true,
            isStrongPassword: {
                errorMessage: 'Password must contain at least one uppercase, one lowercase, one number, and one special character',
            },
            isLength: {
                errorMessage: 'Password can only be up to 16 characters long',
                options: {max: 16}
            },
            custom: {
                errorMessage: 'Password cannot contain whitespaces',
                options: (value, {req})=> {
                    return !/\s/g.test(value)
                },
            },
            errorMessage: 'Password cannot be empty',
        },
        confirmPassword: {
            notEmpty: true,
            trim: true,
            custom: {
                errorMessage: "Passwords didn't match",
                options: (value, { req }) => {
                    if (value !== req.body.password) {
                        return false
                    } else {
                        return true
                    }
                }
            },
            errorMessage: 'Confirm password cannot be empty',
        }
    },

    loginSchema: {
        email: {
            notEmpty: true,
            isEmail: true,
            trim: true,
            normalizeEmail: true,
            errorMessage: 'Enter a valid email'
        },
        password: {
            notEmpty: true,
            trim: true,
            isStrongPassword: {
                errorMessage: 'Password must contain at least one uppercase, one lowercase, one number, and one special character',
            },
            isLength: {
                errorMessage: 'Password can only be up to 16 characters long',
                options: {max: 16}
            },
            custom: {
                errorMessage: 'Password cannot contain whitespaces',
                options: (value, {req})=> {
                    return !/\s/g.test(value)
                },
            },
            errorMessage: 'Password cannot be empty',
        },
    }
}