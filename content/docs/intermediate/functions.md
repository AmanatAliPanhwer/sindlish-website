---
title: Functions
summary: Organize your code into reusable, modular blocks using kaam.
enableTableOfContents: true
---

Functions (defined with the **`kaam`** keyword) are blocks of reusable code designed to perform a specific task. They help you avoid repeating yourself and make your programs much easier to read and maintain.

## 1. Defining a Function

A basic function is defined with a name and a block of code.

```sd
kaam salam() {
    likh("Salam Dunya!")
}

# To use the function, you must "call" it
salam()
```

---

## 2. Parameters (Input)

Functions can accept inputs, called parameters. You can even specify the type of the parameter for extra safety.

```sd
kaam greet(naalo: lafz) {
    likh("Salam, " + naalo + "!")
}

greet("Amanat")
greet("Sindh")
```

---

## 3. Return Values (Output)

Functions can calculate a result and "give it back" to you using the **`wapas`** (return) keyword. You must specify the return type using the `->` arrow.

```sd
kaam add(a: adad, b: adad) -> adad {
    wapas a + b
}

result = add(10, 20)
likh(result) # Prints: 30
```

### Early Returns
The `wapas` keyword immediately stops the function and exits. This is useful for error checking.

```sd
kaam check_age(age: adad) -> lafz {
    agar age < 0 {
        wapas "Invalid age"
    }
    
    agar age >= 18 {
        wapas "Adult"
    }
    
    wapas "Minor"
}
```

---

## 4. Scope (Parda)

Variables created inside a function are "private" to that function. They cannot be accessed from outside. This is called **Block Scope**.

```sd
kaam test() {
    secret = 123
}

test()
# likh(secret) <-- This would throw an error! 'secret' only exists inside test().
```

---

## 5. First-Class Functions

In Sindlish, functions are "First-Class Citizens." This means you can store a function inside a variable or pass it as an argument to another function!

```sd
kaam say_hi() {
    likh("Hi!")
}

my_func = say_hi
my_func() # This works!
```

Functions are the building blocks of any professional application. By breaking your code into small, specialized functions, you make it easier to test, debug, and share with others.
