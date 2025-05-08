# Today's blog will teach us about the difference between Interface and Type and introduce us to the keyof keyword in TypeScript.

Understanding the distinction between interface and type and effectively utilizing the keyof keyword were two ideas that really helped me when I was learning TypeScript. I'll break them down in this post in an easy-to-understand manner, just like I wish someone had done for me sooner.

## ✅ `interface` vs `type` – What I Learned

I wasn't entirely sure when to use `interface` and when to use `type` when I first started using TypeScript. Here's my current perspective after some practice:

### 🧩 Both can define the shape of an object:

```ts
interface User {
  name: string;
  age: number;
}

type Person = {
  name: string;
  age: number;
};
```

<hr>

### 🟢 When I use `interface`
- When describing classes or objects
- When I eventually need to expand the structure
- When I wish to permit merging (TypeScript has the ability to merge several interfaces under one name),

<hr>

### 🔵 I use `type` when:
- I want to combine types or define a union.

- I'm dealing with more than just things.

- I require a little more adaptability.

```ts
type Status = "loading" | "success" | "error";
```
This kind of thing isn’t possible with `interface`.

<hr>

## 🔑 `keyof` – __A Hidden Gem I Found Super Useful__

The keyof keyword is among the best features I found. It assists me in obtaining all of a type's or interface's property names, or keys, which is very helpful when creating dynamic or utility functions.

```ts
interface Product {
    id: number;
  title: string;
  price: number;
}

type ProductKeys = keyof Product;
// Now ProductKeys is: "id" | "title" | "price"
```

<hr>

### 💡 Real-world Use Case
I used this in a function like this:
```ts
function getValue(obj: Product, key: keyof Product) {
  return obj[key];
}
```

This ensures I can only access valid keys of the `Product` object. If I accidentally use something like `"name"`, TypeScript will give me an error. That’s a huge help!

<hr>

## 🧾 __Final Thoughts__
Here’s how I now look at these:

- interface is great for object types and extending

- type is more flexible and great for composing or combining

- keyof helps make my code type-safe and predictable, especially when working with object keys dynamically

Learning these made my TypeScript journey a lot smoother.
I hope this simple explanation helps you too!
