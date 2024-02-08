---
sidebar_position: 1
---

# System Overview

## Project Abstract
 
Color in Sync is based on the phenomenon of synesthesia. Specifically, the app focuses on grapheme-color synesthesia in which graphemes elicit specific colors that remain consistent over time. Neurological research on grapheme-color synesthetes has indicated that reading text that is colored in a way congruent with their expectations help them process it faster. Color in Sync allows people who have grapheme-color synesthesia to read text in their personal color associations. Although to non-synesthetes, text printed in a variety of colors may seem chaotic, to a grapheme-color synesthete graphemes printed in colors harmonious with their natural color association just feels right.
  
Color in Sync uses a combination of machine learning and user feedback to map the synesthete's word-color associations. Then, they can upload any document and Color in Sync will color each word according to the user's input and display the document to them. The user can then read it, aided by the word colorings matching their expectations, as well as adjust other features of the text. The user can change the font, adjust the text's size, and bold sections, all through the intuitive user interface. The user can make notes, as well as download the document along with notes for offline reading and sharing. If there is a mistake in the coloration, users can adjust it quickly and easily, allowing for the synesthete to have total control over how documents are presented to them. 
  
Color in Sync can also be helpful for helping neurodivergent people to read more easily, as synesthesia co-occurs with neurological differences and learning differences. Specifically: Autism (including Asperger syndrome), ADHD, dyslexia, and dyspraxia. In adults the rate of synesthesia has been found to be three times higher in people with autism (18.9%) compared to people without autism (7.22%). Research has also found that there is a co-occurrence of synesthetic experiences in individuals with ADHD, dyslexia, and dyspraxia. 17% of individuals with ADHD, 9% of dyslexics, and 14% of dyspraxics report synesthetic experiences. Synesthetic experiences are also reported in 18% of individuals with both ADHD and dyslexia as well as 37% individuals with both ADHD and dyspraxia. This co-occurrence with disabilities suggests that Color in Sync can assist some of those with learning differences, as they are more likely to have grapheme-color synethesia and thus more likely to benefit from seeing text that matches their natural word-color associations. 

## Conceptual Design
Color in Sync will be a progressive web application, available on all platforms through a web prowser or downloadable as an app. We will be using ReactJS to build up the user interface. For training the machine learning component, we will be using [INSERT PYTHON LIBRARY OR WHATEVER HERE]. We will use [INSERT DATABASE TECHNOLOGY HERE] to store the documents and color profiles and use [SOME BACKEND LANGUAGE] to build up the system for the app to access the database.

## Background

There are currently not any known applications which seek specifically to aid grapheme-color synesthetes process text more quickly and intuitively. However, there are many applications which seeks to aid those with learning differences in reading more easily or quickly. Color in Sync avoids many issues with these, such as rigitiy and a lack of customizability. Color in Sync better allows a user to curate their own experience by implementing a wealth of adjustable options.
