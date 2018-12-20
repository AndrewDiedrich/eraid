const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//recieves recipeient emails string entered on survey form creation
export default (emails) => {
    const invalidEmails = emails
        .split(',')
        .map(email => email.trim())
        .filter(email => re.test(email) === false) //dump false emails
    if (invalidEmails.length) {
        return `These emails are invalid: ${invalidEmails}`;
    }
};
