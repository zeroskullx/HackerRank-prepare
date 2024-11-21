### 1. The Magic of the “Void” Operator: Why It’s Not Just for Functions!

You’ve probably seen void used in contexts like void(0) or javascript:void(0), but did you know it can do way more than you think? 🤔

The void operator in JavaScript evaluates an expression but always returns undefined. It's often used to stop unwanted page refreshes (especially with href attributes in links), but here's a cool trick 🔮: you can use it to stop any return value from a function.

Example: Stopping a function from returning anything:

```typescript
function surprise() {
  console.log("This function does not return anything.");
  return 42;
}

const result = void surprise();
console.log(result); // undefined
```

By using void, we prevent the return value of surprise() from being assigned to result. This is useful when you want to do something for its side effects without worrying about the return value.

### 2. The Double Bang (!!): Converting Anything to a Boolean

Sure, `Boolean()` converts values to true or false, but the `double bang (!!)` is the shortcut that many developers don’t know about. The first ! negates the value, and the second ! negates it again — effectively converting it to a Boolean. It’s definitely a secret weapon! 💥

Here’s a fun example:

```typescript
const name = "Alice";
const hasName = !!name;
console.log(hasName); // true
```

You can use this trick to quickly check if a variable is "truthy" or "falsy" (e.g., is the string not empty, or is the number not zero?).

### 3. JavaScript’s eval() Function: Use with caution!

You’ve probably heard of eval() before, and most people avoid it like the plague because it evaluates strings of code at runtime, which can lead to security issues ⚠️ if used improperly. But if used in a controlled, safe manner, it can be a powerful tool for dynamic execution.

Here’s a bizarre, but cool example: dynamically evaluating code inside a string!

```typescript
const x = 10;
const y = 20;
const result = eval("x + y");
console.log(result); // 30
```

Use it cautiously ⚖️ — eval() should be handled with care, especially when dealing with user inputs.

### 4. The Hidden Power of the Symbol Type: Creating Unique Keys

Symbols are one of the least used, yet most intriguing features in JavaScript. They are unique and immutable, often used for creating "hidden" keys for object properties. When you need to ensure that a property name won't accidentally collide with another, symbols are your secret weapon. 💡

Symbols can be created with Symbol() and are guaranteed to be unique:

```typescript
const uniqueKey = Symbol("myUniqueKey");
const obj = {
  [uniqueKey]: "This is a secret value",
};

console.log(obj[uniqueKey]); // "This is a secret value"
```

### 🎁 Bonus tip!

This code

```typescript
if (onClick) {
  onClick();
}
```

is same as:

```typescript
onClick?.();
```
