---
title: Sets (majmuo)
summary: Store unique, unordered items using the majmuo type.
enableTableOfContents: true
---

A **`majmuo`** (Set) is an unordered collection of items where every item must be **unique**. Duplicate values are automatically removed.

## 1. Creating a Set

You can create a set using curly braces `{}` (without colons) or the `majmuo()` function. To create an empty set, you **must** use `majmuo()`, as `{}` is reserved for empty dictionaries.

```sd
numbers = {1, 2, 3, 3, 3}
likh(numbers) # Prints: {1, 2, 3}

# Create an empty set
empty = majmuo()

# Create from a list to remove duplicates
names = ["Ali", "Ali", "Hassan"]
unique_names = majmuo(names) # {"Ali", "Hassan"}
```

---

## 2. Basic Operations

Since sets are unordered, they do not have indexes like `[0]`.

| Method | Description |
| :--- | :--- |
| **`.addkar(item)`** | Adds a single item to the set. |
| **`.hata(item)`** | Removes an item. Errors if item is missing. |
| **`.chad(item)`** | Removes an item if it exists. Does nothing if missing. |
| **`.kadh()`** | Removes and returns a random item from the set. |
| **`.update(bi_majmuo)`** | Adds all items from another set to the current one. |
| **`.saf()`** | Removes all items from the set. |

```sd
s = {1, 2}
s.addkar(3)
s.hata(1)
```

---

## 3. Set Mathematics

Sets excel at comparing groups of data using mathematical operations.

| Method | English Name | Description |
| :--- | :--- | :--- |
| **`.bade(other)`** | Union | Items present in **either** set. |
| **`.milap(other)`** | Intersection | Items present in **both** sets. |
| **`.farq(other)`** | Difference | Items in the first set but **not** in the second. |
| **`.symmetric_farq(other)`** | Symmetric Diff | Items in either set, but **not in both**. |

```sd
setA = {1, 2, 3}
setB = {3, 4, 5}

likh(setA.bade(setB))            # {1, 2, 3, 4, 5}
likh(setA.milap(setB))           # {3}
likh(setA.farq(setB))            # {1, 2}
likh(setA.symmetric_farq(setB)) # {1, 2, 4, 5}
```

---

## 4. Comparisons & Logic

| Method | Description |
| :--- | :--- |
| **`.nandohisoahe(other)`** | **Is Subset**: Returns sach if all items are in the other set. |
| **`.wadohisoahe(other)`** | **Is Superset**: Returns sach if it contains all items of the other set. |
| **`.alaghahe(other)`** | **Is Disjoint**: Returns sach if the sets have NO items in common. |

---

## 5. Iterating over Sets

You can loop through a set, but the order of items is not guaranteed.

```sd
tags = {"sindh", "coding", "education"}

har t mein tags {
    likh("#" + t)
}
```

---

## 6. Important: Unhashable Elements

Just like Dictionaries, Sets can only store **immutable** items. You can store Strings, Numbers, and Booleans. You **cannot** store a List, a Dictionary, or another Set inside a Set.
