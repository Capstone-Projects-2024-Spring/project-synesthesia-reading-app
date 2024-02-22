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
adding test equation
$$
I = \int_0^{2\pi} \sin(x)\,dx
$$