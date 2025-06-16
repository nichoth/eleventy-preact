#!/bin/bash

# Component renames
mv src/components/App.js src/components/app.js
mv src/components/BaseWrapper.js src/components/base-wrapper.js
mv src/components/LayoutDefault.js src/components/layout-default.js
mv src/components/LikeForm.js src/components/like-form.js
mv src/components/SectionContent.js src/components/section-content.js
mv src/components/SectionHero.js src/components/section-hero.js
mv src/components/SectionMasonry.js src/components/section-masonry.js
mv src/components/SectionTeaser.js src/components/section-teaser.js

# CSS renames (if they exist)
mv src/components/BaseWrapper.css src/components/base-wrapper.css 2>/dev/null || true
mv src/components/LayoutDefault.css src/components/layout-default.css 2>/dev/null || true
mv src/components/LikeForm.css src/components/like-form.css 2>/dev/null || true
mv src/components/SectionContent.css src/components/section-content.css 2>/dev/null || true
mv src/components/SectionHero.css src/components/section-hero.css 2>/dev/null || true
mv src/components/SectionMasonry.css src/components/section-masonry.css 2>/dev/null || true
mv src/components/SectionTeaser.css src/components/section-teaser.css 2>/dev/null || true
