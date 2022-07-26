const radioButtons = [
    {
       id: 'color-one',
       value: 1 
    },
    {
       id: 'color-two',
       value: 2
    },
    {
       id: 'color-three',
       value: 3 
    },
    {
       id: 'color-four',
       value: 4
    },
]

const checkboxes = [
    {
        value: 'swimming',
        text: 'Swimming',
        checked: false
    },
    {
        value: 'bathing',
        text: 'Bathing',
        checked: false
    },
    {
        value: 'chatting',
        text: 'Chatting',
        checked: false
    },
    {
        value: 'noTime',
        text: "I don't like to spend time with it",
        checked: false
    },
]

const text = {
    title: 'Tell us what you think about your rubber duck!',
    radioTitle: 'How do you rate your rubber duck colour?',
    checkTitle: 'How do you like to spend time with your rubber duck',
    textTitle: 'What else have you got to say about your rubber duck?',
    username: 'Put your name here (if you feel like it):',
    email: 'Leave us your email pretty please??'
}

const initialState = {
    color: '',
    timeSpent: [],
    review: '',
    username: '',
    email: ''
}

export {radioButtons, checkboxes, text, initialState}