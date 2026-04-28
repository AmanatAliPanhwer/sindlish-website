---
title: All Keywords
summary: A quick reference table for every keyword in the Sindlish language.
enableTableOfContents: true
---

This page serves as a quick lookup for all reserved keywords in Sindlish and their English equivalents.

## Data Types & Literals

| Sindlish | English | Purpose |
| :--- | :--- | :--- |
| **`adad`** | Integer | Whole numbers (e.g., `10`). |
| **`dahai`** | Float | Decimal numbers (e.g., `3.14`). |
| **`lafz`** | String | Text and characters (e.g., `"Salam"`). |
| **`faislo`** | Boolean | Data type for `sach` and `koorh`. |
| **`sach`** | True | Boolean true value. |
| **`koorh`** | False | Boolean false value. |
| **`khali`** | Null | Represents nothingness or empty value. |
| **`pakko`** | Constant | Declares a variable that cannot be changed. |

## Collections

| Sindlish | English | Purpose |
| :--- | :--- | :--- |
| **`fehrist`** | List | An ordered, mutable collection. |
| **`lughat`** | Dictionary | A collection of key-value pairs. |
| **`majmuo`** | Set | A collection of unique items. |

## Control Flow

| Sindlish | English | Purpose |
| :--- | :--- | :--- |
| **`agar`** | If | Starts a conditional block. |
| **`yawari`** | Else If | Checks an alternative condition. |
| **`warna`** | Else | Block to run if all conditions fail. |
| **`har`** | For | Iterates over a collection or range. |
| **`mein`** | In | Used in `har` loops: `har i mein list`. |
| **`jistain`** | While | Loops as long as a condition is true. |
| **`tor`** | Break | Stops a loop immediately. |
| **`jari`** | Continue | Skips to the next loop iteration. |

## Functions

| Sindlish | English | Purpose |
| :--- | :--- | :--- |
| **`kaam`** | Function | Defines a block of reusable code. |
| **`wapas`** | Return | Exits a function and returns a value. |

## Logic & Math

| Sindlish | English | Purpose |
| :--- | :--- | :--- |
| **`aen`** | And | Returns true if both sides are true. |
| **`ya`** | Or | Returns true if at least one side is true. |
| **`nah`** (or `!`) | Not | Inverts a boolean value. |

## Error Handling

| Sindlish | English | Purpose |
| :--- | :--- | :--- |
| **`ok`** | Ok | Wraps a successful value in a Result. |
| **`ghalti`** | Error | Wraps an error or triggers a panic. |
| **`.bachao`** | Rescue | Provides a default value for a failed Result. |
| **`.lazmi`** | Required | Panics with a custom message if Result is an error. |

## Symbols

| Symbol | Name | Usage |
| :--- | :--- | :--- |
| **`?`** | Soft Unwrap | Propagate errors up the call stack. |
| **`!!`** | Panic Unwrap | Force unwrap a value or crash. |
| **`->`** | Arrow | Specify function return types. |
| **`:`** | Colon | Specify variable types. |
| **`.`** | Dot | Access methods and attributes. |
| **`[` `]`** | Brackets | Indexing and List creation. |
| **`{` `}`** | Braces | Code blocks, Dict/Set creation. |
| **`#`** | Hash | Single-line comment. |
| **`/* */`** | Multiline | Comments spanning multiple lines. |
