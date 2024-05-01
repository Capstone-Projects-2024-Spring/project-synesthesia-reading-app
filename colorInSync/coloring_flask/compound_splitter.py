class CompoundSplitter():
    
    def __init__(self, given_words_list):
        self.dictionary = None
        self.split_words_list = []
        self.given_words_list = given_words_list

        self.create_dict()
        self.create_split_words_list()
        

    # loads Webster Dictionary JSON file
    def create_dict(self):
        import json
        with open("dictionary.json", "r") as dict_file:
            self.dictionary = json.load(dict_file)
    
    # returns self.dictionary
    def get_dict(self):
        return self.dictionary
    
    # interates through self.given_words_string, splitting each word and adding it to self.split_words_list
    def create_split_words_list(self):
        for word in self.given_words_list:
            self.split(word, True, [])

    # searches self.dictionary for a string, returns true if it is in there
    def is_word(self, word):
        if word in self.dictionary.keys():
            return True
        else:
            return False

    
    # returns self.split_words_list
    def get_split_words_list(self):
        return self.split_words_list
    
    '''splits a string into words of greater than one letter found in self.dictionary
        returns True or False depending on whether or not a split was made
        parameters:
            word: the string to split
            baseIsWord: a boolean denoting whether or not the given string (parameter word) is to be added to self.split_words_list if it cannot be split
            temp_word_list: an EMPTY list of strings
                            the function will use as it calls itself in order to append the split components to self.split_words_list in the correct order
    '''
    def split(self, word, baseIsWord, temp_word_list):
        max_index = len(word)
        for index, char in enumerate(word):
            # split into 2 components at index
            left_component = word[0:max_index-index]
            right_component = word[max_index-index: max_index]

            if (index > 0) and (len(left_component) > 1) and (len(right_component) > 1):
                if self.is_word(left_component.lower()):
                    if self.is_word(right_component.lower()):
                        for word in temp_word_list:
                            self.split_words_list.append(word)

                        self.split_words_list.append(left_component)
                        self.split(right_component, baseIsWord=True, temp_word_list=[])
                        return True
                    else:
                        temp_word_list.append(left_component)
                        if self.split(right_component, baseIsWord=False, temp_word_list=temp_word_list):
                            return True
                        else:
                            temp_word_list.pop()
        
        if baseIsWord:
            self.split_words_list.append(word)
        return False



