from compound_splitter import CompoundSplitter

s = CompoundSplitter()

def test_make_splitter():

    assert (s.get_dict() != None)

def test_is_word():
    assert (s.is_word('anopheles') and s.is_word('fun') and not(s.is_word('macbook')))