# ✨ MiracleDex Project Report

**Student Name: Sofia Licheri**  
**Course:** CSCI 270 – Web/Mobile App Development  
**Project Title:** MiracleDex  
**Submission Date: June 11, 2025**  
**GitHub Repo:** https://github.com/sofialicheri/miracledex  
**Live Site (GitHub Pages):** https://sofialicheri.github.io/MiracleDex/

---

## 🔷 Part 1 — HTML/CSS Layout and Responsive Design

### ✅ Requirements Addressed
- [x] Landing page created with heading and container
- [x] Used Flexbox or Grid layout
- [x] Mobile-friendly design with media queries
- [x] Elegant, reverent styling with a Google Font
- [x] External CSS file used

### 📸 Screenshots
<img src="miracledex app browser1.png" width=60%>
<img src="miracledex mobile1.jpg" width=60%>
 

### 🔍 Code Snippets
#### HTML General Structure:
```javascript
  <!DOCTYPE html>
  <html lang="en">
  <head>...<title>MiracleDex</title>
  </head>
  <body>
  <div class="page-container">
    <!-- Header Area -->
    <header class="header">
      <h1>MiracleDex</h1>
      <h2> A catalog of miraculous signs thoughout the history, inspired by Bl. Carlo Acutis' great work!</h2>
    </header>
  
      <!-- Main Grid Section -->
    <div class="main" id = "grid-cards"></div>
    <div id="loadMoreBtn-container"></div>
  </div>
    <script src="miracles.js"></script>
  </body>
  </html>
```

#### Layout Structure Highlights:
```javascript
...
#grid-cards{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    padding: 2rem;
    width: 80%;
    max-width: 1200px;
    grid-gap: 40px;
    margin: auto;
}

.card button:hover { background-color: #d3d3b7; opacity: 0.7; }

#loadMoreBtn-container {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}


.details {
  margin-top: 10px;
  font-size: 14px;
  color: #333;
}

/* Responsive design */
@media (max-width: 768px) {
  #grid-cards {
    grid-template-columns: 1fr;
  }
.card h1{
    font-size:25px;
  }

.card h2{
    font-size:20px;
  }

.card p{
    font-size:16px;
  }
}
...
```

#### JavaScript Code Highlights:
```javascript
// establish batch size
let miracles = [];
let visibleMiracles = 0;
let batchSize = 6;

// fetch miracle dataset and render miracle cards, showing batch by batch
async function loadMiracles() {
    const response = await fetch('https://gist.githubusercontent.com/trevortomesh/7bbf97b2fbae96639ebf1a254b6a7a70/raw/miracles.json');

    if (!response.ok) {
        // HTTP-level error (e.g. 404, 500)
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    miracles = await response.json();

    renderMiracles();
}

function renderMiracles(){
  const cardset = document.getElementById('grid-cards');
  const nextBatch = miracles.slice(visibleMiracles, visibleMiracles+batchSize);
  nextBatch.forEach(miracle => {
    const card = createElement(miracle);
    cardset.appendChild(card);
  })
  // update visible miracles plus batch size
  visibleMiracles += batchSize;

}
...
```

### 🖋️ Reflection


Designing a responsive layout was not too challenging for me due to the previous practice from the class lesson.
The small challenge I faced in making the app responsive was being able to correctly center
the cards to the middle of the screen, regardless of their size and the size of the screen, since the settings 
and different options for styling grids can seem too various and overwhelming. However, this was a learning experience to be able to research and be more exposed to what grid styling options a CSS file provides,
and play around with them to achieve the look I was hoping to recreate!


---

## 🔷 Part 2 — JavaScript + DOM + JSON Integration

### ✅ Requirements Addressed
- [x] Fetched data from:  
  `https://gist.githubusercontent.com/trevortomesh/7bbf97b2fbae96639ebf1a254b6a7a70/raw/miracles.json`
- [x] Rendered miracle title, location, year, summary
- [x] Used `fetch()` and `async/await`
- [x] Implemented "Load More" or pagination
- [x] Added modal or expandable section with full miracle details

### 📸 Screenshots


Here is the expanded view of the cards from the web or the mobile version!

<img src="miracledex app browser2.png" width=60%>
<img src="miracledex mobile2.jpg" width=60%>

