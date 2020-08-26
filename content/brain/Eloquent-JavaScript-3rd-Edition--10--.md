---
title: "Eloquent JavaScript 3rd Edition [10%]"
category: Book Notes
id: d0531566375844e59fe6e6dc53429f5c
parent_id: 6b417236dbdb40f8812f2bae6fd94381
created_at: 1585140746304
---

## Chapter 1 - Values, Types, and Operators

Inside the computer’s world, there is only data. You can read data, modify data, create new data—but that which isn’t data cannot be mentioned. All this data is stored as long sequences of bits and is thus fundamentally alike.

---

For example, we can express the number 13 in bits. It works the same way as a decimal number, but instead of 10 different digits, you have only 2, and the weight of each increases by a factor of 2 from right to left. Here are the bits that make up the number 13, with the weights of the digits shown below them:

   0   0   0   0   1   1   0   1
 128  64  32  16   8   4   2   1

So that’s the binary number 00001101. Its non-zero digits stand for 8, 4, and 1, and add up to 13.

---

And that’s what JavaScript does. But there’s a complication: JavaScript’s representation uses 16 bits per string element, which can describe up to 216 different characters. But Unicode defines more characters than that—about twice as many, at this point. So some characters, such as many emoji, take up two “character positions” in JavaScript strings.
    