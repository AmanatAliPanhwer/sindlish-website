---
title: Conditions (If/Else)
summary: Learn how to make decisions in your code using agar, warna, and yawari.
enableTableOfContents: true
---

Conditionals are the "brains" of your program. They allow your code to take different paths depending on whether a specific statement is true (`sach`) or false (`koorh`).

## 1. The `agar` Statement

The `agar` (if) statement executes a block of code ONLY if the condition inside the brackets is true.

```sd
umar = 20

agar umar >= 18 {
    likh("You are an adult!")
}
```

---

## 2. The `warna` (Else) Statement

If the `agar` condition is false, you can use `warna` to provide an alternative block of code to run.

```sd
umar = 15

agar umar >= 18 {
    likh("You are an adult!")
} warna {
    likh("You are still a minor.")
}
```

---

## 3. The `yawari` (Else If) Statement

When you have more than two possibilities, use `yawari` to check multiple conditions in sequence.

```sd
markoon = 75

agar markoon >= 80 {
    likh("Grade: A")
} yawari markoon >= 60 {
    likh("Grade: B")
} yawari markoon >= 40 {
    likh("Grade: C")
} warna {
    likh("Grade: F")
}
```

---

## 4. Truthiness Rules

In Sindlish, you don't always have to use a comparison operator inside an `agar`. Values themselves have an inherent "Truthiness":

| Value | Truthiness |
| :--- | :--- |
| **`0` / `0.0`** | `koorh` (False) |
| **`""` (Empty string)** | `koorh` (False) |
| **`khali` (Null)** | `koorh` (False) |
| **Any other number** | `sach` (True) |
| **Any non-empty string** | `sach` (True) |

```sd
naalo = "Sindlish"

agar naalo {
    likh("Name is set!") # This will run because "Sindlish" is not empty.
}
```

---

## 5. Nested Conditions

You can place an `agar` statement inside another `agar` statement to create complex logic trees.

```sd
is_logged_in = sach
is_admin = koorh

agar is_logged_in {
    agar is_admin {
        likh("Welcome, Admin!")
    } warna {
        likh("Welcome, User!")
    }
} warna {
    likh("Please log in first.")
}
```
