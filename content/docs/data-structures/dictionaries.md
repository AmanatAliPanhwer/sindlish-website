---
title: Dictionaries (lughat)
summary: Store data in key-value pairs for fast lookup using lughat.
enableTableOfContents: true
---

A **`lughat`** (Dictionary) is a collection of key-value pairs. Think of it like a real-world dictionary: you look up a "word" (the key) to find its "definition" (the value).

## 1. Creating a Dictionary

Dictionaries use curly braces `{}` and colons `:` to separate keys from values.

```sd
user = {
    "naalo": "Amanat",
    "umar": 25,
    "city": "Karachi"
}
```

---

## 2. Accessing & Modifying

You access values by providing the key inside square brackets.

```sd
likh(user["naalo"]) # Prints: Amanat

# To add or update a value:
user["job"] = "Programmer"
```

---

## 3. The Unhashable Rule

In Sindlish, a **key** must be an "immutable" type (something that cannot change). This means you can use Strings, Integers, and Booleans as keys, but you **cannot** use a List as a key.

```sd
# This is valid:
data = { 10: "Number Key" }

# This will ERROR:
# data = { [1, 2]: "List Key" }
```

---

## 4. Dictionary Methods

| Method | Description | Example |
| :--- | :--- | :--- |
| **`.chabi()`** | Get a list of all keys | `user.chabi()` |
| **`.qimat()`** | Get a list of all values | `user.qimat()` |
| **`.vadh()`** | Merge another dictionary into this one | `user.vadh(other_dict)` |
| **`.kaadh(key)`**| Remove a specific key | `user.kaadh("umar")` |

```sd
user = { "name": "Amanat" }
likh(user.chabi()) # Prints: ["name"]
```

---

## 5. Iterating over Dictionaries

When you loop over a dictionary, you get the keys.

```sd
prices = { "Apple": 100, "Banana": 50 }

tor item in prices {
    likh(item + " costs " + lafz(prices[item]))
}
```
