# Algorithms
The Synesthesia Reading App will use a series of algorithms to render words in a synesthete's colors.
First, a word is separated into its morphemic components, which are colored
separately. Then, the 
weighting of each letter for a component's coloring algorithm is determined. 
These weights are affected by letters' position within the component and their
type (vowel or consonant), based on the weights of letters of similar type 
and position in other words. Finally, the coloring algorithm for a component 
is run with the determined weights.

### Coloring a Monomorphemic Word or Word Component
A monomorphemic word/component will be colored using a weighted average of the
RGB values of each letter, where $1 = \sum_{1}^{n}\mathrm{w}_{i}^{}$

$$
Average\ R: \mathrm{w}_{1}^{} * \mathrm{R}_{1}^{} \ +\ \mathrm{w}_{2}^{} * \mathrm{R}_{2}^{} \ +\ \mathrm{w}_{3}^{} * \mathrm{R}_{3}^{} \ +\ ... \ +\ \mathrm{w}_{n}^{} * \mathrm{R}_{n}^{}

\\
Average\ G:\ \mathrm{w}_{1}^{} * \mathrm{G}_{1}^{} \ +\ \mathrm{w}_{2}^{} * \mathrm{G}_{2}^{} \ +\ \mathrm{w}_{3}^{} * \mathrm{G}_{3}^{} \ +\ ... \ +\ \mathrm{w}_{n}^{} * \mathrm{G}_{n}^{}

\\
Average\ B:\ \mathrm{w}_{1}^{} * \mathrm{B}_{1}^{} \ +\ \mathrm{w}_{2}^{} * \mathrm{B}_{2}^{} \ +\ \mathrm{w}_{3}^{} * \mathrm{B}_{3}^{} \ +\ ... \ +\ \mathrm{w}_{n}^{} * \mathrm{B}_{n}^{}
$$