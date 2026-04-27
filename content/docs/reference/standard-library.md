---
title: Standard Library
summary: Explore the built-in functions that come with Sindlish.
enableTableOfContents: true
---

Sindlish comes with a powerful set of built-in functions to help you interact with the system and manipulate data.

## Output Functions

### `likh(value)`
The most commonly used function. It prints any value to the console.
```sd
likh("Salam!")
```

---

## Math Functions

### `qadr(value)`
Returns the absolute (positive) value of a number.
```sd
likh(qadr(-10)) # Prints: 10
```

### `gol(value)`
Rounds a decimal number to the nearest whole number.
```sd
likh(gol(3.7)) # Prints: 4
```

---

## String Functions

### `ghat(value)`
Returns the length (number of characters) of a string.
```sd
likh(ghat("Sindh")) # Prints: 5
```

### `uulat(text)`
Returns a reversed version of the string.
```sd
likh(uulat("ABC")) # Prints: CBA
```

---

## System Functions

### `waqt()`
Returns the current system time in milliseconds. Useful for measuring performance.

### `qisam(value)`
Returns a string representing the data type of the value.
```sd
likh(qisam(10)) # Prints: adad
```

---

## Global Constants

| Constant | Description |
| :--- | :--- |
| **`VERSION`** | Current Sindlish version string |
| **`PLATFORM`** | The OS running the interpreter |
| **`NULL`** | Equivalent to `khali` |
