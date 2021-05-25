const messages = [
    'oscar',
    'ana',
    'diego',
    'laura',
    'steven',
    'carlos',
    'pepe',
    'sara',
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg };