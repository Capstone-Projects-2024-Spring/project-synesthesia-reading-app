class CompoundSplitter():
    
    def __init__(self):
        self.dictionary = None
        self.split_words_list = []
        #self.given_words_list = given_words

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

    
    def get_split_words_list(self):
        return self.split_words_list
    
    def split(self, word, baseIsWord, temp_word_list):
        max_index = len(word)
        for index, char in enumerate(word):
            # split into 2 components at index
            left_component = word[0:max_index-index]
            right_component = word[max_index-index: max_index]

            if (index > 0) and (len(left_component) > 1) and (len(right_component) > 1):
                if self.is_word(left_component):
                    if self.is_word(right_component):
                        for word in temp_word_list:
                            self.split_words_list.append(word)

                        self.split_words_list.append(left_component)
                        self.split(right_component, baseIsWord=True, temp_word_list=[])
                        return True
                    else:
                        temp_word_list.append(left_component)
                        if self.split(right_component, baseIsWord=False, temp_word_list=temp_word_list):
                            return True
        
        if baseIsWord:
            self.split_words_list.append(word)



