const number = [
  {
    "num": 1,
    "word": "One"
  },
  {
    "num": 2,
    "word": "Two"
  },
  {
    "num": 3,
    "word": "Three"
  },
  {
    "num": 4,
    "word": "Four"
  },
  {
    "num": 5,
    "word": "Five"
  },
  {
    "num": 0,
    "word": "Zero"
  }
]


export function numToWord(num) {
  const res = number.find(v => v.num === num);
  return res ? res.word : null;
}

export function wordToNum(word) {
  const res = number.find(v => v.word === word);
  return res ? res.num : null;
}
