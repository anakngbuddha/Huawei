# Quiz Components - Professional Design Guide

## Component Breakdown

### 1. Progress Bar Component
**Purpose**: Visual indicator of quiz progress

**Styling**:
- Height: 4px
- Background: Light gray (#e0e0e0)
- Fill: Black gradient
- Shadow: Subtle (0 1px 3px rgba(0,0,0,0.05))
- Transition: 0.4s cubic-bezier

**States**:
- Empty: Light gray background
- Filling: Animated black gradient
- Complete: 100% filled

**Responsive**: Maintains 4px height on all devices

---

### 2. Header Component
**Purpose**: Display question counter and timer

**Elements**:
- Question Counter (left)
  - Font: 14px, 600 weight
  - Color: Medium gray (#4a4a4a)
  - Style: Uppercase with letter-spacing
  
- Timer (right)
  - Font: 16px, 700 weight, monospace
  - Background: Secondary black (#1a1a1a)
  - Color: White
  - Padding: 8px 16px
  - Border-radius: 6px
  - Shadow: 0 2px 8px rgba(0,0,0,0.15)

**Layout**: Flex with space-between
**Border**: Bottom separator (1px solid #e0e0e0)

---

### 3. Question Content Component
**Purpose**: Display question and question type

**Sub-components**:

#### Type Badge
- Background: Light gray (#f5f5f5)
- Padding: 6px 12px
- Border-radius: 4px
- Font: 11px, 700 weight, uppercase
- Letter-spacing: 0.8px
- Color: Dark gray (#2d2d2d)

#### Question Text
- Font: 22px, 600 weight
- Color: Primary black (#000000)
- Line-height: 1.6
- Letter-spacing: -0.3px
- Margin-bottom: 10px

#### Instruction Text
- Font: 14px, italic
- Color: Medium gray (#4a4a4a)
- Margin-bottom: 25px

**Container**:
- Background: White
- Border: 1px solid #e0e0e0
- Padding: 30px
- Border-radius: 8px
- Margin-bottom: 30px

---

### 4. Options Component
**Purpose**: Display answer options

**Option Item**:
- Display: Flex with center alignment
- Padding: 16px 20px
- Border: 2px solid #e0e0e0
- Border-radius: 8px
- Background: White
- Cursor: Pointer
- Transition: 0.25s cubic-bezier

**Left Accent Bar**:
- Position: Absolute left
- Width: 3px
- Height: 100%
- Background: Primary black
- Transform: scaleY(0) → scaleY(1) on select
- Transition: 0.25s ease

**Hover State**:
- Border-color: Primary black
- Background: Light gray (#f5f5f5)
- Box-shadow: 0 2px 8px rgba(0,0,0,0.08)

**Selected State**:
- Border-color: Primary black
- Background: Light gray
- Box-shadow: 0 4px 12px rgba(0,0,0,0.12)
- Left accent: Visible (scaleY(1))

**Input Elements**:
- Width: 20px
- Height: 20px
- Margin-right: 14px
- Accent-color: Primary black

**Label**:
- Font: 16px, 500 weight
- Color: Primary black
- Flex: 1
- Cursor: Pointer

**Gap Between Options**: 12px

---

### 5. Feedback Component
**Purpose**: Show answer feedback and explanation

**Container**:
- Background: Light gray (#f5f5f5)
- Border-left: 4px solid primary black
- Border-radius: 6px
- Padding: 16px 20px
- Margin: 25px 0
- Animation: Slide-in 0.3s

**Feedback Content**:
- Font: 16px, 600 weight
- Color: Primary black
- Display: Flex with gap
- Margin-bottom: 12px

**Icon**:
- Font-size: 18px
- Margin-right: 10px

**Explanation**:
- Font: 14px
- Color: Medium gray
- Line-height: 1.6

**Strong Text**:
- Font-weight: 600
- Color: Primary black

---

### 6. Navigation Component
**Purpose**: Navigate between questions

**Container**:
- Display: Flex with space-between
- Gap: 16px
- Margin-top: 35px

**Previous Button**:
- Style: Secondary
- Background: White
- Color: Primary black
- Border: 2px solid #e0e0e0
- Padding: 14px 28px
- Border-radius: 8px
- Font: 15px, 600 weight

**Previous Button Hover**:
- Background: Light gray
- Border-color: Primary black
- Box-shadow: 0 4px 12px rgba(0,0,0,0.1)

**Submit/Next Button**:
- Style: Primary
- Background: Primary black
- Color: White
- Border: 2px solid primary black
- Padding: 14px 28px
- Border-radius: 8px
- Font: 15px, 600 weight
- Margin-left: auto

**Submit/Next Button Hover**:
- Background: Secondary black
- Border-color: Secondary black
- Box-shadow: 0 6px 16px rgba(0,0,0,0.2)
- Transform: translateY(-2px)

**Disabled State**:
- Opacity: 0.4
- Cursor: not-allowed

---

### 7. Results Header Component
**Purpose**: Display overall results and performance

**Container**:
- Text-align: center
- Padding: 60px 40px
- Background: Primary black (with gradients)
- Border-radius: 12px
- Color: White
- Margin-bottom: 40px
- Box-shadow: 0 8px 24px rgba(0,0,0,0.15)

**Icon Container**:
- Width: 80px
- Height: 80px
- Background: rgba(255,255,255,0.15)
- Border-radius: 50%
- Display: Flex center
- Margin: 0 auto 20px
- Font-size: 40px

**Title**:
- Font: 36px, 700 weight
- Margin-bottom: 10px
- Letter-spacing: -0.5px

**Subtitle**:
- Font: 16px
- Opacity: 0.9

**Gradient Variants**:
- Excellent: #000000 → #1a1a1a
- Good: #1a1a1a → #2d2d2d
- Needs Improvement: #2d2d2d → #1a1a1a

---

### 8. Stats Component
**Purpose**: Display quiz statistics

**Container**:
- Display: Grid
- Grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))
- Gap: 20px
- Margin-bottom: 40px

**Stat Card**:
- Background: White
- Border: 1px solid #e0e0e0
- Border-radius: 12px
- Padding: 30px
- Text-align: center
- Transition: 0.3s cubic-bezier
- Box-shadow: 0 2px 8px rgba(0,0,0,0.05)

**Stat Card Hover**:
- Transform: translateY(-6px)
- Box-shadow: 0 8px 20px rgba(0,0,0,0.1)
- Border-color: Primary black

**Stat Value**:
- Font: 42px, 700 weight
- Color: Primary black
- Margin-bottom: 8px
- Letter-spacing: -1px

**Stat Label**:
- Font: 13px, 600 weight
- Color: Medium gray
- Text-transform: uppercase
- Letter-spacing: 1px

---

### 9. Action Buttons Component
**Purpose**: Primary actions on results page

**Container**:
- Display: Flex
- Justify-content: center
- Gap: 16px
- Flex-wrap: wrap

**Button Base**:
- Padding: 14px 32px
- Border: None
- Border-radius: 8px
- Font: 15px, 600 weight
- Cursor: pointer
- Display: Flex with center alignment
- Gap: 8px
- Transition: 0.25s cubic-bezier
- Letter-spacing: 0.3px

**Secondary Button**:
- Background: White
- Color: Primary black
- Border: 2px solid #e0e0e0

**Secondary Button Hover**:
- Background: Light gray
- Border-color: Primary black
- Box-shadow: 0 4px 12px rgba(0,0,0,0.1)

**Primary Button**:
- Background: Primary black
- Color: White
- Border: 2px solid primary black

**Primary Button Hover**:
- Background: Secondary black
- Border-color: Secondary black
- Box-shadow: 0 6px 16px rgba(0,0,0,0.2)
- Transform: translateY(-2px)

---

### 10. Review Mode Component
**Purpose**: Display answers in review mode

**Correct Answer**:
- Border-color: Primary black
- Background-color: Light gray
- Left accent: Visible

**Incorrect Answer**:
- Border-color: Primary black
- Background-color: rgba(0,0,0,0.05)
- Opacity: 0.7

**Disabled Inputs**: All inputs disabled during review

---

## Responsive Adjustments

### Tablet (≤ 768px)
- Quiz container: 30px padding
- Quiz content: 20px padding
- Question text: 20px
- Results header: 40px 25px padding
- Results title: 28px
- Stats grid: 2 columns
- Navigation: Column direction

### Mobile (≤ 576px)
- Quiz container: 20px padding
- Quiz content: 20px padding
- Question text: 18px
- Option padding: 14px 16px
- Header: Column direction with 15px gap
- Timer: align-self flex-end
- Stats grid: 1 column
- Action buttons: Full width
- Navigation buttons: Full width

---

## Animation Specifications

### Slide-In Animation
```css
@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(-10px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}
Duration: 0.3s
Easing: cubic-bezier(0.4, 0, 0.2, 1)
```

### Fade-In Animation
```css
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
Duration: 0.3s
Easing: cubic-bezier(0.4, 0, 0.2, 1)
```

---

## Color Reference

| Element | Color | Hex |
|---------|-------|-----|
| Primary Text | Primary Black | #000000 |
| Secondary Text | Medium Gray | #4a4a4a |
| Muted Text | Medium Gray | #4a4a4a |
| Borders | Border Gray | #e0e0e0 |
| Backgrounds | Light Gray | #f5f5f5 |
| Buttons | Primary Black | #000000 |
| Accents | Primary Black | #000000 |

---

## Typography Reference

| Element | Size | Weight | Letter-spacing |
|---------|------|--------|-----------------|
| Question | 22px | 600 | -0.3px |
| Button | 15px | 600 | 0.3px |
| Label | 14px | 600 | 0.5px |
| Badge | 11px | 700 | 0.8px |
| Result | 42px | 700 | -1px |
| Stat Label | 13px | 600 | 1px |

---

## Spacing Reference

| Size | Value |
|------|-------|
| Small | 8px |
| Medium | 12px |
| Large | 20px |
| Extra Large | 30-40px |

---

This guide provides complete specifications for all quiz components. Use this as reference for customization or further development.