### 🔍 Code Snippets
```javascript
...
// updating the card when clicking "Learn more" or "Close" with card details!
function showInfo(data, cardElement) {
  const button = cardElement.querySelector("button");
  const detailedCard = cardElement.querySelector(".details");

  if (detailedCard) {
    detailedCard.remove();
    button.textContent = "Learn More";
  } else{
    const details = document.createElement("div");
    details.classList.add("details");
    details.innerHTML = `
                <p>${data.category}</p>
                <p>${data.details}</p>
            `;
    // this 'insertBefore' function was exactly perfect for positioning the detailed added text in my card!
    cardElement.insertBefore(details, button);
    button.textContent = "Close";

  }
}
```
### 🖋️ Reflection
Working with asynchronous JavaScript was another skill developing challenge during the making of this app! I realized better how async/await works with fetch() for data, realizing that data must load before rendering it! I then set forth a few error-catching codes, and the async allows for the page to be responsive still even while loading!

A debugging technique I used to debug the fetching of the data was console.log(),
 which prints statements that show the outcome of the getting of the data. Furthermore, I had to inspect elements of my browser to identify why some elements were not being injected in the desired manner or would break the layout. Tracking the changes through GitHub also avoided multiple catastrophes from happening in my constant experimentation with the code! 
---

## 🔷 Part 3 — GitHub Repository and Documentation

### ✅ Requirements Addressed
- [x] GitHub repo created and pushed
- [x] GitHub Pages deployed
- [x] `README.md` contains project description, instructions, and screenshots

### 📎 Links
- **GitHub Repo:** https://github.com/sofialicheri/miracledex
- **Live GitHub Pages Site:** https://sofialicheri.github.io/MiracleDex/

### 🖋️ Reflection
Using GitHub, at the beginning, affected me negatively. My other class practice projects began all loading to the repository and I could not figure out a way to delete them, and thus I had to restart my repository and place the items to upload in a directory for easier selection.
After the initial struggle was over, I began getting more comfortable adding and committing changes, which was extremely useful for the updates of the project during different days.
Especially when I began experimenting in how to update a current card to display the detailed information, saving and pushing my successful changes was key before I would try the next part.
This project allowed me to get direct basic experience tracking changes and updates to code through Git and GitHub, which has been especially useful after the fast class lesson we had on it!

---

## 🧠 Final Reflection
This app was inspired by the work of the soon-to-be canonized Bl. Carlo Acutis, who did the first website on information about eucharistic miracles he collected from around the world.
The app consists on a display of a set of multiple cards containing information about several miracles including eucharistic miracles, healing miracles, marian apparitions, and incorrupt saints!
The purpose intended in the creation of the app is that by following the steps of the young saint, I may showcase the beauty of God's reminders of His infinite Mercy and Love for us through the visible expressions in miracles, putting my newly learned skills to the service and honor of God.

The hardest challenge in the development of this app was the step between fetching the data and creating a new card for each that can be then updated when clicking "Learn More" or "Close".
I am very proud of having pushed to get the card to truly expand and even change the button name, text, and function when updating the card - instead of giving up when I though all I could do is display the details of the selected miracle at the top of the screen!
This improvement makes the user experience of the app more smooth, structured, and organized!

I would love to hear what your favorite miracle is! Feel free to reach me at **sofia.licheri@my.avemaria.edu** to share your thoughts or suggest a new miracle for the collection!

---
## Acknowledgment and References

This project was developed using guidance from ChatGPT (OpenAI, 2025). ChatGPT was used to assist with:
- Structuring the HTML layout into header and grid sections by providing guiding dimensions with margins, padding, and grip-gap in rems.
- Aligning and centering CSS Grid cards in the responsive screen.
- Saving each miracle and creating a card for each, with the addList to class and createElement functions.
- Helped me in adding these two lines:
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  to fix the @media code that was not working on my phone as desired.
- Guided me in the batch size slicing for my button to correctly split the dataset.
- Corrected my error in my attempt to update and expand the card to show miracle details.

The content was mostly based on my own prior notes and assignments from the class lectures and practice, and adapted with ChatGPT’s assistance for layout improvements.

OpenAI. (2025, June 8). *Conversation with ChatGPT: CSS Grid Layout Guidance for a Card-Based Website*. ChatGPT (Version 4). https://chat.openai.com
<sub>Assignment created by Dr. Trevor Tomesh with assistance from ChatGPT. All source miracle data provided from public JSON: https://gist.github.com/trevortomesh/7bbf97b2fbae96639ebf1a254b6a7a70</sub>
