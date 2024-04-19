from color_by_first_letter import ColorByFirstLetter
import json

color_profile = '''{"grapheme-color map": {"A":  "rgb(230,16,16)", "B":  "rgb(29,26,214)", "C":  "rgb(250,247,65)", "D":  "rgb(5,29,153)", "E": "rgb(11,176,16)", "F": "rgb(227,16,16)", "G": "rgb(16,163,21)", "H": "rgb(255,239,15)", "I": "rgb(216,242,242)", "J": "rgb(255,227,46)", "K": "rgb(255,248,33)", "L": "rgb(245,29,29)", "M": "rgb(252,10,10)", "N": "rgb(71,4,148)", "O": "rgb(97,186,250)", "P": "rgb(250,240,50)", "Q": "rgb(170,197,242)", "R": "rgb(145,67,230)", "S": "rgb(255,252,69)", "T": "rgb(255,246,69)", "U": "rgb(46,162,230)", "V": "rgb(198,200,247)", "W": "rgb(8,39,196)", "X": "rgb(80,80,82)", "Y": "rgb(255,242,0)", "Z": "rgb(197,228,232)"}, "exceptions-color map":  {}}'''
tokenized_text = '''["The ", "over", "weight ", "red ", "fox ", "jumped ", "over ", "the ", "sleeping ", "brown ", "dog", "."]'''

c = ColorByFirstLetter(color_profile, tokenized_text)

def test_getting_grapheme_map():
    color_profile_dict = json.loads(color_profile)
    map = c.get_grapheme_map()
    assert color_profile_dict["grapheme-color map"] == map


def test_getting_text_from_json():
    correct_text = json.loads(tokenized_text)
    text = c.get_text()
    assert correct_text == text

def test_list_unique_words():
    correct = list(set(json.loads(tokenized_text)))
    assert correct == c.get_unique_words()