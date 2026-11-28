const library = {
  b1: { title: "Dune", author: "Frank Herbert", available: true, borrowers: [] },
  b2: { title: "Hamlet", author: "William Shakespeare", available: false, borrowers: ["Cat"] }
};

function getBookInfo(id) {
    if (!library[id]) {
        return `No book with id ${id}`;
    } else {
        if (library[id].available) {
            return `${library[id].title} by ${library[id].author} (available)`;
        }
        return `${library[id].title} by ${library[id].author} (borrowed)`;       
    }
}

function addBook(id, title, author) {
    if (library[id]) {
        return `${id} already exists`;
    }
    library[id] = {title, author, available: true, borrowers: []};
    return `Added ${title}`;
}

function borrowBook(id, person){
    if (!library[id]) {
        return `No book with id ${id}`
    } else {
        if (!library[id].available) {
            return `${library[id].title} is already borrowed`;
        }
        library[id].available = false;
        library[id].borrowers.push(person);
        return `${person} borrowed ${library[id].title}`;
    }
}

function returnBook(id) {
    if (!library[id]) {
        return `No book with id ${id}`;
    } else {
        if (library[id].available) {
            return `${library[id].title} is not borrowed`;
        }
        library[id].available = true;
        return `${library[id].title} returned`;        
    }
}

function getHistory(id) {
    if (!library[id]) {
        return `No book with id ${id}`;
    } else {
        if (library[id].borrowers.length === 0) {
            return `${library[id].title}: no one yet`
        } 
        return `${library[id].title}: ${library[id].borrowers.join(", ")}`
        
    }
}

// 在这里写 5 个函数

console.log(getBookInfo("b1"));               // Dune by Frank Herbert (available)
console.log(getBookInfo("b2"));               // Hamlet by William Shakespeare (borrowed)
console.log(getBookInfo("b9"));               // No book with id b9
console.log(addBook("b1", "Dune", "Frank Herbert")); // b1 already exists
console.log(addBook("b3", "Emma", "Jane Austen"));   // Added Emma
console.log(getHistory("b3"));                // Emma: no one yet
console.log(borrowBook("b3", "Ann"));         // Ann borrowed Emma
console.log(borrowBook("b3", "Bob"));         // Emma is already borrowed
console.log(getBookInfo("b3"));               // Emma by Jane Austen (borrowed)
console.log(returnBook("b3"));                // Emma returned
console.log(returnBook("b3"));                // Emma is not borrowed
console.log(borrowBook("b3", "Bob"));         // Bob borrowed Emma
console.log(getHistory("b3"));                // Emma: Ann, Bob
console.log(getHistory("b2"));                // Hamlet: Cat
console.log(returnBook("b9"));                // No book with id b9