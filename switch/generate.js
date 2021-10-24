const lines = [
];

for (let i = 0; i < 200; i++) {
  lines.push(
    `case '${i}':{`,
    `a = ${i + 100}`,
    'break;}'
  );
}

const content = [
  'const type = Date.now() + ""',
  'let a',
  'var start = process.hrtime()[1];',
  'switch(type){',
  ...lines,
  '}',
  'console.log(process.hrtime()[1] - start);',
  'console.log(a)',
]

require('fs').writeFile(
  require('path').resolve(__dirname, '2.js'),
  content.join('\n'),
  () => {},
);
