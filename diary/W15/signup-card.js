const rawName = "   mARIA  ";
const rawEmail = "  M.Lopez@Mail.Org ";
const birthYear = "2001";
const currentYear = 2026;

const originName = rawName.trim();

const trueName = originName.slice(0,1).toUpperCase() + originName.slice(1).toLowerCase();

const originEmail = rawEmail.trim().toLowerCase();

const userName = originEmail.slice(0, originEmail.indexOf("@"));

const domain = originEmail.slice(originEmail.indexOf("@")+1);

const age = currentYear - birthYear;

const maskedEmail = originEmail.slice(0, 1) + "*".repeat(originEmail.indexOf("@") - 1) + "@" + originEmail.slice(originEmail.indexOf("@")+1);

const isExample = domain.includes("example");


let card = "=".repeat(30);
card += `\n姓名：${trueName}`;
card += `\n邮箱：${originEmail}`;
card += `\n用户名：${userName}`;
card += `\n域名：${domain}`;
card += `\n年龄：${age}`;
card += `\n隐藏邮箱：${maskedEmail}`;
card += `\nexample 域名：${isExample}`;
card +=  "\n" + "=".repeat(30);
console.log(card);