class WordEncoding:
    def __init__(self):
        self.alphabet = {
        'A': 0.01,
        'B': 0.02,
        'C': 0.03,
        'D': 0.04,
        'E': 0.05,
        'F': 0.06,
        'G': 0.07,
        'H': 0.08,
        'I': 0.09,
        'J': 0.1,
        'K': 0.11,
        'L': 0.12,
        'M': 0.13,
        'N': 0.14,
        'O': 0.15,
        'P': 0.16,
        'Q': 0.17,
        'R': 0.18,
        'S': 0.19,
        'T': 0.2,
        'U': 0.21,
        'V': 0.22,
        'W': 0.23,
        'X': 0.24,
        'Y': 0.25,
        'Z': 0.26
    }
    def encode(self, word):
        word = word.upper()
        encoded = []
        for c in word:
            encoded.append(self.alphabet[c])

        return encoded


if __name__ == '__main__':
    we = WordEncoding()
    print(we.encode('hello'))
#%%
