//refactor using default function arguments
function sum(a, b) {
  if (a === undefined) {
    a = 0;
  }

  if (b === undefined) {
    b = 0;
  }

  return a + b;
}

function sum(a = undefined, b = undefined) {
  if (a === undefined) {
    a = 0;
  }

  if (b === undefined) {
    b = 0;
  }

  return a + b;
}

//refactor and dump unused code
function addOffset(style) {
  if (!style) {
    style = {};
  }

  style.offset = '10px';

  return style;
}

function addOffset(style = {}) {
  style.offset = '10px';
  return style;
}
