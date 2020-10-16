function DNAStrand(dna) {
    //your code here
    let otherSide = "";
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === "T") {
            otherSide += "A";
        } else if (dna[i] === "A") {
            otherSide += "T";
        } else if (dna[i] === "C") {
            otherSide += "G";
        } else if (dna[i] === "G") {
            otherSide += "C";
        }
    }
    return otherSide;
}
