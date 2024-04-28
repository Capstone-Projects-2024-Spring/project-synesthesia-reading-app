from compound_splitter import CompoundSplitter

s = CompoundSplitter()

def test_loads_dict():
    assert (s.get_dict() != None)

def test_is_word():
    assert (s.is_word('anopheles') and s.is_word('fun') and not(s.is_word('macbook')))

def test_splits_compound_word():
    s.split('anyone', True, [])
    actual = s.get_split_words_list()
    print(actual)
    correct = ['any', 'one']
    assert actual == correct
    
def test_doesnt_split_not_compound():
    s.split('angelic', True, [])
    actual = s.get_split_words_list()
    correct = ['any', 'one', 'angelic']
    print(actual)
    assert actual == correct

def test_split_layered_compound():
    s.split('nevertheless', True, [])
    actual = s.get_split_words_list()
    correct = ['any', 'one', 'angelic', 'never', 'the', 'less']
    print(actual)
    assert actual == correct