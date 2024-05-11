<div align="center">

# Project Name
[![Report Issue on Jira](https://img.shields.io/badge/Report%20Issues-Jira-0052CC?style=flat&logo=jira-software)](https://temple-cis-projects-in-cs.atlassian.net/jira/software/c/projects/DT/issues)
[![Deploy Docs](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml/badge.svg)](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml)
[![Documentation Website Link](https://img.shields.io/badge/-Documentation%20Website-brightgreen)](https://capstone-projects-2024-spring.github.io/project-synesthesia-reading-app/)


</div>


## Keywords

Section #03, synesthesia, grapheme-color synesthesia, web app, PHP, Python, JavaScript, React, Vercell, Laravel, EC2

## Project Abstract

    Mara's Proposal: My goal is to design an app based on the phenomenon of synesthesia. Specifically, the app would focus on grapheme-color synesthesia in which graphemes elicit specific colors that remain consistent over time. Van der Veen, Aben, Smits &. Röder (2014) demonstrated that individuals ages 19-49 with grapheme-color synesthesia react slower when presented with graphemes incongruent to their synesthetic color associations. In turn, these individuals’ reaction time improved when presented graphemes in colors congruent to their associations. Similarly, Bryan Alvarez and Lynn Robertson (2013) demonstrated that when primed with graphemes colored congruently to their synesthetic associations, individuals 19-40 years of age with grapheme-color synesthesia had faster reaction times compared to when primed with achromatic graphemes that elicit a synesthetic color. I am hoping to develop an app that would allow people who have grapheme-color synesthesia to read text in their personal color associations. Although to non-synesthetes, text printed in a variety of colors may seem chaotic, but to me (a graphemecolor synesthete), graphemes printed in colors harmonious with my natural color association just feels right.  My proposed app would use artificial intelligence processes similar to those used with word prediction applications. Rather than word prediction, color prediction would convert files to text representing each synesthete’s respective colors. The app will continuously learn the individual’s personal color algorithms along with any anomalies.   Synesthesia co-occurs with neurological differences and learning differences. Specifically: Autism (including Asperger syndrome), ADHD, dyslexia, and dyspraxia. Simon Baron-Cohen, Donielle Johnson, Julian Asher, Sally Wheelwright, Simon Fisher, and Peter Gregerson (2013) demonstrated that in adults the rate of synesthesia was three times higher in people with autism (18.9%) compared to a control group of people without autism (7.22%). David Grant (2017) found that there is a co-occurrence of synesthetic experiences in individuals with ADHD, dyslexia, and dyspraxia. 17% of individuals with ADHD, 9% of dyslexics, and 14% of dyspraxics reported synesthetic experiences. Synesthetic experiences are also reported in 18% of individuals with both ADHD and dyslexia as well as 37% individuals with both ADHD and dyspraxia. This co-occurrence with disabilities suggests that this app could potentially have implications in educational interventions for different learners. 

## High Level Requirement

ColorInSync allows people who have grapheme-color synesthesia to read text in their personal color associations.

## Conceptual Design

This web application is usable by anyone with a device capable of rendering web pages. The frontend is coded in JavaScript with React and deployed via Vercell. The backend is in PHP with a Laravel Framework and hosted on an Amazon EC2 server. It communicates with a Python flask hosted on the same EC2 server and a PostGres database.

## Background

There are no other products or services rendering text in a grapheme-color synesthete's personal color associations.

## Required Resources

- Frontend framework
- Backend framework
- database
- server

## Collaborators

[//]: # ( readme: collaborators -start )
<table>
<tr>
    <td align="center">
        <a href="https://github.com/elijahbigham">
            <img src="https://avatars.githubusercontent.com/u/40969165?v=4" width="100;" alt="elijahbigham"/>
            <br />
            <sub><b>Elijah Bigham</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/AndrewDKahn">
            <img src="https://avatars.githubusercontent.com/u/49370482?v=4" width="100;" alt="AndrewDKahn"/>
            <br />
            <sub><b>Andrew Kahn</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/thanhnguyen46">
            <img src="https://avatars.githubusercontent.com/u/60533187?v=4" width="100;" alt="thanhnguyen46"/>
            <br />
            <sub><b>Mohammed Mohammed</b></sub>
        </a>
    </td>
        <td align="center">
        <a href="https://github.com/alyssatownsend">
            <img src="https://avatars.githubusercontent.com/u/70662763?v=4"width="100;" alt="alyssatownsend"/>
            <br />
            <sub><b>Alyssa Townsend</b></sub>
        </a>
    </td>
   </tr>
</table>

[//]: # ( readme: collaborators -end )
## Acknowledgements
The code to split compound words in order to color their components separately was based off of [Tim Kam's compound-word-splitter](https://github.com/TimKam/compound-word-splitter) by [Timotheus Kampik](https://github.com/TimKam), [fatkaratekid](https://github.com/fatkaratekid), and [Tessa Kettelberger](https://github.com/teakettel).
It uses [this conversion of Webster's English Dictionary to JSON](https://github.com/matthewreagan/WebstersEnglishDictionary) by [Matt Reagan](https://github.com/matthewreagan), [Brian S](https://github.com/bbbrrriiiaaannn), [Bhargav Chippada](https://github.com/bhargavchippada), and [Justin Katerberg](https://github.com/jkaterberg).
