'''
OUTPUT: page_object.json in UI public folder
'''

class ColorByFirstLetter():
    def __init__(self, color_profile, text):
        self.color_profile_json = color_profile
        self.words_json = text
        self.unique_words = None
        self.word_color_map = None
        #self.get_unique_words()
        #self.color()
        #self.create_page_object()

    def parse_json(self):
        import json
        json_dict = json.loads(self.json)
        print(json_dict)

    # geenrating a list of words for mock-up purposes
    def generate_words(self):
        from random_word import RandomWords
        r = RandomWords()
        words = list(range(100))
        for word in words:
            words[word] = r.get_random_word()

        self.words = words

    # get unique set of words from self.words, i.e. the tokenized list of words in a page
    def get_unique_words(self):
        self.unique_words = list(set(self.words))

    def get_grapheme_map(self):
        '''
        put in code to call API for grapheme-word map here and interpret it as a Pandas DataFrame
        in the meantime, gives an example grapheme-color
        '''
        import pandas as pd
        return pd.read_csv('Maras_Alphabet.csv').set_index('Letter').to_dict('index')

    # creates a word-color map and assigns it to self.word_color_map
    def color(self):
        grapheme_map = self.get_grapheme_map()


        # create an empty word-color map
        word_color_map = {}

        # add word-rgb value pairs for each unique word
        for word in self.unique_words:
            rgb = grapheme_map.get(word[0].upper())
            word_color_map[word] = 'rgb({},{},{})'.format(rgb.get('R'), rgb.get('G'), rgb.get('B'))

        self.word_color_map = word_color_map


    # creates a json object of the list of words and the word-color map and writes it to a file
    def create_page_object(self):
        import json

        # combine list of unique words & word-color map into one object
        page_object = {
            'words': self.words,
            'word_color_map': self.word_color_map
        }

        # convert to JSON
        page_object = json.dumps(page_object)

        # write to file
        with open("../UI/public/page_object.json", "w") as outfile:
            outfile.write(page_object)






if __name__ == '__main__':
    color_profile = {"grapheme-color map": {"A":  "rgb(230,16,16)", "B":  "rgb(29,26,214)", "C":  "rgb(250,247,65)", "D":  "rgb(5,29,153)", "E": "rgb(11,176,16)", "F": "rgb(227,16,16)", "G": "rgb(16,163,21)", "H": "rgb(255,239,15)", "I": "rgb(216,242,242)", "J": "rgb(255,227,46)", "K": "rgb(255,248,33)", "L": "rgb(245,29,29)", "M": "rgb(252,10,10)", "N": "rgb(71,4,148)", "O": "rgb(97,186,250)", "P": "rgb(250,240,50)", "Q": "rgb(170,197,242)", "R": "rgb(145,67,230)", "S": "rgb(255,252,69)", "T": "rgb(255,246,69)", "U": "rgb(46,162,230)", "V": "rgb(198,200,247)", "W": "rgb(8,39,196)", "X": "rgb(80,80,82)", "Y": "rgb(255,242,0)", "Z": "rgb(197,228,232)"}, "exceptions-color map":  {}}
    tokenized_text = ["The ", "over", "weight ", "red ", "fox ", "jumped ", "over ", "the ", "sleeping ", "brown ", "dog", "."]

    c = ColorByFirstLetter(color_profile, tokenized_text)





#%%

#%%
