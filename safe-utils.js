const fs = require('fs');

function createColorDemo() {
  const template = `import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const ColorPaletteDemo = () => {
  const coreColors = [
    { name: 'Dark Chocolate', css: 'var(--color-dark-chocolate)', usage: 'Dark backgrounds' },
    { name: 'Rusty Orange', css: 'var(--color-rusty-orange)', usage: 'Brand accent' },
    { name: 'Slate Blue', css: 'var(--color-slate-blue)', usage: 'Primary buttons' },
    { name: 'Sandy Ochre', css: 'var(--color-sandy-ochre)', usage: 'Secondary accents' }
  ];

  return (
    <div className="p-lg space-y-lg bg-light-peachy">
      <h2 className="text-display-lg text-shared-dark font-rajdhani">
        Color Palette - Design Tokens
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-base">
        {coreColors.map((color) => (
          <div key={color.name} className="bg-card-surface p-base rounded-lg shadow-whisper">
            <div 
              className="w-full h-16 rounded mb-sm"
              style={{ backgroundColor: color.css }}
            />
            <h3 className="text-body-base font-semibold text-shared-dark">{color.name}</h3>
            <code className="text-body-sm font-mono text-slate-blue">{color.css}</code>
            <p className="text-body-sm text-warning-clay">{color.usage}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const meta: Meta<typeof ColorPaletteDemo> = {
  title: 'Foundation/Color Palette - FIXED',
  component: ColorPaletteDemo,
  parameters: { layout: 'fullscreen' }
};

export default meta;
export const Default: StoryObj<typeof ColorPaletteDemo> = {};`;

  fs.writeFileSync('src/stories/Foundation/ColorPalette-FIXED.stories.tsx', template);
  console.log('✅ Created safe ColorPalette story');
}

if (require.main === module) {
  createColorDemo();
}
