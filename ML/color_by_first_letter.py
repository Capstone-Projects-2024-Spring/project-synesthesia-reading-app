'''
OUTPUT: page_object.json in UI public folder
'''

class ColorByFirstLetter():
    def __init__(self, color_profile, text):
        self.color_json = color_profile
        self.text_json = text

        self.grapheme_map = None
        self.exception_map = None
        self.unique_words = None
        self.word_color_map = None

        self.parse_json()

        #self.get_unique_words()
        #self.color()
        #self.create_page_object()

    def parse_json(self):
        import json
        color_profile = json.loads(self.color_json)
        self.grapheme_map = color_profile["grapheme-color map"]
        self.exception_map= color_profile["exceptions-color map"]


    # get unique set of words from self.words, i.e. the tokenized list of words in a page
    def get_unique_words(self):
        self.unique_words = list(set(self.words))

    def get_grapheme_map(self):
        return self.grapheme_map

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












#%%

#%%
