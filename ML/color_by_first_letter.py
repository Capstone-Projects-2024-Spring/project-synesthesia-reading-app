'''
OUTPUT: page_object.json in UI public folder
'''

class ColorByFirstLetter():
    def __init__(self):
        self.words = None
        self.unique_words = None
        self.word_color_map = None
        self.generate_words()
        self.get_unique_words()
        self.color()
        self.create_page_object()

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

    c = ColorByFirstLetter()




#%%

#%%
