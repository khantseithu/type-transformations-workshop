/**
 * It's important to understand the terminology around unions:
 *
 * One of the type declarations below is a union.
 * One of the type declarations below is a   union.
 * One of the type declarations below is an enum.
 *
 * Which is which?
 */

type A =
  | {
      type: "a";
      a: string;
    }
  | {
      type: "b";
      whateverType: string;
    }
  | {
      type: "c";
      c: string;
    }; // discriminated union

const myFunc = (a: A) => {
  if (a.type === "b") {
    return a.whateverType;
  }
};

type B = "a" | "b" | "c"; // union

enum C {
  A = "a",
  B = "b",
  C = "c",
} // enum

console.log(C.A);

export {};
