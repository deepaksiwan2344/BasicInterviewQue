 /*1. What is HTML?
Answer:
HTML (HyperText Markup Language) is the standard language for creating web pages. It structures the
content on the web using various tags like headings, paragraphs, images, links, etc.

2. What is the difference between a block-level element and an inline element?
Answer:
Block-level elements take up the full width available and start on a new line (e.g., <div>, <p>, <h1>, <section>).

Inline elements do not start on a new line and only take up as much width as necessary (e.g., <span>, <a>, <img>).


3. What are semantic HTML tags?
Answer:
Semantic HTML tags clearly describe their meaning to both the browser and the developer. Examples include:

<article> for an article

<section> for a section

<header>, <footer>, <nav> for layout elements
They improve accessibility and SEO.

4. What is the purpose of the alt attribute in an <img> tag?
Answer:
The alt (alternative) attribute provides text that describes the image. It is useful for screen 
readers, SEO, and when the image fails to load.

5. What is the difference between the id and class attributes in HTML?
Answer:

id is unique and used to identify a single element (#id in CSS).

class can be reused across multiple elements (.class in CSS).

6. What does the target="_blank" attribute do in an anchor (<a>) tag?
Answer:
It opens the linked document in a new browser tab or window.

html
Copy
Edit
<a href="https://example.com" target="_blank">Visit</a>

7. What are void (self-closing) elements in HTML?
Answer:
Void elements are HTML tags that do not have closing tags. Examples:

<br> for line break

<hr> for horizontal rule

<img>, <input>, <meta>

8. What is the use of the <meta> tag in HTML?
Answer:
The <meta> tag provides metadata about the document like character set, author, description, viewport settings for responsiveness, etc.

Example:

html
Copy
Edit
<meta name="viewport" content="width=device-width, initial-scale=1.0">

9. What is the difference between <section> and <div>?
Answer:

<section> is a semantic tag used for grouping related content with a heading.

<div> is a non-semantic tag used as a generic container without specific meaning.

10. How is HTML5 different from previous versions?
Answer:
HTML5 introduced:

New semantic tags (<header>, <footer>, <article>, <nav>)

Multimedia support (<audio>, <video>)

Form enhancements (new input types like email, date)
APIs like localStorage, canvas, and geolocation

11. What is the difference between <em> and <i> tags in HTML?
Answer:

<em> stands for emphasis. It not only displays the text in italic but also adds semantic meaning, indicating 
that the text should be emphasized when read by screen readers.

<i> is used to display text in italic style purely for visual effect, without adding any semantic importance.
 Use <em> when the emphasis matters contextually (accessibility and SEO).
  Use <i> for styling purposes (e.g., icon fonts, technical terms).


  12. What is the purpose of the DOCTYPE declaration in HTML?
Answer:
The <!DOCTYPE> declaration defines the document type and HTML version being used. It helps browsers render the page in standards-compliant mode.

In HTML5, it is written as:


HTML5:
Latest major version (released 2014+), introduced semantic tags, audio/video support, APIs, and more.
<!DOCTYPE html>


. What is the difference between <b> and <strong>, and between <i> and <em> tags?

The <b> and <i> tags are used for styling text to be bold and italic respectively,
 without conveying any extra importance or emphasis. In contrast, <strong> and <em> not only 
 style the text (bold and italic respectively) but also semantically indicate that the text is 
 of greater importance (<strong>) or should be emphasized (<em>). 
 This semantic meaning can be beneficial for accessibility and SEO.

  How can you make an HTML element editable in the browser?
  To make an HTML element editable directly in the browser, you can set the contenteditable
  attribute to true. This allows users to edit the content of the element in place.
  <div contenteditable="true">
  This is an editable div. Click here to edit the text.
</div>


What is an HTML Attribute?
An attribute provides additional information about an HTML element. It's always written
in the opening tag of an element in the form of name="value"


*/

