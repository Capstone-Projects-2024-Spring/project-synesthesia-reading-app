import torch

class WordEncoder:
    """Encodes words into arrays of floats in the range (0, 1], with each float representing a character
        :param alphabet: a dictionary of characters from A to Z and their corresponding float values.
    """
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


    def encode_word(self, word):
        """
        Encodes a word. The encoding is not case-sensitive.
        :param word: a string of characters
        :return: an ordered array of floats representing each letter in the word
        """
        word = word.upper()
        encoded = torch.zeros((1,45), dtype=torch.float)

        i = 0
        for c in word:
            encoded[0,i] = self.alphabet[c]
            i+=1

        return encoded


    def encode_list(self, dictionary):
        """
        Encodes a list of words by passing them through the function encode_word
        :param dictionary: a list of strings
        :return: a list of arrays of encoded words
        """
        encoded_dictionary = []
        for word in dictionary:
            encoded_dictionary.append(self.encode_word(word))

        return encoded_dictionary
#%%
