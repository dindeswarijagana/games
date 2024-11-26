function dna(string, i, value) {
    const a = 8 * Math.sin(i) + 60;
  
    for(let i = 0; i < a; i++) {
      string = string + " ";
    }
    string = string + value;

  return string;
}

function delay() {
  for(let i = 0; i < 253200000; i++) {}
}

function main() {
  for(let i = 0; i <= 200; i += 0.25) {
    console.log(dna("", i, "⚪️"));
    delay();
    console.log(dna("", -i, "🟣"));
  }  
}

main();
