Number.prototype.mod = (n) => {
    return ((this % n) + n) % n;
}