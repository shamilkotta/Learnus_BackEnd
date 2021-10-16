
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
                errorMessage: 'Course Code must be 5 characters',
                options: [{ min: 5 }, {max: 5}]
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
                errorMessage: 'Course title must be 75 to 110 characters long',
                options: [{min: 75}, {max: 110}]
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
                errorMessage: 'Course short description must be 110 to 200 characters long',
                options: [{min: 110}, {max: 200}]
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
                errorMessage: 'Course description must be 650 to 1000 characters long',
                options: [{min: 650}, {max: 1000}]
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
                errorMessage: 'Course benefits must be 10 to 900 characters long',
                options: [{min: 10}, {max: 900}]
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
                errorMessage: 'Course requirements must be 10 to 750 characters long',
                options: [{min: 10}, {max: 750}]
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
                errorMessage: 'Course target must be 10 to 750 characters long',
                options: [{min: 10}, {max: 750}]
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
        course__noModules: {
            trim: true,
            notEmpty: {
                options: { ignore_whitespace: true }
            },
            errorMessage: 'No of modules cannot be empty',
        },
        course__language: {
            trim: true,
            isString: true,
            notEmpty: {
                options: { ignore_whitespace: true }
            },
            isLength: {
                errorMessage: 'Course language can only upto 28 characters long',
                options: {max: 25}
            },
            errorMessage: 'Course language cannot be empty',
        },
        course__benefits1: {
            trim: true,
            isString: true,
            notEmpty: {
                options: { ignore_whitespace: true }
            },
            isLength: {
                errorMessage: 'Course benefits can only upto 28 characters long',
                options: {max: 28}
            },
            errorMessage: 'Course benefits cannot be empty',
        },
        course__benefits2: {
            trim: true,
            isString: true,
            notEmpty: {
                options: { ignore_whitespace: true }
            },
            isLength: {
                errorMessage: 'Course benefits can only upto 28 characters long',
                options: {max: 28}
            },
            errorMessage: 'Course benefits cannot be empty',
        },
        course__benefits3: {
            trim: true,
            isString: true,
            notEmpty: {
                options: { ignore_whitespace: true }
            },
            isLength: {
                errorMessage: 'Course benefits can only upto 28 characters long',
                options: {max: 28}
            },
            errorMessage: 'Course benefits cannot be empty',
        },
        course__benefits4: {
            trim: true,
            isString: true,
            notEmpty: {
                options: { ignore_whitespace: true }
            },
            isLength: {
                errorMessage: 'Course benefits can only upto 28 characters long',
                options: {max: 28}
            },
            errorMessage: 'Course benefits cannot be empty',
        },
        course__benefits5: {
            trim: true,
            isString: true,
            notEmpty: {
                options: { ignore_whitespace: true }
            },
            isLength: {
                errorMessage: 'Course benefits can only upto 28 characters long',
                options: {max: 28}
            },
            errorMessage: 'Course benefits cannot be empty',
        },
        course__coverImg: {
            trim: true,
            isString: true,
            notEmpty: {
                options: { ignore_whitespace: true }
            },
            errorMessage: 'Enter cover image url'
        },
        course__coverVideo: {
            trim: true,
            isString: true,
            notEmpty: {
                options: { ignore_whitespace: true }
            },
            errorMessage: 'Enter cover video url'
        },
    }
} 