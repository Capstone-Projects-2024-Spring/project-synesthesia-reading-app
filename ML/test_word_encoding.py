import torch
from word_encoding import WordEncoder

dictionary = ['hello', 'goodbye']
e_hello = torch.zeros((1,45), dtype=torch.float)
e_hello[0,0] = 0.08
e_hello[0,1] = 0.05
e_hello[0,2] =0.12
e_hello[0,3] =0.12
e_hello[0,4] =0.15


e_goodbye = torch.zeros((1,45), dtype=torch.float)
e_goodbye[0,0] = 0.07
e_goodbye[0,1] = 0.15
e_goodbye[0,2] = 0.15
e_goodbye[0,3] = 0.04
e_goodbye[0,4] = 0.02
e_goodbye[0,5] = 0.25
e_goodbye[0,6] = 0.05

we = WordEncoder()

def test_encode_word_alphabetic():
    assert torch.equal(we.encode_word('hello'), e_hello)

def test_encode_list_alphabetic():
    encoded_dict = we.encode_list(dictionary)
    assert torch.equal(encoded_dict[0], e_hello)
    assert torch.equal(encoded_dict[1], e_goodbye)
#%%
