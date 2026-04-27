---
title: Loops (Iterators)
summary: Repeat actions efficiently using for and while loops.
enableTableOfContents: true
---

Loops are used to repeat a block of code multiple times. Instead of writing the same line 100 times, you can write a loop that does the work for you in seconds.

## 1. The `tor` (For) Loop

The `tor` loop is used to iterate over a range of numbers or a collection (like a list or dictionary).

### Numeric Range
To run a loop from 1 to 10:

```sd
tor i = 1; i <= 10; i = i + 1 {
    likh("Count: " + lafz(i))
}
```

### Iterating over a List
You can also use `tor` to look at every item in a list one by one.

```sd
fal = ["Ambu", "Kela", "Soof"]

tor f in fal {
    likh("I like " + f)
}
```

---

## 2. The `jari` (While) Loop

The `jari` (While) loop continues to run as long as a specific condition remains true. It is useful when you don't know exactly how many times you need to loop.

```sd
adad count = 1

jari count <= 5 {
    likh("Iteration: " + lafz(count))
    count = count + 1
}
```

**⚠️ Warning: Infinite Loops**
If you forget to update the condition (like `count = count + 1` above), the loop will run forever and crash your computer! Always ensure your loop has an exit strategy.

---

## 3. Loop Control: `bas` & `halo`

Sometimes you need to exit a loop early or skip a specific iteration.

### `bas` (Break)
The `bas` keyword stops the loop immediately, even if the condition is still true.

```sd
tor i = 1; i <= 10; i = i + 1 {
    agar i == 6 {
        bas # Stop the loop when i reaches 6
    }
    likh(i)
}
```

### `halo` (Continue)
The `halo` keyword skips the rest of the current block and jumps immediately to the next iteration of the loop.

```sd
tor i = 1; i <= 5; i = i + 1 {
    agar i == 3 {
        halo # Skip printing 3
    }
    likh(i)
}
# Output: 1, 2, 4, 5
```

---

## 4. Nested Loops

Just like conditions, you can put a loop inside another loop. This is commonly used for working with grids or matrices.

```sd
tor x = 1; x <= 3; x = x + 1 {
    tor y = 1; y <= 3; y = y + 1 {
        likh("Coordinate: " + lafz(x) + "," + lafz(y))
    }
}
```

Be careful with nested loops; if you loop 100 times inside another loop that runs 100 times, your code will execute 10,000 times!
