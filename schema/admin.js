
module.exports = {
    newCourseSchema: {
        course__code: {
            trim: true,
            isString: true,
            isUppercase: {
                errorMessage: 'Course code must be upper case letters'
            },
            notEmpty: {
                options: { ignore_whitespace: true }
            },
            isAlphanumeric: {
                errorMessage: 'Course Code cannot contain special characters or whitespaces'
            },
            isLength: {
                errorMessage: 'Course Code must contain at least 5 characters',
                options: { min: 5 }
            },
            errorMessage: 'Course Code cannot be empty',
        },
        course__title: {
            trim: true,
            isString: true,
            notEmpty: {
                options: { ignore_whitespace: true }
            },
            isLength: {
                errorMessage: 'Course title must be 10 to 25 characters long',
                options: [{min: 10}, {max: 25}]
            },
            errorMessage: 'Course title cannot be empty',
        },
        course__shortDescription: {
            trim: true,
            isString: true,
            notEmpty: {
                options: { ignore_whitespace: true }
            },
            isLength: {
                errorMessage: 'Course short description must be 10 to 25 characters long',
                options: [{min: 10}, {max: 25}]
            },
            errorMessage: 'Course short description cannot be empty',
        },
        course__description: {
            trim: true,
            isString: true,
            notEmpty: {
                options: { ignore_whitespace: true }
            },
            isLength: {
                errorMessage: 'Course description must be 10 to 25 characters long',
                options: [{min: 10}, {max: 25}]
            },
            errorMessage: 'Course description cannot be empty',
        },
        course__benefits: {
            trim: true,
            isString: true,
            notEmpty: {
                options: { ignore_whitespace: true }
            },
            isLength: {
                errorMessage: 'Course benefits must be 10 to 25 characters long',
                options: [{min: 10}, {max: 25}]
            },
            errorMessage: 'Course benefits cannot be empty',
        },
        course__requirements: {
            trim: true,
            isString: true,
            notEmpty: {
                options: { ignore_whitespace: true }
            },
            isLength: {
                errorMessage: 'Course requirements must be 10 to 25 characters long',
                options: [{min: 10}, {max: 25}]
            },
            errorMessage: 'Course requirements cannot be empty',
        },
        course__target: {
            trim: true,
            isString: true,
            notEmpty: {
                options: { ignore_whitespace: true }
            },
            isLength: {
                errorMessage: 'Course target must be 10 to 25 characters long',
                options: [{min: 10}, {max: 25}]
            },
            errorMessage: 'Course target cannot be empty',
        },
        course__price: {
            trim: true,
            notEmpty: {
                options: { ignore_whitespace: true }
            },
            isAlphanumeric: {
                errorMessage: 'Course price can only be numeric values'
            },
            errorMessage: 'Course price cannot be empty',
        },
        course__duration: {
            trim: true,
            notEmpty: {
                options: { ignore_whitespace: true }
            },
            errorMessage: 'Course duration cannot be empty',
        },
        course__language: {
            trim: true,
            isString: true,
            notEmpty: {
                options: { ignore_whitespace: true }
            },
            errorMessage: 'Course language cannot be empty',
        },
        course__resources: {
            trim: true,
            isString: true,
            notEmpty: {
                options: { ignore_whitespace: true }
            },
            isLength: {
                errorMessage: 'Course resources must be 10 to 25 characters long',
                options: [{min: 10}, {max: 25}]
            },
            errorMessage: 'Course resources cannot be empty',
        },
        course__benefits1: {
            trim: true,
            isString: true,
            notEmpty: {
                options: { ignore_whitespace: true }
            },
            isLength: {
                errorMessage: 'Course benefits must be 10 to 25 characters long',
                options: [{min: 10}, {max: 25}]
            },
            errorMessage: 'Course benefits cannot be empty',
        },
        course__benefits2: {
            trim: true,
            isString: true,
            optional: true,
            notEmpty: {
                options: { ignore_whitespace: true }
            },
            isLength: {
                errorMessage: 'Course benefits must be 10 to 25 characters long',
                options: [{min: 10}, {max: 25}]
            },
            errorMessage: 'Course benefits cannot be empty',
        },
        course__benefits3: {
            trim: true,
            isString: true,
            optional: true,
            notEmpty: {
                options: { ignore_whitespace: true }
            },
            isLength: {
                errorMessage: 'Course benefits must be 10 to 25 characters long',
                options: [{min: 10}, {max: 25}]
            },
            errorMessage: 'Course benefits cannot be empty',
        },
        course__benefits4: {
            trim: true,
            isString: true,
            optional: true,
            notEmpty: {
                options: { ignore_whitespace: true }
            },
            isLength: {
                errorMessage: 'Course benefits must be 10 to 25 characters long',
                options: [{min: 10}, {max: 25}]
            },
            errorMessage: 'Course benefits cannot be empty',
        },
        // course__coverImg: "shamil",
    }
} 