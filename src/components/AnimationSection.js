export function AnimationSection() {
  return `
  <div class="relative lg:row-span-2">
    <div class="absolute inset-0 bg-dark overflow-hidden lg:rounded-[1rem]">
      <spline-viewer 
        url="https://prod.spline.design/ndoVSQ1KjCBPmczZ/scene.splinecode"
        class="w-full h-full"
      >
      </spline-viewer>
    </div>
  </div>
  `;
}