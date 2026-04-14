function generatePassword(len, lower, upper, numbers, symbols) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";
    
    let allowedChars = "";
    let password = "";
    
    allowedChars += lower ? lowercaseChars : "";
    allowedChars += upper ? uppercaseChars : "";
    allowedChars += numbers ? numberChars : "";
    allowedChars += symbols ? symbolChars : "";
    
    if (len <= 0) {
        return `(password length must be at least 1)`;
    }

    if (allowedChars === 0) {
        return `(At least 1 set of characters needs to be selected)`;
    }

    for (let i = 0; i < len; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length)
        password += allowedChars[randomIndex];
    }
    
    return password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeuppercase = true;
const includeNumbers = true;
const includeSymbols = true;


const password = generatePassword(passwordLength, 
                                includeLowercase, 
                                includeuppercase, 
                                includeNumbers, 
                                includeSymbols)

console.log(`Generated Password: ${password}`)