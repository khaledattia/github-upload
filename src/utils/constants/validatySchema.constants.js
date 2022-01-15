

const validatySchema = {
    title: {
        required: true,
        regex: /^[a-zA-Z\s]+$/,
    },
    description: {
        required: true,
        regex: false,
    },
    priority: {
        required: true,
        regex: false,
    },
    user: {
        required: true,
        regex: false
    },
    status: {
        required: true,
        regex: false
    }
}

export default validatySchema;