from word_encoding import WordEncoder
dictionary = ['hello', 'goodbye']
e_hello = [0.08, 0.05, 0.12, 0.12, 0.15]
e_goodbye = [0.07, 0.15, 0.15, 0.04, 0.02, 0.25, 0.05]

we = WordEncoder()

def test_encode_word_alphabetic():
    assert we.encode_word('hello') == e_hello

def test_encode_list_alphabetic():
    assert we.encode_list(dictionary) == [e_hello, e_goodbye]
#%%
