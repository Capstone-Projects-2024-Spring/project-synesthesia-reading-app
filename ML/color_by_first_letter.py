'''
OUTPUT: page_object.json in UI public folder
'''

class ColorByFirstLetter():
    def __init__(self):
        self.unique_words = ['the','swift','red','fox','jumped','over','lazy','brown','dog']
        self.word_color_map = None
        #self.generate_words()

    def generate_words(self):
        from random_word import RandomWords
        r = RandomWords()
        words = list(range(100))
        for word in words:
            words[word] = r.get_random_word()
        print(' '.join(words))
        self.unique_words = words



    def get_grapheme_map(self):
        '''
        put in code to call API for grapheme-word map here and interpret it as a Pandas DataFrame
        in the meantime, gives an example grapheme-color
        '''
        import pandas as pd
        return pd.read_csv('Maras_Alphabet.csv').set_index('Letter').to_dict('index')


    def color(self):
        import pandas as pd
        from IPython.display import display

        grapheme_map = self.get_grapheme_map()


        # create an empty word-color map
        word_color_map = {}

        # add word-rgb value pairs for each unique word
        for word in self.unique_words:
            rgb = grapheme_map.get(word[0].upper())
            word_color_map[word] = 'rgb({},{},{})'.format(rgb.get('R'), rgb.get('G'), rgb.get('B'))

        self.word_color_map = word_color_map





if __name__ == '__main__':
    words = ['the','swift','red','fox','jumped','over','lazy','brown','dog']


    c = ColorByFirstLetter()
    c.color()



#%%

#%%
