---
title: Sets (majmuo)
summary: Store unique, unordered items using the majmuo type.
enableTableOfContents: true
---

A **`majmuo`** (Set) is an unordered collection of items where every item must be **unique**. If you try to add the same number twice, the set will simply ignore the second one.

## 1. Creating a Set

Sets are created using the `majmuo()` keyword or curly braces `{}` without colons.

```sd
numbers = {1, 2, 3, 3, 3}
likh(numbers) # Prints: {1, 2, 3}

# Create from a list to remove duplicates
names = ["Ali", "Ali", "Hassan"]
unique_names = majmuo(names)
likh(unique_names) # Prints: {"Ali", "Hassan"}
```

---

## 2. Adding & Removing

Since sets are unordered, they do not have indexes like `[0]`. Instead, you check if an item exists.

```sd
s = {1, 2}
s.vadh(3) # Adds 3
s.kaadh(1) # Removes 1
```

---

## 3. Set Mathematics

Sets are incredibly powerful for comparing groups of data.

| Method | Meaning | Description |
| :--- | :--- | :--- |
| **`.milan()`** | Union | Items in **either** set |
| **`.farq()`** | Difference | Items in first set but **not** the second |
| **`.ishtiraak()`**| Intersection | Items present in **both** sets |

```sd
setA = {1, 2, 3}
setB = {3, 4, 5}

likh(setA.milan(setB))      # {1, 2, 3, 4, 5}
likh(setA.farq(setB))       # {1, 2}
likh(setA.ishtiraak(setB))  # {3}
```

---

## 4. Use Cases

Use a `majmuo` when:
1. You need to ensure no duplicates exist in your data.
2. You want to quickly check if an item belongs to a group (Sets are much faster than Lists for "checking").
3. You need to perform mathematical operations like finding common items between two lists.
