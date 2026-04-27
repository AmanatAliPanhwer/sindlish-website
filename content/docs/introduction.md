---
title: Welcome to Sindlish
summary: The programming language that speaks your language.
enableTableOfContents: true
---

# Salam Dunya! (Hello World!)

Welcome to **Sindlish**, the first high-level programming language designed specifically for the Sindhi-speaking community. 

Sindlish is not just a translation; it is a full-featured, stack-based bytecode virtual machine that allows you to write professional, high-performance software using the words you already know.

## Why Sindlish?

For decades, the world of programming has been dominated by English. This creates a barrier for millions of talented people who think and speak in Sindhi. Sindlish breaks that barrier by providing:

- **Native Keywords**: Use `kaam`, `agar`, `tor`, and `lafz` instead of `function`, `if`, `for`, and `string`.
- **Hybrid Typing**: Enjoy the flexibility of dynamic typing or the safety of static typing.
- **Crash-Proof Design**: A modern `Result` system for error handling instead of messy exceptions.
- **High Performance**: A bytecode VM that ensures your code runs fast.

## A Quick Preview

Here is how a simple prime number checker looks in Sindlish:

```sd
kaam is_prime(n: adad) -> faislo {
    agar n <= 1 { wapas koorh }
    
    tor i = 2; i * i <= n; i = i + 1 {
        agar n % i == 0 {
            wapas koorh
        }
    }
    
    wapas sach
}

# Let's test it
number = 17
agar is_prime(number) {
    likh(lafz(number) + " is a prime number!")
}
```

## Getting Started

Ready to start your journey? Follow these steps:

1. **[Setup & VS Code](/docs/vscode-extension)**: Install the official extension to get syntax highlighting and autocomplete.
2. **[Language Guide](/docs/basics/variables)**: Learn about variables, loops, and logic.
3. **[Data Structures](/docs/data-structures/lists)**: Master lists, dictionaries, and sets.

Sindh has a rich history of literature and knowledge. With Sindlish, we are bringing that legacy into the digital age. **Bismillah!**
