---
title: Comments
summary: Learn how to write single-line and multi-line notes inside your code to explain your logic.
enableTableOfContents: true
---

When writing code, you will often want to leave notes for yourself or other programmers explaining *why* a piece of code exists. These notes are called **comments**. 

The Sindlish interpreter completely ignores comments when running your program, so they don't affect your logic or performance at all. Comments are purely for human readability.

## 1. Single-Line Comments

If you just need to leave a quick note on a single line, use the hash symbol `#`. Everything after the `#` on that exact line will be ignored by the interpreter.

```sd
# This is a single-line comment. Sindlish will ignore this completely.
naalo = "Sindlish"  # You can also put comments at the end of a line of code!

# likh("This won't print because it is commented out")
```

Single-line comments are best for briefly explaining a complex calculation or temporarily disabling a line of code while you are testing.

## 2. Multi-Line Comments

Sometimes you need to write a long explanation, a warning, or document how a complex algorithm works. Instead of putting a `#` on every single line, you can use multi-line comments. 

Start the comment with `/*` and end it with `*/`. Everything inside those symbols will be ignored, even if it spans across 100 lines.

```sd
/*
  This is a multi-line comment!
  It is incredibly useful for writing detailed documentation
  directly inside your source code files.
  
  You can safely write paragraphs of text here without 
  worrying about breaking your program.
  
  Author: Amanat
  Date: 2026
*/

kaam complex_math() {
    # Some complex math here
}
```

Multi-line comments are generally placed at the top of a file to explain its purpose, or right above a large function to document what parameters it expects and what it returns.
