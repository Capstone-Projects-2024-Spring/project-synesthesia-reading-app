"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[5004],{98206:e=>{e.exports=JSON.parse('{"url":"redocusaurus/using-single-yaml.yaml","themeId":"theme-redoc","isSpecFile":true,"spec":{"openapi":"3.0.0","info":{"title":"Synesthesia Reading App API","description":"The Synesthesia Reading App API allows access to users\' documents and color profiles across devices.","version":"1.0.0"},"servers":[{"url":"https://virtserver.swaggerhub.com/AFTOWNS99/Synesthesia-Reading-App/1.0.0"}],"security":[{"application":["read","write"]}],"tags":[{"name":"documents","description":"Everything about your Documents"},{"name":"color profile","description":"Information about a user color profile"},{"name":"user","description":"Operations about user"},{"name":"feedback","description":"Pertaining to user feedback"}],"paths":{"/documents/":{"get":{"tags":["documents"],"summary":"Returns an array of documents","operationId":"document_get_list","responses":{"200":{"description":"a JSON array of document objects","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/Document"}}}}}}},"post":{"tags":["documents"],"summary":"Adds a document to a user\'s library","operationId":"document_add","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Document"}}},"required":true},"responses":{"201":{"description":"Created"}}}},"/documents/{docId}/":{"delete":{"tags":["documents"],"summary":"deletes the document with the given id from account storage","operationId":"document_destroy","parameters":[{"name":"docId","in":"path","required":true,"style":"simple","explode":false,"schema":{"type":"string"}}],"responses":{"204":{"description":"No content"}}}},"/color_profile/":{"post":{"tags":["color profile"],"summary":"creates a new Color Profile associated with a user","operationId":"color_profile_add","parameters":[{"name":"userId","required":true,"in":"path"}],"requestBody":{"required":true,"description":"the color profile to be created","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Color_Profile"}}}},"responses":{"201":{"description":"Created"}}}},"/feedback/":{"post":{"tags":["feedback"],"summary":"post a user feedback message","operationId":"feedback_add","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Feedback_Message"}}}},"responses":{"201":{"description":"Created"}}}}},"components":{"schemas":{"Document":{"type":"object","properties":{"docId":{"type":"string","example":"id123"},"title":{"type":"string","example":"The Silmarillion"},"text":{"type":"string"},"notes":{"type":"array","items":{"$ref":"#/components/schemas/Note"}}}},"Note":{"type":"object","properties":{"id":{"type":"string"},"location":{"type":"string"},"text":{"type":"string"}}},"Color_Profile":{"description":"Contains a map of graphemes to their associated colors and a map of words that are exceptions to the coloring rules to their colors","type":"object","properties":{"grapheme-color map":{"$ref":"#/components/schemas/Grapheme_Color_Map"},"exceptions-color map":{"$ref":"#/components/schemas/Word_Color_Map"}}},"Colored_Page":{"description":"contains the information necessary to render a colored page-- the tokenized text of the page and a word-color map containing word-color pairs for each unique word component on the page","type":"object","properties":{"tokenized text":{"type":"array","example":["The ","over","weight ","red ","fox ","jumped ","over ","the ","sleeping ","brown ","dog","."]},"word-color map":{"$ref":"#/components/schemas/Word_Color_Map"}}},"Grapheme_Color_Map":{"type":"object","description":"map of graphemes to RGB colors","items":{"$ref":"#/components/schemas/Grapheme_Color_Pair"}},"Grapheme_Color_Pair":{"type":"object","properties":{"grapheme":{"type":"string","example":"c"},"color":{"type":"array","description":"R, G, and B values","example":[250,0,0]}}},"Word_Color_Map":{"type":"object","description":"a map of words to RGB colors","items":{"$ref":"#/components/schemas/Word_Color_Pair"}},"Word_Color_Pair":{"type":"object","properties":{"word":{"type":"string","example":"sofa "},"color":{"type":"array","description":"R, G, and B values","example":[250,0,0]}}},"Feedback_Message":{"type":"string","description":"a feedback message from a user","example":"X feature was really helpful for me, but not Y"}}}}}')}}]);