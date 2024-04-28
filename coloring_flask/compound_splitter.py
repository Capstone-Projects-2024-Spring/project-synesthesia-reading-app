class CompoundSplitter():
    
    def __init__(self):
        self.dictionary = None
        self.create_dict()
        

    # loads Webster Dictionary JSON file
    def create_dict(self):
        import json
        with open("dictionary_compact.json", "r") as dict_file:
            self.dictionary = json.load(dict_file)
    
    def get_dict(self):
        return self.dictionary

    def is_word(self, word):
        if word in self.dictionary.keys():
            return True
        else:
            return False

    
    def split(self, word):
        max_index = len(word)
        for index, char in enumerate(word):
            left_compound = word[0:max_index-index]

        return None

