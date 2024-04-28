'''
OUTPUT: page_object.json in UI public folder
'''

class ColorByFirstLetter():
    def __init__(self, color_profile, text):
        self.color_profile = color_profile
        self.text = text

        self.grapheme_map = None
        self.exception_map = None
        self.unique_words = None
        self.word_color_map = None

        #self.parse_json()
        #self.list_unique_words()
        #self.color()
        #self.create_page_object()

    def split_words(self):
        import re
        return re.split(r'(\W)', self.text)
    
    def get_word_color_map(self):
        return self.word_color_map

    def parse_json(self):
        self.grapheme_map = self.color_profile["grapheme-color map"]
        self.exception_map= self.color_profile["exceptions-color map"]


    # creates a list of a unique set of words from self.text, the tokenized list of words in a page
    def list_unique_words(self):
        self.unique_words = list(set(self.text))

    # returns the unique_words attribute
    def get_unique_words(self):
        return self.unique_words
    
    # returns the grapheme_map attribute
    def get_grapheme_map(self):
        return self.grapheme_map
    
    # returns the text attribute
    def get_text(self):
        return self.text

    # creates a word-color map and assigns it to self.word_color_map
    def color(self):
        grapheme_map = self.get_grapheme_map()


        # create an empty word-color map
        word_color_map = {}

        # add word-rgb value pairs for each unique word
        for word in self.unique_words:
            if(grapheme_map.get(word[0].upper())):
                word_color_map[word] = grapheme_map.get(word[0].upper())
            else:
                word_color_map[word] = 'rgb(0,0,0)'

        self.word_color_map = word_color_map


    # creates a json object of the list of words and the word-color map and writes it to a file
    def create_page_object(self):
        import json

        # combine list of unique words & word-color map into one object
        page_object = {
            'words': self.text,
            'word_color_map': self.word_color_map
        }

        # convert to JSON
        page_object = json.dumps(page_object)
        return page_object














#%%

#%%
