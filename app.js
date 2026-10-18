// ── Ripple click effect on cards ──────────────────────────
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', function (e) {
    const ripple = document.createElement('span');
    const rect   = this.getBoundingClientRect();
    const size   = Math.max(rect.width, rect.height);
    const x      = e.clientX - rect.left - size / 2;
    const y      = e.clientY - rect.top  - size / 2;

    Object.assign(ripple.style, {
      position:      'absolute',
      width:         `${size}px`,
      height:        `${size}px`,
      left:          `${x}px`,
      top:           `${y}px`,
      borderRadius:  '50%',
      background:    'rgba(168, 85, 247, 0.18)',
      transform:     'scale(0)',
      animation:     'ripple-anim 0.55s ease-out forwards',
      pointerEvents: 'none',
    });

    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);

    ripple.addEventListener('animationend', () => ripple.remove());
  });
});

// inject ripple keyframe once
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple-anim {
    to { transform: scale(2.5); opacity: 0; }
  }
`;
document.head.appendChild(style);
