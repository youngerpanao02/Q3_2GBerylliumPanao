# Seatwork #2 - Getting to know CSS Position and z-index.
### This seatwork will ask you to implement the different CSS position on a given code.
### short link to this .md file is: https://bit.ly/4c61P9K
#### Resources (also found in Khub week 5)
- [4 Minute Youtube Video on CSS Position](https://www.youtube.com/watch?v=YEmdHbQBCSQ)
- [CSS Position Tutorial](https://roycan.github.io/CssPositioningZIndexLab/)

### Instructions: 
1. This is individual submission in khub, but you can work with a partner.  When you submit in khub please place both your names in the submission bin.
2. Guided Activity (30 minutes), please follow what is being required.  

    - Make a copy of this .md file to your Q4 repository and name it as **SectionLNseatwork2.md** example **9LiCruzSeatwork2.md**. Place it in your q4 repository vscode local computer. Committing frequently to your Github repository.  
    - Copy the code below and paste it inside a new file (name it as SectionLNseatwork2.html). Place this file in the same location where the .md file is saved. 
    - Change the content values of the meta tags to your names for author/s and the date today for revised.
    - Please do the following tasks that will ask you to reposition HTML elements then answer the guided question for each task on the .md file. Commit changes to the .md file and to the .html file as well.
    **- This seatwork is worth 20pts and should be submitted by the end of the period** The link to [KHub submission bin](https://khub.mc.pshs.edu.ph/mod/assign/view.php?id=15481).
      - Submit the links to your .md file and .html file.

```html
<!DOCTYPE html>
<html>
<head>
  <meta name="author" content="<your names>" />
  <meta name="revised" content="<date today>" />
  <div class="notice">Notice!</div>
  <style>
    body { font-family: Arial, sans-serif; }
    .header, .footer {
      background: lightblue;
      padding: 10px;
    }
    .footer {
       opacity: 0.5;
       position: fixed; 
       bottom: 0; 
       width: 100%;
    }
    .sidebar {
      background: lightgreen;
      width: 150px;
      height: 200px;
    }
    .content {
      background: lightyellow;
      width: 300px;
      height: 200px;
      position: absolute; 
      top: 70px; 
      left: 200px;
    }
     .notice {
    position: absolute;
    top: 60px;
    left: 400px;
    background: orange;
    padding: 10px;
    z-index: 2;
}    
  </style>
</head>
<body>
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Main Content</div>
  <div class="footer">Footer</div>
</body>
</html>
```
### Step 1 (Static vs Relative):

- Add in css ```position: relative; top: 20px; left: 20px;``` to .sidebar.

- Guided Question: What changed compared to the default static positioning? Try to give different values to top and left or you can change it to bottom, right.

// The change I saw in changing the position of the content is primarily its position in the web. It is similar to static; however, I a changed the values to top, left, bottom, and right, its position changed while still moving with the webpage.

### Step 2 (Fixed):

- Add in css ```position: fixed; bottom: 0; width: 100%;``` to .footer.

- Guided Question: What happens when you scroll the page? Why does the footer behave differently from position relative?

// The element just stays in its position regardless of the user scrolling the webpage. The main difference between the two is its response as the webpage moves. Fixed position fixes the element onto one location (its original location), while relative changes it position while still being affected by how the webpage is manipulated.

### Step 3 (Absolute):

- Add in css ```position: absolute; top: 66px; left: 200px;``` to .content.

- Guided Question: What is the effect of position: absolute on an element? How is it different from fixed?

// The element, insead of basing it on the webpage itself, repositions based on its parent element.

### Step 4 : (Absolute)

- Add in html ```<div class="notice">Notice!</div>``` and include the css below:

```css
.notice {
    position: absolute;
    top: 60px;
    left: 400px;
    background: orange;
    padding: 10px;
    z-index: 2;
}
```

- Give .content a z-index: 1.
- Guided Question: Why does the notice appear on top of the content? What happens if you swap the z‑index values?

//z-index determines the order in which the overlapping elements appear. A larger z-index value means that they are "in front" of the other elements. In this case, z-indez of notice is 2, it's larger than content's 1 z-index, so it is on top of the content

- Challenge: 
    * What changes that you have to do on the code that will position .notice box on the top right corner of the .content box? Please write the code on paper as well (both html and css on the part of .notice and .content).

    .notice {
    position: absolute;
    top: 6%;
    left: 32.75%;
    background: orange;
    padding: 10px;
    z-index: 2;

    //Note: I made small changes in the position of .content

    * Try to change the position of .content to relative then to fixed. What do you observed each time?'

    //It relocates to the bottom of .sidebar

    * What do you observe on about the effect of z-index on .notice and .content boxes?
    //It prompts the odering in which the overlapping elements appear on webpage.

3. Please answer the following reflection questions (15 minutes)

    a. Could you summarize the differences between the CSS position values (static, relative, absolute, fixed)? 

    //Static is the default, relative is based on default however the element is changed regards to its position, absolute makes the element depend on its nearest parent element, and fixed fixes the element onto its position and won't be affected if the webpage scrolls.

    b. How does absolute positioning depend on its parent element?
    //When the parent element is relative, the position of the element under absolute positioning depends on the size of the parent element.

    c. How do you differentiate sticky from fixed (you can research on sticky)?
    //It is similar to relative, however it stops scrolling and behaves like a fized under its coding position values

    d. If you were designing a webpage for a school event, how might you use positioning to highlight important information? Please give concrete examples.
//I would used positioning to highlight important info such as details, venues, and time, and of course, registration booths.