---
title: Handling Errors
summary: Build crash-proof software using the Result system and the ghalti keyword.
enableTableOfContents: true
---

Most programming languages use "Exceptions" (try/catch), which can make code hard to follow. Sindlish uses a more modern **Result Model**. Instead of crashing, a function that might fail returns a "Result" that you must explicitly handle.

## 1. The `ghalti` (Error) Keyword

If something goes wrong in your function, you return a **`ghalti`**.

```sd
kaam divide(a: adad, b: adad) -> Result {
    agar b == 0 {
        wapas ghalti("Division by zero is not allowed!")
    }
    wapas a / b
}
```

---

## 2. Handling Results

When you call a function that returns a `Result`, you have four ways to handle it.

### A. The `?` Operator (Safe Propagate)
If the result is an error, the `?` operator immediately returns that error from the current function.

```sd
kaam calculate() -> Result {
    val = divide(10, 0)? # If this fails, calculate() returns the error immediately.
    wapas val + 5
}
```

### B. The `.bachao()` Method (Default Value)
If you don't want to crash or return an error, you can provide a fallback value.

```sd
val = divide(10, 0).bachao(0) # If it fails, val becomes 0 instead of an error.
```

### C. The `.lazmi()` Method (Panic if Error)
Use this if you are 100% sure the code won't fail. If it *does* fail, the program will crash with a clear message.

```sd
val = divide(10, 2).lazmi()
```

### D. The `!!` Operator (Total Panic)
The "Nuclear Option." This forces the value out of the result. If it is an error, the program crashes instantly.

```sd
val = divide(10, 0)!! # CRASH!
```

---

## 3. Why use Results?

By using the Result model, Sindlish forces you to think about errors *while* you are writing the code, not after it crashes in production. This leads to much more reliable, "crash-proof" software.

```sd
# Example of robust error handling
kaam fetch_user_data(id: adad) -> Result {
    # logic to get data...
    wapas ghalti("User not found")
}

user = fetch_user_data(1).bachao("Guest User")
likh("Welcome, " + user)
```
