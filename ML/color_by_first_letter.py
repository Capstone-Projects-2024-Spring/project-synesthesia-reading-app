'''
OUTPUT: page_object.json in output folder
'''

class ColorByFirstLetter():
    def __init__(self):
        self.unique_words = None
        self.word_color_map = None

    def generate_words(self):
        from random_word import RandomWords
        r = RandomWords()
        words = list(range(100))
        for word in words:
            words[word] = r.get_random_word()

if __name__ == '__main__':
    def get_grapheme_map(self):
        '''
        put in code to call API for grapheme-word map here and interpret it as a Pandas DataFrame
        in the meantime, gives an example grapheme-color
        '''
        import pandas as pd
        return pd.read_csv('Maras_Alphabet.csv')


    def color(self):
        import pandas as pd
        from IPython.display import display

        grapheme_map = self.get_grapheme_map()
        grapheme_map = grapheme_map.set_index(['Letter'])
        display(grapheme_map)

        # create an empty word-color map and add words to it
        word_color_map = pd.DataFrame(data=None, columns=['Word','Red','Green','Blue'])
        word_color_map['Word'] = self.unique_words

        # add color values for each word in map
        for index, row in word_color_map.iterrows():
            word = word_color_map.at[index, 'Word']
            row = grapheme_map.loc[word[0].upper()]
            word_color_map.at[index, 'Red'] = row.at['R']
            word_color_map.at[index, 'Green'] = row.at['G']
            word_color_map.at[index, 'Blue'] = row.at['B']

        word_color_map = word_color_map.set_index('Word')
        self.word_color_map = word_color_map
        return word_color_map.to_json(orient='table')








if __name__ == '__main__':
    words = ['the','swift','red','fox','jumped','over','lazy','brown','dog']


    c = ColorByFirstLetter()
    c.generate_words()

#%%

#%%
