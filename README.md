an HTML similar to our animal farm project as we will be looping and rendering and appending our data 


## rubric
Learning Objectives
Render a list of items with a link to a detail page (list / detail pattern)
Use URLSearchParams to get additional data about a web page
Use a function to filter an item from a list of data using an identifier
Description
This deliverable is a little more open-ended. You will use one of your lists of data from your spotlight topic last week and create a web application using the list / detail pattern. Your app should consist of two pages – the home page which lists out all your items, and a detail page which uses URLSearchParams to render an individual item. You should also use this deliverable to practice CSS and add some fun styling to the page.

Acceptance Criteria
Users should see a list of items on the home page
Users should be able to click on each item on the home page and be taken to a detail page
The detail page should use URLSearchParams to load an individual item
Rubric
Task	Points
** Deploy Requirements **	 
Main branch deployed to Netlify	1
Open PR from dev branch with Netlify deploy preview	1
** Code Requirements **	 
Home page shows list of items with links to detail page	4
TDD Render Function for home page items	4
Detail page uses URLSearch params	4
Detail page uses findById function	4
CSS Styling	2

## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"**
1) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
