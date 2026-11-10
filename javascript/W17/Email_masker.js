function maskEmail(email) {
    const atIndex = email.indexOf("@");
    return email.slice(0, 1) + "*".repeat(atIndex - 2) + email.slice(atIndex - 1, atIndex) + email.slice(atIndex);
}
const email = "apple.pie@example.com";
console.log(maskEmail(email));
