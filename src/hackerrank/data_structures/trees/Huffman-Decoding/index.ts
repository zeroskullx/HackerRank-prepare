type HuffmanCodeMap = Record<string, string>;
type FrequencyMap = Record<string, number>;

interface MinHeapNodeInterface {
  left: MinHeapNode | null;
  right: MinHeapNode | null;
  data: string;
  freq: number;
  compareTo(other: MinHeapNode): number;
}

class MinHeapNode implements MinHeapNodeInterface {
  left: MinHeapNode | null = null;
  right: MinHeapNode | null = null;

  constructor(public data: string, public freq: number) {}

  compareTo(other: MinHeapNode): number {
    return this.freq - other.freq;
  }
}

// Map to store Huffman codes
const codes: HuffmanCodeMap = {};

// Map to store character frequencies
const freq: FrequencyMap = {};

// Min-heap implemented as an array
const minHeap: MinHeapNode[] = [];

// Utility function to print characters along with their Huffman value
function printCodes(root: MinHeapNode | null, str: string): void {
  if (!root) return;
  if (root.data !== "$") {
    console.log(`${root.data} : ${str}`);
  }
  printCodes(root.left, str + "0");
  printCodes(root.right, str + "1");
}

// Utility function to store characters along with their Huffman value in the `codes` map
function storeCodes(root: MinHeapNode | null, str: string): void {
  if (!root) return;
  if (root.data !== "$") {
    codes[root.data] = str;
  }
  storeCodes(root.left, str + "0");
  storeCodes(root.right, str + "1");
}

// Function to build the Huffman tree
function buildHuffmanTree(): void {
  // Populate minHeap with nodes for each character and its frequency
  for (const key in freq) {
    minHeap.push(new MinHeapNode(key, freq[key]));
  }

  // Sort the heap initially
  minHeap.sort((a, b) => a.compareTo(b));

  while (minHeap.length > 1) {
    const left = minHeap.shift()!;
    const right = minHeap.shift()!;

    const top = new MinHeapNode("$", left.freq + right.freq);
    top.left = left;
    top.right = right;

    minHeap.push(top);
    minHeap.sort((a, b) => a.compareTo(b));
  }

  // Store Huffman codes
  storeCodes(minHeap[0], "");
}

// Function to calculate character frequencies
function calculateFrequencies(str: string): void {
  for (const char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
}

// Decode the encoded string using the Huffman tree
function decodeFile(root: MinHeapNode, encoded: string): string {
  let result = "";
  let current: MinHeapNode | null = root;

  for (const bit of encoded) {
    if (!current) {
      throw new Error("Invalid encoded string: traversed to a null node.");
    }

    current = bit === "0" ? current.left : current.right;

    if (current && !current.left && !current.right) {
      result += current.data;
      current = root;
    }
  }

  if (!current) {
    throw new Error("Decoding failed: ended on a null node.");
  }

  return result;
}

export const treeTest = () => {
  // Driver code
  const input = "ABRACADABRA";
  let encodedString = "";
  let decodedString = "";

  // Calculate frequencies and build the Huffman tree
  calculateFrequencies(input);
  buildHuffmanTree();

  // Display characters and their Huffman codes
  console.log("Character with their Frequencies:");
  Object.keys(codes)
    .sort()
    .forEach((key) => console.log(`${key}: ${codes[key]}`));

  // Encode the input string
  for (const char of input) {
    encodedString += codes[char];
  }

  console.log("\nEncoded Huffman Data:");
  console.log(encodedString);

  // Decode the encoded string
  decodedString = decodeFile(minHeap[0], encodedString);

  console.log("\nDecoded Huffman Data:");
  console.log(decodedString);
};
