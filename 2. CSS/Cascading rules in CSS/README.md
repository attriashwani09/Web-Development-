1. Order: (In css if 2 or more types of same attributes are used for a single element, then whichever comes aat last will be preffered(used) ) 
means, If two selectors have the same importance and specificity, the later one in the stylesheet wins. 

2. Specificity: ID > Attribute > Class > (Decendant & child) > (Elements and Group Elements)*

 a) ID 
It have the highest priority

 b) Attribute 
Attributes have 2nd highest priority after class 

c) Class
After attribute class comes.

d) Decendant and child have same priority. Which comes at the end wins.  

e) At last Elements and group Elements have same priority.  
Whichever comes at end wins. 

3. Type (Origin)
 HIGHEST TO LOWEST
 a). Inline : It has the highest priority
 b). Internal And External Css have the same priority
 (Whichever comes at later wins.) 


 4. !important :If you use !important, that rule gets top priority, overriding normal rules (but still respects specificity).


