---
title: Code Examples
summary: Learn Sindlish by looking at real-world code snippets.
enableTableOfContents: true
---

The best way to learn any language is by reading and writing code. Here are some common algorithms implemented in Sindlish.

## 1. Fibonacci Sequence (Recursion)

```sd
kaam fib(n: adad) -> adad {
    agar n <= 1 {
        wapas n
    }
    wapas fib(n - 1) + fib(n - 2)
}

# Print the first 10 numbers
har i mein range(10) {
    likh(fib(i))
}
```

---

## 2. Filtering a List (Even Numbers)

```sd
kaam get_evens(nums: fehrist) -> fehrist {
    evens = []
    har n mein nums {
        agar n % 2 == 0 {
            evens.wadha(n)
        }
    }
    wapas evens
}

numbers = [1, 2, 3, 4, 5, 6, 7, 8]
likh(get_evens(numbers)) # Prints: [2, 4, 6, 8]
```

---

## 3. Student Grade Manager

```sd
students = [
    { "name": "Ali", "score": 85 },
    { "name": "Hassan", "score": 42 },
    { "name": "Sara", "score": 91 }
]

har s mein students {
    result = ""
    agar s["score"] >= 50 {
        result = "Passed"
    } warna {
        result = "Failed"
    }
    
    likh(s["name"] + ": " + result)
}
```

---

## 4. Robust Input Processing (Result System)

```sd
kaam parse_age(input_text: lafz) {
    # Typecasting can fail if the string isn't a number
    age = adad(input_text)
    
    agar age < 0 {
        wapas ghalti("Umar negative nathi thi saghjay!")
    }
    
    wapas age
}

# 1. Using bachao for a safe default
val1 = parse_age("abc").bachao(0)
likh("Value 1: ", val1) # Prints: 0

# 2. Using ? to propagate
kaam process() {
    age = parse_age("25")?
    likh("Valid age processed: ", age)
}

process()
```

---

## 5. Dictionary Operations

```sd
inventory = { "Apple": 10, "Banana": 5 }

# Safely get a value with a fallback
count = inventory.hasil("Mango", 0)
likh("Mangoes in stock: " + lafz(count))

# Loop through keys
har item mein inventory {
    stock = inventory[item]
    likh(item + " -> " + lafz(stock))
}
```
