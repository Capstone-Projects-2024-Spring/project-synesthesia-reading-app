from word_encoding import WordEncoding
we = WordEncoding()

def test_encode():
    assert we.encode('hello') == [0.08, 0.05, 0.12, 0.12, 0.15]
#%%
