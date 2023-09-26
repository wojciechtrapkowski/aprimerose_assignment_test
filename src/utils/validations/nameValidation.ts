export const nameValidation = {
    required: {
        value: true,
        message: 'Name is required',
    },
    pattern: {
        value: /^[a-zA-Z\s'-]+$/,
        message: 'Invalid name',
    },
}
