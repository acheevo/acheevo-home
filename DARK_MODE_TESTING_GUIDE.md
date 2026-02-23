# Dark Mode Testing Guide

## Quick Start

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Open the application** in your browser at `http://localhost:3000`

3. **Locate the dark mode toggle**:
   - Look at the top-right section of the Hero (first section)
   - The toggle is positioned next to "Sign In" button
   - It appears as a sun icon (light mode) or moon icon (dark mode)

4. **Test the toggle**:
   - Click the icon to switch modes
   - Observe smooth color transitions across all sections
   - Refresh the page - your preference should persist

## Comprehensive Testing Checklist

### Visual Testing

#### Hero Section
- [ ] Background image overlay adjusts properly
- [ ] Navigation text remains readable
- [ ] Logo and brand name visible
- [ ] CTA buttons maintain contrast
- [ ] Social proof badge readable
- [ ] Dark mode toggle icon animates smoothly

#### Features Section
- [ ] Section background transitions smoothly
- [ ] Feature cards have appropriate contrast
- [ ] Purple accent colors remain vibrant
- [ ] Step numbers clearly visible
- [ ] CTA section at bottom readable

#### TrustSignals Section
- [ ] Stats cards background changes appropriately
- [ ] Numbers and labels remain readable
- [ ] Success rate highlighted box visible
- [ ] Trust badges at bottom maintain styling
- [ ] Border colors provide good separation

#### Story Section
- [ ] Decorative gradients adjust properly
- [ ] Phone mockup UI switches to dark theme
- [ ] Chat bubbles have good contrast
- [ ] Interactive accordion cards visible
- [ ] Text in expanded states readable

#### Testimonials Section
- [ ] Featured testimonial card background changes
- [ ] Quote text remains readable
- [ ] Star ratings visible
- [ ] Profile image borders adapt
- [ ] "Read full story" link visible

#### Pricing Section
- [ ] Both pricing cards adapt properly
- [ ] Current/Coming Soon badges visible
- [ ] Feature checkmarks clear
- [ ] FAQ accordion transitions smoothly
- [ ] FAQ text readable when expanded
- [ ] Border separators visible

#### CTA Section
- [ ] Gradient background adjusts
- [ ] Pattern overlays remain subtle
- [ ] White button text maintains contrast
- [ ] Trust indicators at bottom visible

#### Footer
- [ ] Background color changes appropriately
- [ ] All link text readable
- [ ] Social icons maintain styling
- [ ] Newsletter input field usable
- [ ] Subscribe button visible
- [ ] Trust seals at bottom clear

### Functional Testing

#### Toggle Behavior
- [ ] Clicking toggle switches modes
- [ ] Icon changes from sun to moon (and vice versa)
- [ ] Icon rotation animation is smooth
- [ ] No flashing or jarring transitions
- [ ] Works on mobile devices

#### Persistence
- [ ] Dark mode preference saved to localStorage
- [ ] Preference persists after page refresh
- [ ] Preference persists after closing/reopening browser
- [ ] Works across different browser tabs (same origin)

#### System Preference
- [ ] Detects system dark mode on first visit
- [ ] User choice overrides system preference
- [ ] No conflicts between system and manual toggle

#### Transitions
- [ ] All color changes are smooth (300ms)
- [ ] No elements "pop" or flash
- [ ] Scrollbar theme changes appropriately
- [ ] Hover states work in both modes

### Accessibility Testing

#### Contrast Ratios
- [ ] All headings meet WCAG AA (4.5:1 minimum)
- [ ] All body text meets WCAG AA
- [ ] Interactive elements clearly distinguishable
- [ ] Purple accents remain vibrant but accessible

#### Keyboard Navigation
- [ ] Toggle can be focused with Tab key
- [ ] Toggle can be activated with Enter/Space
- [ ] Focus ring visible in both modes
- [ ] All other interactive elements work normally

#### Screen Readers
- [ ] Toggle has appropriate ARIA labels
- [ ] Mode changes announced properly
- [ ] All sections remain navigable

### Cross-Browser Testing

Test in multiple browsers:

#### Desktop
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (macOS)

#### Mobile
- [ ] Chrome Mobile (Android)
- [ ] Safari Mobile (iOS)
- [ ] Firefox Mobile

### Performance Testing

- [ ] Initial page load smooth
- [ ] No lag when toggling
- [ ] Smooth scrolling in both modes
- [ ] No memory leaks after multiple toggles
- [ ] Build size reasonable (check bundle)

### Edge Cases

#### Rapid Toggling
- [ ] Multiple rapid clicks handled gracefully
- [ ] No state conflicts
- [ ] Transitions don't stack/overlap

#### localStorage Issues
- [ ] Works in private/incognito mode
- [ ] Handles missing localStorage gracefully
- [ ] Falls back to system preference if needed

#### System Preference Changes
- [ ] Respects user's manual choice over system changes
- [ ] Only uses system preference on first visit

## Known Issues

Currently no known issues. If you encounter any:

1. Check browser console for errors
2. Verify localStorage is enabled
3. Clear cache and reload
4. Check if browser supports CSS `prefers-color-scheme`

## Testing Commands

```bash
# Development server
npm run dev

# Type checking
npm run type-check

# Linting
npm run lint

# Production build test
npm run build
npm run preview
```

## Manual Testing Scenarios

### Scenario 1: New User
1. Clear localStorage
2. Visit site with OS in dark mode
3. Verify site loads in dark mode
4. Toggle to light mode
5. Refresh - should stay in light mode

### Scenario 2: Returning User
1. Toggle to dark mode
2. Close browser completely
3. Reopen and visit site
4. Verify dark mode is active

### Scenario 3: Mobile Experience
1. Open site on mobile device
2. Test toggle in both orientations
3. Verify smooth transitions
4. Check all sections are scrollable

### Scenario 4: Accessibility
1. Navigate using only keyboard
2. Use screen reader to test toggle
3. Verify all content remains accessible
4. Check focus indicators visible

## Automated Testing (Future)

Consider adding these tests:

```typescript
// Example test structure
describe('Dark Mode', () => {
  it('should toggle between light and dark modes', () => {
    // Click toggle
    // Verify HTML class changes
    // Verify localStorage updated
  });

  it('should persist preference', () => {
    // Set dark mode
    // Reload page
    // Verify still dark
  });

  it('should respect system preference', () => {
    // Clear localStorage
    // Mock system preference
    // Verify correct mode
  });
});
```

## Visual Regression Testing

For visual consistency:

1. Take screenshots in both modes
2. Compare with baseline
3. Check for unintended changes
4. Verify gradients and shadows

## Performance Metrics

Monitor these metrics:

- **First Contentful Paint**: Should be similar in both modes
- **Toggle Response Time**: < 50ms
- **Transition Duration**: 300ms (as specified)
- **Memory Usage**: No increase after multiple toggles

## Reporting Issues

When reporting issues, include:

1. Browser and version
2. Operating system
3. Steps to reproduce
4. Screenshots (both modes)
5. Console errors (if any)
6. Expected vs actual behavior

## Success Criteria

The dark mode implementation is considered successful if:

✅ All sections are clearly visible in both modes
✅ Toggle works reliably across all browsers
✅ Preference persists correctly
✅ No accessibility regressions
✅ Smooth transitions without glitches
✅ Purple brand identity maintained
✅ All interactive elements remain usable
✅ No performance degradation
