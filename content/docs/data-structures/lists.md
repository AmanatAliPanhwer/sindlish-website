---
title: Lists (fehrist)
summary: Manage ordered collections of data with the fehrist type.
enableTableOfContents: true
---

A **`fehrist`** (List) is an ordered collection of items. In Sindlish, lists are dynamic, meaning they can grow or shrink in size, and they can hold any mix of data types (though it is best practice to keep them consistent).

## 1. Creating a List

You can create a list using square brackets `[]` or the `fehrist()` keyword.

```sd
fal = ["Ambu", "Kela", "Soof"]
empty_list = []
numbers = fehrist(1, 2, 3)
```

---

## 2. Indexing (Getting Items)

Every item in a list has a position, starting from **0**.

```sd
fal = ["Ambu", "Kela", "Soof"]

likh(fal[0]) # Prints: Ambu
likh(fal[2]) # Prints: Soof
```

### Nested Indexing
If a list contains another list, you can chain brackets to reach the inner items.

```sd
matrix = [
    [1, 2],
    [3, 4]
]

likh(matrix[0][1]) # Prints: 2
```

---

## 3. Modifying Lists

Lists are **mutable**, meaning you can change their contents after creation.

```sd
names = ["Amanat", "Sindh"]
names[1] = "Sindlish" # Changes "Sindh" to "Sindlish"
```

---

## 4. List Methods

Sindlish provides several built-in methods to manipulate lists.

| Method | Description | Example |
| :--- | :--- | :--- |
| **`.vadh()`** | Add an item to the end | `fal.vadh("Khat")` |
| **`.kaadh()`** | Remove and return the last item | `item = fal.kaadh()` |
| **`.saaf()`** | Remove all items | `fal.saaf()` |
| **`.uulat()`** | Reverse the order of items | `fal.uulat()` |
| **`.ghat()`** | Get the number of items | `likh(fal.ghat())` |

```sd
nums = [1, 2, 3]
nums.vadh(4)
likh(nums) # Prints: [1, 2, 3, 4]
```

---

## 5. Iterating over Lists

The most common way to use a list is to loop through it using a `tor` loop.

```sd
todo = ["Code", "Eat", "Sleep"]

tor task in todo {
    likh("Today I will: " + task)
}
```
