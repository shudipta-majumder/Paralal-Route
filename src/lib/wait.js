// lib/wait.js

export const wait = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };
  