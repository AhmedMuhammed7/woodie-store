export const curry = (func) =>
  function curried(...args) {
    return args.length >= func.length
      ? func.apply(this, args)
      : (...args2) => curried.apply(this, args.concat(args2));
  };
