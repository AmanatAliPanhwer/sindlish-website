---
title: Code Examples
summary: Learn Sindlish by looking at real-world code snippets.
enableTableOfContents: true
---

The best way to learn any language is by reading and writing code. Here are some common algorithms implemented in Sindlish.

## 1. Fibonacci Sequence

```sd
kaam fib(n: adad) -> adad {
    agar n <= 1 {
        wapas n
    }
    wapas fib(n - 1) + fib(n - 2)
}

# Print the first 10 numbers
tor i = 0; i < 10; i = i + 1 {
    likh(fib(i))
}
```

---

## 2. Filtering a List

```sd
kaam get_evens(nums: fehrist) -> fehrist {
    evens = []
    tor n in nums {
        agar n % 2 == 0 {
            evens.vadh(n)
        }
    }
    wapas evens
}

numbers = [1, 2, 3, 4, 5, 6, 7, 8]
likh(get_evens(numbers)) # [2, 4, 6, 8]
```

---

## 3. Student Grade Manager

```sd
students = [
    { "name": "Ali", "score": 85 },
    { "name": "Hassan", "score": 42 },
    { "name": "Sara", "score": 91 }
]

tor s in students {
    result = ""
    agar s["score"] >= 50 {
        result = "Passed"
    } nahito {
        result = "Failed"
    }
    
    likh(s["name"] + ": " + result)
}
```

---

## 4. Handling Input Errors

```sd
kaam parse_user_input(input: lafz) -> Result {
    val = adad(input)
    agar val < 0 {
        wapas ghalti("Value cannot be negative")
    }
    wapas val
}

# Safe usage
val = parse_user_input("-5").bachao(0)
likh(val) # 0
```
