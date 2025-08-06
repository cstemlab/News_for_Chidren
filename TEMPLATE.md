# News for Children - Story Template

This template provides the structure for creating engaging science stories for children, complete with interactive quizzes and documentation.

## File Structure

```
YYYY-MM-DD/
├── YYYY-MM-DD_story-title.html          # Main story file
├── quiz-content.md                       # Quiz documentation
├── chapter 1.png                         # Chapter images
├── chapter 2.png
├── ...
└── Final.png                            # Final chapter image
```

## Content Structure

### 1. Story Sections (in order)

1. **Title & Citation**
2. **Chapters** (7 chapters recommended)
3. **Fun Facts for Young Scientists**
4. **What You Can Do**
5. **Interactive Quiz** (Let's See What We Discovered!)
6. **Scientific Debrief** (for educators/parents)
7. **References** (Learn More)

### 2. Chapter Format

Each chapter should follow this structure:
- **Chapter Title**: Descriptive and engaging (e.g., "Chapter 1: Meet the Super-Fast Fish")
- **Chapter Image**: Visual representation of the concept
- **Content**: 2-3 paragraphs explaining the science in story format
- **Age-appropriate language**: Use analogies and metaphors children understand

### 3. Interactive Quiz Requirements

- **3 questions** total
- **Multiple choice** format (A, B, C, D)
- **Hints** for wrong answers only
- **Praise messages** for correct answers
- **Score tracking** with sticky scoreboard
- **Confetti celebration** for perfect score
- **Allow retries** for wrong answers

## HTML Template Structure

### CSS Variables (Color Scheme)
```css
:root {
    --primary-100: #FF6600;    /* Main orange */
    --primary-200: #ff983f;    /* Light orange */
    --primary-300: #ffffa1;    /* Yellow accent */
    --accent-100: #F5F5F5;     /* Light gray */
    --accent-200: #929292;     /* Medium gray */
    --text-100: #1d1f21;       /* Dark text */
    --text-200: #444648;       /* Medium text */
    --bg-100: #ffffff;         /* White background */
    --bg-200: #f5f5f5;         /* Light background */
    --bg-300: #cccccc;         /* Gray background */
}
```

### Required CSS Classes

#### Layout Classes
- `.container` - Main content wrapper (max-width: 800px)
- `.citation` - Citation box at top
- `.chapter` - Chapter containers
- `.big-picture` - Final chapter (same styling as chapters)

#### Special Sections
- `.fun-facts` - Gradient background section
- `.what-you-can-do` - Orange background with white text
- `.quiz-section` - Interactive quiz container
- `.scientific-debrief` - Gray background for educators
- `.references` - Reference links section

#### Quiz Components
- `.score-board` - Score display (becomes sticky in quiz)
- `.question` - Individual question containers
- `.options` - Flex column for answer choices
- `.option` - Individual answer buttons
- `.feedback` - Feedback messages
- `.hint` - Hint text (hidden by default)
- `.perfect-score` - Celebration message

#### Confetti System
- `#confetti-container` - Fixed container for confetti
- `.confetti` - Base confetti class
- `.confetti-large`, `.confetti-box`, `.confetti-ball`, `.confetti-flake`, `.confetti-star`, `.confetti-ribbon` - Different confetti types

### Required JavaScript Functions

#### Quiz Functions
```javascript
let score = 0;
let answeredQuestions = new Set();
const correctAnswers = { 1: 'A', 2: 'B', 3: 'C' }; // Update per quiz
const praises = { /* Praise messages for each question */ };

function checkAnswer(questionNum, selectedAnswer, isCorrect)
function updateScore()
function createConfetti()
```

#### Initialization
```javascript
document.addEventListener('DOMContentLoaded', function() {
    // Hide hints initially
    // Setup sticky scoreboard
});
```

## Quiz Content Template

### Quiz Documentation (quiz-content.md)
```markdown
# Quiz Content for "[Story Title]"

## Quiz Section: Let's See What We Discovered!

**Placement:** After the "What You Can Do" section

### Question 1: [Question text]
- A) [Option A]
- B) [Option B] 
- C) [Option C] ✓ (Correct)
- D) [Option D]

**Hint for wrong answers:** [Helpful hint referencing the story]
**Correct answer praise:** [Encouraging message]

[Repeat for Questions 2 and 3]
```

### HTML Quiz Structure
```html
<div class="quiz-section">
    <h2>Let's See What We Discovered!</h2>
    <div class="score-board" id="score-board">
        <h3>Your Score: <span id="score">0</span>/3</h3>
    </div>
    
    <div class="question" id="question1">
        <h3>Question 1: [Question text]</h3>
        <div class="options">
            <button class="option" onclick="checkAnswer(1, 'A', true)">A) [Option A]</button>
            <button class="option" onclick="checkAnswer(1, 'B', false)">B) [Option B]</button>
            <button class="option" onclick="checkAnswer(1, 'C', false)">C) [Option C]</button>
            <button class="option" onclick="checkAnswer(1, 'D', false)">D) [Option D]</button>
        </div>
        <div class="feedback" id="feedback1"></div>
        <div class="hint" id="hint1">[Hint text]</div>
    </div>
    
    <!-- Repeat for questions 2 and 3 -->
    
    <div id="confetti-container"></div>
    <div class="perfect-score" id="perfect-score">
        🎉 Congratulations! You got all 3 questions right! You're a true science detective! 🎉
    </div>
</div>
```

## Content Guidelines

### Writing Style
- **Age-appropriate**: Target 8-12 years old
- **Story format**: Present science as an adventure/mystery
- **Analogies**: Use familiar concepts (cars, factories, libraries, etc.)
- **Engaging**: Use active voice and exciting language
- **Educational**: Maintain scientific accuracy while simplifying

### Visual Elements
- **Chapter images**: One per chapter, descriptive alt text
- **Consistent styling**: All chapters use same format
- **Responsive design**: Works on mobile and desktop
- **Accessibility**: High contrast, readable fonts

### Interactive Elements
- **Quiz questions**: Test key concepts from the story
- **Immediate feedback**: Praise for correct, hints for wrong
- **Visual rewards**: Spectacular confetti for completion
- **Progress tracking**: Sticky scoreboard during quiz

## Technical Requirements

### Dependencies
- No external libraries required
- Pure HTML, CSS, and JavaScript
- Modern browser support (ES6+)

### Performance
- Optimized animations
- Efficient DOM manipulation
- Responsive images
- Clean up confetti elements after animation

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- High contrast colors
- Descriptive alt text for images

## Example File Names
- `2025-01-08_the-amazing-adventure-of-tiny-fish-brain-factories.html`
- `2025-02-15_the-mystery-of-dancing-molecules.html`
- `2025-03-22_journey-to-the-center-of-a-cell.html`

## Customization Points for Each Story

1. **Update color scheme** if needed (CSS variables)
2. **Replace content** in all sections
3. **Update quiz questions** and answers
4. **Change image sources** and alt text
5. **Modify scientific debrief** for the specific research
6. **Update references** with relevant links
7. **Adjust confetti colors** to match story theme

This template ensures consistency across all stories while maintaining the engaging, educational, and interactive experience for young readers.